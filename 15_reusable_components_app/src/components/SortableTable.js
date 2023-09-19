import Table from "./Table";
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';
import useSort from "../hooks/use-sort";

function SortableTable(props){
    // In react we should never modify props for any reasons!!
    const { config, data } = props;
    // using a custom hook 
    const { sortOrder, sortBy, sortedData, setSortLabel} = useSort(data, config);

    // this way we can atach an event handler to the elemnts that have sortValue
    const updatedConfig = config.map((configElement) =>{
        if (!configElement.sortValue){
           return configElement; // if the element dosent have a sortValue just return it, not important for us
        };

        // keep the exisitng porperties and add the header property to it.
        return {
            ...configElement,
            header: () => (
                <th className="cursor-pointer hover:bg-gray-100" onClick={()=>setSortLabel(configElement.label)}>
                    <div className="flex imtes-center">
                        {getIcons(configElement.label, sortBy, sortOrder)}
                        {configElement.label}
                    </div>
                </th>
            ),
        };
    });

    return (
        // passing all the props, beacuse the config prop is passed later it will overide
        // the props.config from the call before
        <Table {...props} config={updatedConfig} data={sortedData}/> 
    );
};

// getting icons
const getIcons = (label, sortyBy, sortOrder) =>{
    if (label !== sortyBy) {
        return <div>
            <GoTriangleUp />
            <GoTriangleDown />
        </div>;
    }; 
    
    if (sortOrder === null){
        return <div>
            <GoTriangleUp />
            <GoTriangleDown />
        </div>;
    } else if (sortOrder === 'asc') {
        return <div>
            <GoTriangleUp />
        </div>;
    } else if (sortOrder === 'desc'){
        return <div>
            <GoTriangleDown />
        </div>;
    };
};

export default SortableTable;