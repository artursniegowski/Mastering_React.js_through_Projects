import './App.css';
import Card from './components/Card';
import contacts from "./contacts.js";
import Avatar from './components/Avatar';

// let allCardElements = contacts.map((contact, index) => {
//   return (
//     <Card
//       key={index}
//       name={contact.name}
//       img_src={contact.imgURL}
//       phone={contact.phone}
//       email={contact.email}
//     />
//   );
// });

let createCard = (contact, index) => {
  return <Card 
      key={index}
      name={contact.name}
      img_src={contact.imgURL}
      phone={contact.phone}
      email={contact.email}
  />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img_src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60"/>
      {/* {allCardElements} */}
      {contacts.map(createCard)}
    </div>
  );
}

export default App;
