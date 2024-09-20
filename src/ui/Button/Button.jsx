import './Button.scss';

const Button = ({ text, onClick, disabled, width }) => {
  return (
    <button onClick={onClick} disabled={disabled} style={{ width: width }}>
        { text }
    </button>
  )
}

export default Button;