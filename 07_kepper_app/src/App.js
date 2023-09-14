import React, { useState } from 'react';
import './App.css';
import Note from './components/Note';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';

function App() {
  // variable to store the notes - array of objects 
  const [notes, setNotes] = useState([]);

  // adding a note to the array of notes
  const addNote = (note) => {
    setNotes((prevStoredValuesInNotes)=>{
      // taking first the previous stored array and spreding it
      // then adding the new note at the end of the array
      return [...prevStoredValuesInNotes, note];
    });
  };

  // the index is passed from the note
  // deleting a note with the given index
  const deleteNote = (indexId) => { 
    // first we tap into the current array
    setNotes( (prevStoredValuesInNotes) => {
      // next we filter the current array -
      // we return all the values back except for the one
      // with the passed index
      return prevStoredValuesInNotes.filter((element, index) => {
        // if this statement is true, than the value will be passed 
        // back to the array
        return index !== indexId;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateNote onAddNote={addNote} />
      {notes.map((note, index)=> {
         return <Note 
              key={index}
              index={index}
              title={note.title} 
              content={note.content}
              onDeleteNote={deleteNote}
            /> 
      })}
      <Footer />
    </div>
  )
};


export default App;
