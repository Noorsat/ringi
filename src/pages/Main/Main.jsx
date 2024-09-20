import { useState } from 'react';
import { city } from '../../data/city'
import Input from '../../ui/Input/Input'
import Range from '../../ui/Range/Range'
import Select from '../../ui/Select/Select'
import './Main.scss'
import Button from '../../ui/Button/Button';

const Main = ({ addJobHandler }) => {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    from: "",
    to: "",
    selectedCityId: 0
  })

  return (
    <div className='create'>
      <div className="create__wrapper">
        <div className="create__title">
          Post Job
        </div>
        <div className="create__input">
          <Input 
            type="text"
            placeholder="Job Title"
            label="Job Title"
            value={postData.title}
            setValue={(e) => setPostData({...postData, title: e.target.value })}
          />
        </div>
        <div className="create__input">
          <Input 
            type="text"
            placeholder="Description"
            label="Description"
            value={postData.description}
            setValue={(e) => setPostData({...postData, description: e.target.value })}
          />
        </div>
        <div className="create__input">
          <div className="create__salary-title">
            Salary
          </div>
          <Range 
            fromData={postData.from}
            fromDataChange={(e) => setPostData({...postData, from: e.target.value})}
            toData={postData.to}
            toDataChange={(e) => setPostData({...postData, to: e.target.value})}
          />
        </div>
        <div className="create__input">
          <div className="create__location-title">
            Location
          </div>
          <Select
            options={city} 
            selectedOption={postData.selectedCityId}
            onChange={(e) => setPostData({...postData, selectedCityId: e.target.value}) }
          />
        </div>
        <Button
          text="Post Job"
          onClick={() => { addJobHandler(postData); setPostData({
            title: "",
            description: "",
            from: "",
            to: "",
            selectedCityId: 0
          }); }}
        />
      </div>
    </div>
  )
}

export default Main