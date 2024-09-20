import Input from '../Input/Input'
import './Range.scss'

const Range = ({ fromData, fromDataChange, toData, toDataChange }) => {
  return (
    <div className='range'>
        <div className="range__wrapper">
            <Input
                type='text'
                placeholder='От'
                value={fromData}
                setValue={fromDataChange}
            />
            <Input 
                type='text'
                placeholder='До'
                value={toData}
                setValue={toDataChange}
            />
        </div>
    </div>
  )
}

export default Range