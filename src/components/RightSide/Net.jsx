import { NetData } from "../../data/Data";
import "./Net.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Net() {
  return (
	<div className="Net">
    {NetData.map((card,id)=>{
      return(
        <div className="NetContainer" key={id}>
          <div className="details">
            <p style={{fontSize:"14px"}}>{card.title}</p>
            <strong style={{fontSize:"30px"}}>
              $ {card.value} 
            </strong>
            <p style={{color:"rgb(6, 255, 8)"}}><card.val/> {card.valNum}</p>
          </div>
          <div className="radialBar">
            <CircularProgressbar value={card.barValue} text={`${card.barValue} % `}/>
            <p>{card.values}</p>
          </div>
        </div>
      )
    })}
  </div>
  )
}

export default Net