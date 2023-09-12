import './App.css';
import { useState } from "react";
import AnimalShow from "./components/AnimalShow";
import Header from './components/Header';

const getRandomAnimal= () => {
    // returns a random animal from the pool - as a string
    // pool of random animals to pick from
    const animals = ['bird', 'cat', 'cow', 'dog', 'aligator', 'horse'];
    return animals[Math.floor(Math.random()*animals.length)];
};


function App() {
    // useState is the hook needed to change variable
    // and later be able to render the changed variable
    // it is the only way we can change what react shows on the screen
    const [animalPool, setAnimalPool] = useState([]);
    
    // event handler or callback function
    const handleClick = () => {
        // taking first the previous stored array and spreding it
        // then adding the new animal at the end of the array
        // setAnimalPool((prevStoredData)=>[...prevStoredData,getRandomAnimal()]);
        // or
        setAnimalPool([...animalPool, getRandomAnimal()]);
    };

    // looping through all the animal in the list an createg a
    // new element for each of them
    // this map you can add directly in the div in the return statemt
    // it dosent have to be asigned to a function
    const renderedAnimals = animalPool.map((animal, index)=>{
        return <AnimalShow animalType={animal} key={index} />;
    });

    return (
        <div>
            <Header title={"Animal popularity clicker"}/>
            <div className='animal-app'>
                <button onClick={handleClick}>Add animal </button>
                {/* this is the same */}
                {/* <button onClick={ () => console.log('click')}>Add animal </button> */}
                <div className='animal-list'>{renderedAnimals}</div>
            </div>
        </div>
    );
};

export default App;