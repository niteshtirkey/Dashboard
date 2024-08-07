import * as React from "react";
import "./Graph.css";
import Box from "@mui/material/Box";
import { BarChart } from "@mui/x-charts/BarChart";

function Graph() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(30);
  const [skipAnimation, setSkipAnimation] = React.useState(false);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setItemNb(newValue);
  };
  const handleSeriesNbChange = (event, newValue) => {
    if (typeof newValue !== "number") {
      return;
    }
    setSeriesNb(newValue);
  };

  return (
    <div className="graph">
      {/* Graph */}
      <Box  className="bar-chart-container" >
        <BarChart className="bar"
          height={210}
          series={series
            .slice(0, seriesNb)
            .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
          skipAnimation={skipAnimation}
        />
        {series.slice(0, seriesNb).map((s, seriesIndex) => (
          <div
            key={seriesIndex}
            style={{
              position: "absolute",
              top: `${(seriesIndex / seriesNb) * 100}%`,
              left: 0,
              transform: "translateX(50%)",
              whiteSpace: "nowrap",
              color: "white",
              padding: "5px",
              fontSize: "14px",
			  fontWeight:"bold"
            }}
          >
            {s.val}
          </div>
        ))}
      </Box>
    </div>
  );
}

const highlightScope = {
  highlighted: "series",
  faded: "global",
};

const series = [
  {
    label: "Week",
	val: "Activity",
    data: [
      2423, 2210, 764, 1879, 1478, 1373, 1891, 2171, 620, 1269, 724, 1707, 1188,
      1879, 626, 1635, 2177, 516, 1793, 1598,2177, 516, 1793, 1598,620, 1269, 724, 1707,1188,
    ],
  },
  	
].map((s) => ({ ...s, highlightScope }));

export default Graph;
