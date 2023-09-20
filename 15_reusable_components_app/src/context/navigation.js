import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
    const [currentPath, setCurrentPath] = useState(
        window.location.pathname //my default path value
    );
    
    // called only once
    useEffect(() => {
        const handler = () => {
            // updating the pathname whenever the user changed it
            setCurrentPath(window.location.pathname);
        };
        // this will check if the url, or better say the pathname
        // has changed, so if the user navigated to a differetn pathname
        // this eventlistener will notice
        window.addEventListener('popstate', handler);
        
        // clenaing the event listener if the component gets deleted
        return () => {
            window.removeEventListener('popstate', handler);
        };

    }, []);

    const navigate = (to) => {
        // to === /dropdown
        // this way we can navigate the user to the pathname we want to
        // and then we ca use back and fort buttons and we will not see
        // a page refresh
        window.history.pushState({}, '', to)
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}} >
            {children}
        </NavigationContext.Provider>
    );
};

export { NavigationProvider };
export default NavigationContext;