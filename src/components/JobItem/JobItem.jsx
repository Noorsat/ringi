import './JobItem.scss';
import { city } from '../../data/city';
import Button from '../../ui/Button/Button';

const JobItem = ({ title, descr, from, to, id, selectedCityId, openModal, mode }) => {
  return (
    <div className='jobItem'>
      <div className="jobItem__wrapper">
        <div className="jobItem__wrapper-left">
          <div className="jobItem__title">
            {title}
          </div>
          <div className="jobItem__descr">
            {descr}
          </div>
        </div>
        <div className="jobItem__wrapper-right">
          <div className="jobItem__price">
            {from} тенге - {to} тенге
          </div>
          <div className="jobItem__location">
            {city.find(item => item.id == selectedCityId)?.title}
          </div>
        </div>
      </div>
      <Button 
        text={ mode == 'recruiter' ? 'View Responces' : 'Respond'}
        onClick={() => openModal(id)}
      />
    </div>
  )
}

export default JobItem