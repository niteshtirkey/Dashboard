
import Cards from "../Card/Cards";
import Graph from "../Graph/Graph";
import Table from "../table/Table";
import "./maindash.css";
function MainDash() {
  return (
    <div className="MainDash">
      <h1>Dashboard</h1>
      <Cards/>
      <Graph />
      <Table />
    </div>
  );
}

export default MainDash;
