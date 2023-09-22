import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";

function CarList () {
    const dispatch = useDispatch();

    // const cars = useSelector((state)=>{ // or we can use some destructuring
    // const cars = useSelector(({ cars: {data, searchTerm} })=>{
    //     // adding filtering logic from search term
    //     return data.filter((car)=> 
    //         car.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    // });

    // const name = useSelector((state)=>{
    //     return state.form.name;
    // })

    // this will need refactor for memoziation
    // const cars = useSelector((state)=>{ // or we can use some destructuring
    const {cars, name} = useSelector(({ form, cars: {data, searchTerm} })=>{
        // adding filtering logic from search term
        const filteredCars = data.filter((car)=> 
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return {
            cars: filteredCars,
            name: form.name
        };
    });

    const handleCarDelete = (car) => {
        dispatch(removeCar(car.id));
    };

    const renderCars = cars.map((car)=> {
        // Decide if the car elmeent should be bold
        // state.form.name
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase());

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`} >
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button 
                    onClick={()=>{handleCarDelete(car)}}
                    className="button is-danger"
                >
                    Delete
                </button>
            </div>
        );
    });

    return (
        <div className="car-list">
            {renderCars}
            <hr />
        </div>
    );
};

export default CarList;