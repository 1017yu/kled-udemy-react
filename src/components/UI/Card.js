import "./Card.css";

// Card wrapper component
const Card = (props) => {
  const classes = "card " + props.className;
  // props.children : Create wrapper component
  return <div className={classes}>{props.children}</div>;
};

export default Card;
