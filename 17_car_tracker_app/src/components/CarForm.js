import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";


function CarForm () {
    const dispatch = useDispatch();

    // this will need introduction of memoized: 
    // https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization 
    // const { name, cost } = useSelector((state) => {
    //     return {
    //       name: state.form.name,
    //       cost: state.form.cost,
    //     };
    //   });

    const name = useSelector((state)=>{
        return state.form.name
    });

    const cost = useSelector((state)=>{
        return state.form.cost
    });


    const handleNameChange = (event) => {
        dispatch(
            changeName(event.target.value)
        );
    };

    const handleCostChange = (event) => {
        // this would be an string but we want an integer
        // if we get NaN = nt a number it will retunr 0
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost));
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // preventing from submission
        // dispatch(addCar({name: name, cost: cost}));
        // same as , this is bc the keys and properties are the same
        dispatch(addCar({name, cost}));
        // the add car will also set the cost to 0
        // and the name to empty string
        // this is done with the extraReducer in formslice
    };

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">Name</label>
                        <input 
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label">Cost</label>
                        <input 
                            className="input is-expanded"
                            value={cost || ''}
                            onChange={handleCostChange}
                            type="number"
                        />
                    </div>
                    <div className="field">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default CarForm;