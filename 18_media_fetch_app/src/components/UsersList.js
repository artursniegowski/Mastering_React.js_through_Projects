import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import { useThunk } from "../hook/useThunk";
import UsersListItem from "./UsersListItem";

function UsersList () {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const { data } = useSelector((state)=>{
        return state.users; // {data:[], isLoading:false, error:null}
    });

    // will run only once, be as second argument emty array
    // it will be called ONLY when first time rendered 
    // we added the [dispatch] which is not neccesary but will
    // remove the warnirng about the dependcy, bc it is a function
    // eslint thinks in the function there might be changes this is why
    // we are encourage to add it in the array, but in this case it wouldent be necessary
    useEffect(()=>{
        doFetchUsers();
    },[doFetchUsers]);

    const handleUserAdd = () =>{
        doCreateUser();
    }

    let content;
    if (isLoadingUsers){
        content = <Skeleton times={6} className="h-10 w-full"/>;   
    } else if (loadingUsersError){
        content = <div>Error fetching data...</div>;
    } else {
        content = data.map((user) => {
            return <UsersListItem key={user.id} user={user}/>;
        });
    };

    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}>
                    + Add User
                </Button>
                {creatingUserError && 'Error creating user...'}
            </div>
            {content}
        </div>
    );
};

export default UsersList;