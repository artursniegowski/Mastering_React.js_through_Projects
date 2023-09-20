// EmojiItem component
function EmojiItem (props) {
    return (       
    <div className="term">
        <dt>
        <span className="emoji" role="img" aria-label={props.title}>
            {props.emoji}
        </span>
        <span>{props.title}</span>
        </dt>
        <dd>
        {props.descritpion}
        </dd>
    </div>
    );
}

export default EmojiItem;