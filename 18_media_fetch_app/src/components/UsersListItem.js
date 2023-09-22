import { TiDelete } from "react-icons/ti";
import Button from './Button';
import { removeUser } from '../store';
import { useThunk } from '../hook/useThunk';
import ExpandablePanel from "./ExpandablePanel";
import { Fragment } from "react";
import AlbumsList from "./AlbumsList";

function UsersListItem({ user }){
    // isloading will show in the button the loading spinner
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handlClick = () =>{
        doRemoveUser(user);
    };

    const header = (
        <Fragment>
            <Button className="mr-3" loading={isLoading} onClick={handlClick}> 
                <TiDelete />
            </Button>
            { error && <div>Error deleting user.</div> }
            {user.name}
        </Fragment>
    );

    return (
            <ExpandablePanel header={header}>
                    <AlbumsList user={user}/>
            </ExpandablePanel>
    );
};

export default UsersListItem;