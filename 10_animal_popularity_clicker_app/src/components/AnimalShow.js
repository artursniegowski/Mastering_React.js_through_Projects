import './AnimalShow.css';
import { useState } from 'react';
import aligator from '../svg/aligator.svg';
import bird from '../svg/bird.svg';
import cat from '../svg/cat.svg';
import cow from '../svg/cow.svg';
import dog from '../svg/dog.svg';
import heart from '../svg/heart.svg';
import horse from '../svg/horse.svg';

const svgMap = {
    bird: bird, // bird, - this is the same
    aligator,
    cat,
    cow,
    dog,
    horse
};


function AnimalShow({ animalType }){
    const [clickCount, setClickCount] = useState(0);

    const handleClick = () => {
        setClickCount(clickCount+1);
    };

    return(
        <div className='animal-show' onClick={handleClick} >
            <img className='animal' src={svgMap[animalType]} alt="animal"/>
            <img 
                className='heart'
                src={heart} 
                alt='heart'
                style={{
                    width: 10 + 10*clickCount + 'px'
                }}
            />
        </div>
    );
};

export default AnimalShow;