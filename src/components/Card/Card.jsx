import "./card.css";

function Card({ item }) {
  return (
    <div className="Card">
      <div className="icon" >
        <item.icon style={{background:item.color.backGround}} />
      </div>
      <p>{item.total}</p>
      <div className="val">
        <h2>{item.number}</h2>
        <p style={{ color:item.green.color}}>
          <item.val /> {item.persentage}
        </p>
      </div>
    </div>
  );
}

export default Card;
