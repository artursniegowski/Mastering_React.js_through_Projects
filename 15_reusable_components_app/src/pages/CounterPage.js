// simple example of using a custom hook
// with useReducer hook
import Button from '../components/Button';
import { useReducer } from 'react';
import Panel from '../components/Panel';
//IMMER LIBRARY: this is how we use immer
import { produce } from 'immer';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
    //IMMER LIBRARY: with immer
    switch (action.type) {
        case INCREMENT_COUNT:
            state.count= state.count + 1;
            return;
        case DECREMENT_COUNT:
            state.count= state.count - 1;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            return;
        case ADD_VALUE_TO_COUNT:
            state.count= state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
        default:
            return;


    //IMMER LIBRARY: without immer
    // switch (action.type) {
    //     case INCREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count + 1 
    //         };
    //     case DECREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count - 1 
    //         };
    //     case SET_VALUE_TO_ADD:
    //         return {
    //             ...state,
    //             valueToAdd: action.payload
    //         };
    //     case ADD_VALUE_TO_COUNT:
    //         return {
    //             ...state,
    //             count: state.count + state.valueToAdd,
    //             valueToAdd: 0
    //         };
    //     default:
    //         // option 1
    //         // throw new Error('unexpected action type: ' + action.type);
    //         // option 2 
    //         return state;
    }

    // if (action.type === INCREMENT_COUNT){
    //     return {
    //         ...state,
    //         count: state.count + 1 
    //     };
    // }; 
    
    // if (action.type === DECREMENT_COUNT){
    //     return {
    //         ...state,
    //         count: state.count - 1 
    //     };
    // };
    
    // if (action.type === SET_VALUE_TO_ADD){
    //     return {
    //         ...state,
    //         valueToAdd: action.payload
    //     };
    // };

    // so if we dont fal in any other condition i want to make sure
    // we dont cause the sate to be undefine so at least we return
    // pevious value, or current value
    // return state;
};

function CounterPage ({initialCount}) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    
    //IMMER LIBRARY: without immer
    // const [state, disaptch] = useReducer(reducer, {
    //     count: initialCount,
    //     valueToAdd: 0
    // });

    //IMMER LIBRARY: with immer
    const [state, disaptch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        // setCount(count+1);
        disaptch({
            type: INCREMENT_COUNT
        });
    };
    const decrement = () => {
        // setCount(count-1);
        disaptch({
            type: DECREMENT_COUNT
        });
    };

    const handleChange = (event) => {
        // so if we odnt get a numbe we asign a 0 to it
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
        disaptch({
            type: SET_VALUE_TO_ADD,
            payload: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // setCount(count+valueToAdd);
        // setValueToAdd(0);
        disaptch({
            type: ADD_VALUE_TO_COUNT,
        });
    };

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count is {state.count}</h1>
            <div className='flex flex-row'>
                <Button secondary onClick={increment}>Increment</Button>
                <Button secondary onClick={decrement}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input
                    value={state.valueToAdd || ""}
                    onChange={handleChange} 
                    type="number" 
                    className='p-1 m-3 bg-gray-50 border border-gray-300'/>
                <Button success>Add it!</Button>
            </form>
        </Panel>
    );
};

export default CounterPage;


// with useState hook
// import Button from '../components/Button';
// import { useState } from 'react';
// import Panel from '../components/Panel';

// function CounterPage ({initialCount}) {
//     const [count, setCount] = useState(initialCount);
//     const [valueToAdd, setValueToAdd] = useState(0);

//     const increment = () => {
//         setCount(count+1);
//     };
//     const decrement = () => {
//         setCount(count-1);
//     };

//     const handleChange = (event) => {
//         // so if we odnt get a numbe we asign a 0 to it
//         const value = parseInt(event.target.value) || 0;
//         setValueToAdd(value);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();

//         setCount(count+valueToAdd);
//         setValueToAdd(0);
//     };

//     return (
//         <Panel className='m-3'>
//             <h1 className='text-lg'>Count is {count}</h1>
//             <div className='flex flex-row'>
//                 <Button secondary onClick={increment}>Increment</Button>
//                 <Button secondary onClick={decrement}>Decrement</Button>
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <label>Add a lot</label>
//                 <input
//                     value={valueToAdd || ""}
//                     onChange={handleChange} 
//                     type="number" 
//                     className='p-1 m-3 bg-gray-50 border border-gray-300'/>
//                 <Button success>Add it!</Button>
//             </form>
//         </Panel>
//     );
// };

// export default CounterPage;