import "./Table.css";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import img1 from "../../imgs/img1.png";
import img2 from "../../imgs/img2.png";
import img3 from "../../imgs/img3.png";

function createData(img, customer, order, amount, status,bg,color) {
  return { img, customer, order, amount, status,bg,color };
}

const rows = [
  createData(img1, "Wade Warren", 15478256, "$124.00", "Delivered","green","#fff"),
  createData(img2, "Jane Cooper", 48965787, "$365.03", "Delivered","green","#fff"),
  createData(img3, "Guy Hawkins", 78958215, "#45.88", "Cancelled","red","#fff"),
  createData(img1, "Kristin Watson", 20965732, "$65.00", "Pending","red","#fff"),
  createData(img2, "Cody Fisher", 95715629, "$545.00", "Delivered","green","#fff"),
  createData(img3, "Savannah Naguyen", 78514568, "$128.20", "Delivered","green","#fff"),
];
const makeStyles = (status)=>{
	if(status === "Delivered"){
		return{
			background: 'rgb(6 88 17)',
			color: '#06ff08',
		}
	}else if(status === "Pending"){
		return{
			background: 'rgb(118 22 22 / 85%)',
			color: 'red',
		}
	}else if(status ==="Cancelled"){
		return{
			background: 'rgb(118 22 22 / 85%)',
			color: 'red',
		}
	}}
	
export default function BasicTable() {
  return (
    <div className="Table">
      
      <TableContainer className="tableBg" component={Paper}>
      <span>Recent Orders</span>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell align="left">Order No.</TableCell>
              <TableCell align="left">Amount</TableCell>
              <TableCell align="left">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="tableImg" component="th" scope="row">
					<div><img src={row.img} /></div>
					<div><span>{row.customer}</span></div>
                </TableCell>
                <TableCell align="left">{row.order}</TableCell>
                <TableCell align="left">{row.amount}</TableCell>
                <TableCell align="left" ><span className="status" style={makeStyles(row.status)}>{row.status}</span></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
