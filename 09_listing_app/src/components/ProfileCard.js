// profile card component for displaying each component
function ProfileCard({title, handle, imageSrc, content}) {
    // instead of accesing props like props.title and props.handle
    // we can use the JavaScript deconstrucint to extract variables from object
    // or arrays
    // the names have to be the same as in the object, if we want to cahnge them 
    // we need to adjust n the deconstructing porcess
    // const {title, handle} = props;
    // we can make it even shorter
    //  function ProfileCard(props) = function ProfileCard({title, handle})
    // bulma element
    // https://bulma.io/documentation/components/card/

    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-1by1">
                    <img src={imageSrc} alt="logo for the assistant" />
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                    <p className="subtitle is-6">{handle}</p>
                </div>
                <div className="content">
                    {content}
                </div>
            </div>
        </div>
    );
};


export default ProfileCard;
