import './Select.scss';

const Select = ({ options, selectedOption, onChange }) => {
  return (
    <select value={selectedOption} onChange={onChange}>
        {
          options && options.map(option => (
            <option value={option.id}>{option.title}</option>
          ))
        }
    </select>

  )
}

export default Select;