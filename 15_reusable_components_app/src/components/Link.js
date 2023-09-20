import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";

function Link ({ to, children, className, activeClassName }) {
    // getting the navigate function and current path from the context
    const {navigate, currentPath} = useNavigation();

    // adding classes to for styling
    const classes = classNames(
        'text-blue-500', 
        className,
        currentPath === to && activeClassName // addning activ class name only if the currentPath === to
        );

    const handleClick = (event) =>{
        // if we press the ctrl on Windows or meta key on OS
        // we dont want to prevent the default behavior,
        // just return, this way the browser takes over
        // and we if clikc ctr + the link it will open new tab with the link
        if (event.metaKey || event.ctrlKey){
            return;
        }
        // this way the page wont be refreshed
        // after being redirected, bc we will just rendere 
        // or better say show a new component
        event.preventDefault();
        navigate(to);
    };

    return (
            <a 
                className={classes}
                href={to} 
                onClick={handleClick}
            >
                {children}
            </a>
            );
};

export default Link;