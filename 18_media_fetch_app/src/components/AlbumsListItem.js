import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import { TiDelete } from "react-icons/ti";
import { useRemoveAlbumMutation } from '../store';
import { Fragment } from "react";
import PhotosList from "./PhotosList";

function AlbumsListItem({ album }){
    const [removeAlbum, results] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };

    const header = (
        <>
            <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
                <TiDelete />
            </Button>
            {album.title}
        </>
    );

    return (
        <div>
            <ExpandablePanel header={header}>
                <PhotosList album={album} />
            </ExpandablePanel>
        </div>
    );
};

export default AlbumsListItem;