import { useSelector } from "react-redux/es/hooks/useSelector";

function CarValue () {

    // const totalCost = useSelector((state)=>{ // or using deconstructing
    const totalCost = useSelector(({cars: {data, searchTerm}})=>{
        const filteredCars = data.filter((car)=>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        // let cost = 0;
        // for (let car of filteredCars){
        //     cost += car.cost;
        // }
        // return cost;

        return filteredCars.reduce((acc, car)=>acc+car.cost, 0);
    });


    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    );
};

export default CarValue;