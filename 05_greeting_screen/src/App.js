import { useState } from "react";
import './App.css';

function App() {
  // usign state with a object
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleChange(event) {
    // const name = event.target.name
    // const value = event.target.value
    const { name, value } = event.target;
  
  // updating the contac object
  setContact((prevValue) => {
    return {
      // spread operator - prevValue will hold the previous rendered value by
      // React which will include the whole object
      ...prevValue,
      // you need to add the square brackets
      // to make it interprate as the string
      // value that it holds
      // otherwise it will create a new key
      // called 'name'
      [name]: value


      // if (name === "fName") {
      //   return {
      //     fName: value,
      //     lName: prevValue.lName,
      //     email: prevValue.email
      //   };
      // } else if (name === "lName") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: value,
      //     email: prevValue.email
      //   };
      // } else if (name === "email") {
      //   return {
      //     fName: prevValue.fName,
      //     lName: prevValue.lName,
      //     email: value
      //   };
      // }
      };
    });
  };

  return (
    <div className="container">
    <h1>
      Hello {contact.fName} {contact.lName}
    </h1>
    <p>{contact.email}</p>
    <form>
      <input
        onChange={handleChange}
        name="fName"
        value={contact.fName}
        placeholder="First Name"
      />
      <input
        onChange={handleChange}
        name="lName"
        value={contact.lName}
        placeholder="Last Name"
      />
      <input
        onChange={handleChange}
        name="email"
        value={contact.email}
        placeholder="Email"
      />
    </form>
  </div>
  );
}

export default App;