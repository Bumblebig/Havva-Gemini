import PropTypes from 'prop-types'; 

const TextInput = ({
  id,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  ...props
}) => {


  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      type={type}
      className={"text-input"}
      {...props}
    />
  );
};

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'danger']),
  className: PropTypes.string,
};

export default TextInput;
