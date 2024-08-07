import "./sidebar.css";
import { AiOutlineLogout } from "react-icons/ai";
import { SidebarData } from "../../data/Data";
import { useState } from "react";
function Sidebar() {
  const [selectd, setSelected] = useState(0);
  return (
    <div className="Sidebar">
      

      {/* menu  */}
      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div key={item.id}  className={selectd === index ? "menuItem active" : "menuItem dactive"} onClick={()=>setSelected(index)}>
              <item.icon className="iconSide" />
            </div>
          );
        })}
        <div className="menuItem">
        <AiOutlineLogout className="iconSide"/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
