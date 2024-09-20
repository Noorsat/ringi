import './Input.scss'

const Input = ({ type, placeholder, value, setValue, label }) => {
  return (
    <div className='input'>
      <label>
        { label }
      </label>
      {
        type == 'file' ? 
          <input 
            type={type}
            onChange={setValue}
          />
        :
          <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={setValue} 
          />
      }
      
    </div>

  )
}

export default Input;