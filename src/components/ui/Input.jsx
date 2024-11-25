import './Input.scss';

// eslint-disable-next-line react/prop-types
const Input = ({ type = 'text', placeholder = '', value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />
  );
};

export default Input;
