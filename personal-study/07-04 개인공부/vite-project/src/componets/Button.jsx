const Button = ({text, color}) => {
  return (
    <button style={{ backgroundColor: color }}>
      {text} - {color}
      클릭
    </button>
  );
}

export default Button;