import "../App.css";

const Button = (title = "Click me!", active, onClickHandler) => {
  return (
    <button className={active} onClick={onClickHandler}>
      Set Timer
    </button>
  );
};

export default Button;
