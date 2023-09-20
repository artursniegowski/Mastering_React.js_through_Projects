// simple example of creating a custom hook
import { useEffect, useState } from "react";

function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    },[count]);

    const increment = () => {
        setCount(count+1);
    };

    return {
        count, // same as count:count
        increment, // same as increment: increment
    };
};

export default useCounter;

//
// exmple hwo to use the hook
//
//
// import Button from '../components/Button';
// import useCounter from "../hooks/use-counter";

// function CounterPage ({initialCount}) {
//     const {count, increment} = useCounter(initialCount);

//     return (
//         <div>
//             <h1>Count is {count}</h1>
//             <Button secondary onClick={increment}>Increment</Button>
//         </div>
//     );
// };