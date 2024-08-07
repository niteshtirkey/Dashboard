// import * as React from "react";
import "./Options.css";
import { BiTargetLock } from "react-icons/bi";
import { MdNavigateNext } from "react-icons/md";
import { GiHamburger } from "react-icons/gi";
import { IoFastFoodOutline } from "react-icons/io5";
function Options() {
  function createData(target, val, next) {
    return { target, val, next};
  }
  
  const rows = [
    createData(BiTargetLock, "Goal", MdNavigateNext),
    createData(GiHamburger,"Popular Dishes" ,MdNavigateNext),
    createData(IoFastFoodOutline,"Menus" ,MdNavigateNext)
  ];
  const makeStyles = (val)=>{
    if(val === "Goal"){
      return{
        background: 'rgb(95,50,55)',
        color: 'red',
      }
    }else if(val === "Popular Dishes"){
      return{
        background: '#4754aa',
        color: '#b0b0e9',
      }
    }else if(val ==="Menus"){
      return{
        background: '#00d3ff70',
        color: '#5ce4dfe8',
      }
    }}

  return (
    <div className="Options">
      {
        rows.map((item,index)=>(
          <div className="action" key={index}>
        <div className="gols">
          <div style={makeStyles(item.val)} className="target">
            <item.target />
          </div>
          <strong>{item.val}</strong>
        </div>
        <div className="next">
          <item.next />
        </div>
      </div>
        ))
      }
      
      
    </div>
  );
}

export default Options;
