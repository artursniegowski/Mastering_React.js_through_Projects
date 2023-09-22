import classNames from "classnames";

// times will define how many gray boxes do we want to see on the screen
function Skeleton({ times, className }) {
    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className // to allow us to set the hight and width of the box
    );
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    );
    // one possibility is to do it with for loop
    // this is another option
    // createing an array equles to the length of the times variable
    // and for every element inside we iterate and create a new elemenet
    const boxes = Array(times).fill(0).map((_, i) => {
        return (
            <div key={i} className={outerClassNames}>
                <div className={innerClassNames}/> 
            </div>
        );
    });
    
    return boxes;
};

export default Skeleton;