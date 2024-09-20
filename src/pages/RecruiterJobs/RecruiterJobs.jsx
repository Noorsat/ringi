import { useState } from 'react';
import JobItem from '../../components/JobItem/JobItem';
import Modal from '../../ui/Modal/Modal'
import './RecruiterJobs.scss';
import ResponcesItem from '../../components/ResponcesItem/ResponcesItem';

const RecruiterJobs = ({ jobs, responces }) => {
  const [selectedJobId, setSelectedJobId] = useState(0);

  console.log(selectedJobId)
  console.log(responces)

  return (
    <div className='myJobs'>
      <Modal
        show={selectedJobId > 0}
        onClose={() => setSelectedJobId(0)}
      >
        {
          responces.filter(response => response.jobId === selectedJobId).map(response => (
            <ResponcesItem
              name={response.name}
              email={response.email}
              coverLetter={response.coverLetter}
              resume={response.resumeFile}
            />
          ))
        }
      </Modal>
      <div className="jobs__wrapper">
          <div className="jobs__title">
            My Job List
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
                openModal={(id) => setSelectedJobId(id)}
                mode='recruiter'
              />
            ))
          }
        </div>
    </div>
  )
}

export default RecruiterJobs