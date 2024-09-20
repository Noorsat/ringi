import { useState } from 'react';
import './Jobs.scss'
import JobItem from '../../components/JobItem/JobItem'
import Modal from '../../ui/Modal/Modal';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

const Jobs = ({ jobs, addResponseHandler }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(0);
  const [jobApply, setJobApply] = useState({
    name: '',
    email: '',
    coverLetter: '',
    resumeFile: null,
    jobId: 0
  })
  const openModal = (id) => {
    setShowModal(true);
    setSelectedJobId(id);
  }
  const closeModal = () => {
    setShowModal(false);
    setSelectedJobId(0);
  } 

  return (
    <div className='jobs'>
      <Modal show={showModal} onClose={closeModal}>
        <div className="jobs__modal-input">
          <Input
            type='text'
            placeholder='Name'
            value={jobApply.name}
            setValue={(e) => setJobApply({...jobApply, name: e.target.value })}
            label='Name'
          />
        </div>
        <div className="jobs__modal-input">
          <Input
            type='text'
            placeholder='Email'
            value={jobApply.email}
            setValue={(e) => setJobApply({...jobApply, email: e.target.value })}
            label='Email'
          />
        </div>
        <div className="jobs__modal-input">
          <Input
            type='text'
            placeholder='Cover Letter'
            value={jobApply.coverLetter}
            setValue={(e) => setJobApply({...jobApply, coverLetter: e.target.value })}
            label='Cover Letter'
          />
        </div>
        <div className="jobs__modal-input">
          <Input
            type='file'
            setValue={(e) => setJobApply({...jobApply, resumeFile: e.target.files[0] })}
            label='Resume'
          />
        </div>
        <div className="jobs__modal-button">
          <Button 
            text='Respond'
            onClick={() => {addResponseHandler({...jobApply, jobId: selectedJobId }); closeModal(); setJobApply({
              name: '',
              email: '',
              coverLetter: '',
              resumeFile: null,
              jobId: 0
            }) }}
          />
        </div>
      </Modal>
      <div className="jobs__wrapper">
        <div className="jobs__title">
          Job List
        </div>
        {
          jobs && jobs.map(job => (
            <JobItem
              title={job.title}
              descr={job.description}
              from={job.from}
              to={job.to}
              id={job.id}
              selectedCityId={job.selectedCityId}
              openModal={(id) => openModal(id)}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Jobs