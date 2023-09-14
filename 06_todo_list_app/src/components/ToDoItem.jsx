// ToDoItem component
function ToDoItem(props) {
  return (
    <li
      // props.onChecked(props.id) - this wouldent work
      // bc it would got called right away
      // so we can create a funciton that will get trigered
      // when we click the element
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
