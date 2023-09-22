// simple cutom hook so we dont have to type all of this
import { useContext } from "react";
import NavigationContext from "../context/navigation";

function useNavigation() {
    return useContext(NavigationContext);
};

export default useNavigation;