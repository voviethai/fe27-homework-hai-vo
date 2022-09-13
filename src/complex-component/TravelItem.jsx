import "./TravelItem.scss";
function TravelItem(props) {
  return (
    <div className="travel-item">
      <div className="id">{props.id}</div>
      <div className="img">image</div>
      <div className="content">
        <div className="title">{props.title}</div>
        <div className="developer">
          by <span className="developer-name">{props.developer}</span>
        </div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}

export default TravelItem;
