import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from './Skeleton';
import ExpandablePanel from './ExpandablePanel';
import Button from './Button';
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
    // const results = useFetchAlbumsQuery(user);
    // console.log(results);
    const {data, error, isFetching} = useFetchAlbumsQuery(user);
    // this comes from the albumsApi - Redux toolkit query
    // used for makign post request
    const [addAlbum, results] = useAddAlbumMutation();
    // console.log(results);

    const handleAddAlbum = () =>{
        // we passing the user that we want our album to connect to
        addAlbum(user);
    };

    let content;
    if (isFetching){
        content = <Skeleton times={3} className="h-10 w-full"/>;
    } else if (error){
        content = <div>Error loading albums.</div>;
    } else{
        content = data.map((album)=>{
            return <AlbumsListItem key={album.id} album={album}/>
        }); 
    }
    
    return (
        <div>
            <div className="m-2 flex flex-row items-center justify-between">
                <h3 className="text-lg font-bold">
                    Albums For {user.name}
                </h3> 
                <Button onClick={handleAddAlbum} loading={results.isLoading}>
                    + Add Album
                </Button>
            </div>
            <div>
                {content}
            </div>
        </div>
    );
};

export default AlbumsList;