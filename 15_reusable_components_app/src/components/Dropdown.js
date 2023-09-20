import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from 'react-icons/go'
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    // this logic is neccesary to mkae sure if user click anywere outside the
    // componenet the component gets clossed too !

    // getting the reference to a DOM element that it creates
    // adding ref atribute in the componenet to get from the element the referece
    // that we have selected
    const divEl = useRef();

    // called only once - by the first render
    useEffect(()=>{
        const handler = (event) => {
            if (!divEl.current) {
                // if we cant find the refernce to the current element than we need to return
                return;
            }
            // reference directly to our element = divEl.current
            // so we arce checking if the element that we clicked in
            // is in our current element, this way we know if the click happened
            // outside our componenet, if so we clsoe the drop down
            if (!divEl.current.contains(event.target)){
                setIsOpen(false);
            }
        };
        // this will add an event listener for the whole time even if the component
        // is not rendered anymore
        // so we have to use a clean up method to stop watching for click
        // when this compoenent gets removed
        document.addEventListener('click', handler, true);

        // and here is the cleanup function
        return () => {
            document.removeEventListener('click', handler);
        };

    }, []);


    const handleClick = () => {
        setIsOpen(!isOpen);
        // this would cover addiotnally this one specila case
        // if this value gets updated super fast, like by javascipt in a row
        // so basivcaly instantly, then this is the code to make it work
        // setIsOpen((currentIsOpen) => {
        //     return !currentIsOpen;
        // });
    }

    const handlOptionClick = (option) => {
        // close dropdown
        setIsOpen(false);
        // update the selected option
        onChange(option);
    };

    const renderedOptions = options.map((option)=>{
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1" 
                key={option.value} 
                onClick={()=>handlOptionClick(option)}
            >
                {option.label}
            </div>
        );
    });

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel 
                className="flex justify-between items-center cursor-pointer" 
                onClick={handleClick}
            >
                {/* so if  value is undefined or of null the question mark
                will return undefined and therefor Select... will be returned
                otherwise the value.label will be returned, this is just
                a nicay way of doing it*/}
                {   
                    value?.label || 'Select...'
                }
                <GoChevronDown className="text-lg"/>
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>
            )}
        </div>
    );
};

export default Dropdown;