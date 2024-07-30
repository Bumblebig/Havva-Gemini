const Button = ({ variant, size, children, onClick }) => {

  return (
    <button className={`btn ${variant} ${size}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;