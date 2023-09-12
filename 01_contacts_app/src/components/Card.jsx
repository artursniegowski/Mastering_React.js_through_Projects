// Card component
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img_src = {props.img_src}/>
      </div>
      <div className="bottom">
        <Detail detail={props.phone} />
        <Detail detail={props.email} />
      </div>
    </div>
  );
}

export default Card;
