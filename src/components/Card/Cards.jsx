import { CardsData } from "../../data/Data";
import Card from "./Card";
import "./cards.css";

function Cards() {
  return (
	<div className="Cards">
    {CardsData.map((item)=>{
      console.log(item);
      return(
        <div className="parentContainer" key={item.id}>
          <Card item={item}/>
        </div>
      )
    })}
  </div>
  )
}

export default Cards