import { useState } from "react";
// InputItem component
function InputItem (props) {
    // for single element
    const [todoItem, setTodoItem] = useState("");
    
    // for creating a closed component
    const updateInput = (event) => {
        setTodoItem(event.target.value);
    };

    return (
        <div className="form">
        <input
          type="text"
          name="todoItem"
          value={todoItem}
          onChange={updateInput}
          placeholder="Add new task..."
        />
        <button className="btn" onClick={ () => {
            props.onAddItem(todoItem)
            // set the input to empty string
            // after adding to a value
            setTodoItem("");   
        }}>
          <span>Add</span>
        </button>
      </div>
    )
}

export default InputItem;