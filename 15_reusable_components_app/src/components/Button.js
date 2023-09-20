import classNames from 'classnames';
// import classnames from 'classnames';

function Button({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest // the rest of the properties from the object
 }) {

    // rest.className is added if users decide to add to our button extra classes!
    const classes = classNames(rest.className, 'flex items-center px-3 py-1.5 border', { // first string or before passing the object, will always be included
        'border-blue-700': primary, // this will be added only if priamry is true
        'border-gray-700': secondary,
        'border-green-700': success,
        'border-yellow-700': warning,
        'border-red-700': danger,
        'bg-blue-600': primary && !outline,
        'bg-gray-600': secondary && !outline,
        'bg-green-600': success && !outline,
        'bg-yellow-600': warning && !outline,
        'bg-red-600': danger && !outline,
        'rounded-full': rounded,
        'bg-white': outline,   
        'text-white': !outline,
        'text-blue-500': outline && primary,
        'text-gray-600': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-600': outline && danger,
    });

    return <button {...rest} className={classes}>{ children }</button>;
};


Button.propTypes = {
    checkVariationValue: ({primary, secondary, success, warning,danger}) => {
            // Number(true) = 1
            // Number(false) = 0
            // Number(!!undefine) = 0
            const count = 
                Number(!!primary) +
                Number(!!secondary) + 
                Number(!!success) +
                Number(!!warning) +
                Number(!!danger);

            if (count > 1){
                return new Error("Only one of primary, secondary, success, warning, danger can be true");
            }
    },
};


export default Button;