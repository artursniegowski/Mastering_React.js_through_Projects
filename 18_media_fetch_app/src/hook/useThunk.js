import { useState, useCallback } from "react";
import { useDispatch } from "react-redux";

// custom hook for using our created thunks
function useThunk(thunk){
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null); 
    const dispatch = useDispatch();  

    // we useCallbac to make sure we have a reference to a function
    // and wehnw e run in the useEffect it wont end up in a infinite loop,
    // bc the useCallbankc will give us a rferece to the same function
    const runThunk = useCallback((arg) =>{
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap() // now we can use from the pormis a then,catch statemtn depending on the success of the request
            // we dont need the then chaining so we move to catch
            .catch(err => setError(err))
            .finally(()=>setIsLoading(false)); // called always at the end, no matter if the request was success of fail
    }, [dispatch, thunk]);

    return [runThunk, isLoading, error];
}

export { useThunk };

    // // will run only once, be as second argument emty array
    // // it will be called ONLY when first time rendered 
    // // we added the [dispatch] which is not neccesary but will
    // // remove the warnirng about the dependcy, bc it is a function
    // // eslint thinks in the function there might be changes this is why
    // // we are encourage to add it in the array, but in this case it wouldent be necessary
    // useEffect(()=>{
    //     setIsLoadingUsers(true); // start the spinner
    //     dispatch(fetchUsers())
    //         .unwrap() // this will give us a new promis that follows the convetional rules of a promis, so then and catch will work properly
    //         // .then(()=>{ // now this will be called for request fulfilled
    //         // })      // bc it is not used so we dont need it anymore
    //         .catch((err)=>{ // this will be called when an error occurs
    //             setLoadingUsersError(err);
    //         })
    //         .finally(()=>{ // this will be called always, so whether the request was success or not!
    //             setIsLoadingUsers(false);
    //         }); 
    //     // setIsLoadingUsers(false); // dont do that, it wont work, dispatch is asynchronous !!
    // },[dispatch]);


    // const handleUserAdd = () =>{
    //     setIsCreatingUser(true); // for the load spinner

    //     dispatch(addUser()) // runnign the thung funciton to add a user
    //         .unwrap() // now we can use from the pormis a then,catch statemtn depending on the success of the request
    //         // we dont need the then chaining so we move to catch
    //         .catch(err=> setCreatingUserError(err))
    //         .finally(()=>setIsCreatingUser(false)); // called always at the end

    // }
