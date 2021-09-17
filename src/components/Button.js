import "./App.css";

function Button(title, active, onClickHandler) {
  return (
    <button className={active} onClick={onClickHandler}>
      {title}
    </button>
  );
}

export default Button;
