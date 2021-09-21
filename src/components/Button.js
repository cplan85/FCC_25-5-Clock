import "../App.css";

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClickHandler}>
      {props.title}
    </button>
  );
};

export default Button;
