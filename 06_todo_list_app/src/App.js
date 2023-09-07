import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import InputItem from "./components/InputItem";
import './App.css';

function App() {

  // for the whole list - array
  const [todoList, setTodoList] = useState([]);

  const addItem = (todoItem) => {
    setTodoList((previousValue) => {
      // previousValue will be the array
      // which we will unpack (spread operator) and add the new item
      // at the end
      return [...previousValue, todoItem];
    });
  };

  // the id is passed from ToDoItem.jsx
  const deleteItem = (id) => {
    // we delete the item with the given id
    // first we tap to the current array
    setTodoList((prevValue) => {
      // and then with filter we return the array
      // but without the given index (id) value in it
      return prevValue.filter((element, index) => {
        // so all elements that pass this will be returned
        // only element with index = id will not get passed
        return index !== id;
      });
    });
  };

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputItem onAddItem={addItem}/>
      <div>
        <ul>
          {todoList.map((item, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={item}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;