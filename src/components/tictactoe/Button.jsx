const Button = ({ content, handleClick, index, disabled }) => {
  return <button className="w-full text-8xl" disabled={disabled} onClick={() => handleClick(index)}>{content || ""}</button>;
};

export default Button;
