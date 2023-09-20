import { useState } from "react";

function useSort(data, config){
    const [sortBy, setSortBy] = useState(null);//not sorting by default
    const [sortOrder, setSortOrder] = useState(null);//sorting by default not set

    const setSortLabel = (label) => {
        // this will make sure that the state of previous sorted will be kind of stored
        // so when we choose to sort one coum asc and then switch columns the next column
        // will pick up from where we have left the colum from where we are coming
        // so the setsortorder will be switching in a circle and will look
        // if we switched columns and jsut continue where we left our column that we are coming from
        if (sortBy && label !== sortBy){
            setSortBy(label);
            setSortOrder('asc');
            return;
        }
        // chanign sort order evey time the user click on it
        // this is kind of like a circle
        if (sortOrder === null){
            setSortOrder('asc');
            // what column are we sorting by
            setSortBy(label);
        } else if (sortOrder === 'asc'){
            setSortOrder('desc');
            // what column are we sorting by
            setSortBy(label);
        } else{
            setSortOrder(null);
            setSortBy(null);
        };
    };

    // Make a copy of the 'data' prop
    let sortedData = data;
    // Only sort data if sortOrder && sortBy are not null
    if (sortOrder && sortBy){
        // we need to figure out what our sortValue is, and use it for sorting
        const { sortValue } = config.find(configElement => configElement.label === sortBy);
        sortedData = [...data].sort((a,b)=>{
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === 'asc' ? 1 : -1;
            
            if (typeof valueA === 'string'){
                return valueA.localeCompare(valueB)*reverseOrder;
            } else {
                return (valueA-valueB)*reverseOrder;
            };
            
        });
    };

    return {
        sortOrder,
        sortBy,
        sortedData,
        setSortLabel
    };
};

export default useSort;