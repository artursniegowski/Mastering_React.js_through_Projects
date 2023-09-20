import useNavigation from "../hooks/use-navigation";

function Route({path, children}) {
    const {currentPath} = useNavigation();

    // checking if the path that we are curently on to the path
    // that we have given in the props, if they match we will display the children
    if (path === currentPath){
        return children;
    }

    // I dont want to render anything and by returning null
    // this is how react knows we dont want to render anything
    return null;
};


export default Route;