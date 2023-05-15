import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import axios from 'axios';
import  {useEffect,useState } from 'react';
import Button from '@mui/material/Button';

const Styles={
    root:{
      display :"flex",
  
    },
    downtable:{
      alignItems: "center",
      textAlign: "center",
      width:"380%",
      margin:"50px 10px 10px -52em",
    
    },
    buttonprint:{
      margin:"30px 20px 50px -25px",
      width:"220px",
    
     },
 

  
}




function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  
  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {/* <TableCell component="th" scope="row">
          {row.name}
        </TableCell> */}
        <TableCell >{row.invoiceNumber}</TableCell>
        <TableCell align="right" >{row.billDate}</TableCell>
        <TableCell  align="right"  >{row.supplierName}</TableCell>
        <TableCell  align="right"  >{row.payment}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Added Items
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>ItemName</TableCell>
                    <TableCell>Unit</TableCell>
                    <TableCell align="right">Qantity</TableCell>
                    <TableCell align="right">price</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.itemName}>
                      <TableCell component="th" scope="row">
                        {historyRow.itemName}
                      </TableCell>
                      <TableCell>{historyRow.unitOfItem}</TableCell>
                      <TableCell align="right">{historyRow.quantity}</TableCell>
                      <TableCell align="right">{historyRow.price}</TableCell>
                      <TableCell align="right">{historyRow.total}</TableCell> 
                    </TableRow>
                  ))}
              
                 
                <TableCell align="right" > Grand Total</TableCell>
                  <TableCell align="right" >{row.grandTotal}</TableCell>
                
                  
                 
                </TableBody>
            
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };



export default function CollapsibleTable(props) {

  
  const rows = [
  
    createData(props.invoice.invoiceNumber, props.invoice.billDate,props.invoice.supplierName, props.invoice.payment,props.grandTotal),
  ];
  function createData( invoiceNumber,billDate,supplierName,payment,grandTotal) {
    return {
    invoiceNumber,
    billDate,
    supplierName,
    payment,
    grandTotal,
    history:props.invoice.items,
    };
  }


//   const [invoice, setInvoice]= React.useState([]);
//   const {invoiceNumber} =props;

  // const Test =()=>{
  //   console.log("Rows");
  //   console.log(props.invoice.invoiceNumber);
  //   //console.log(invoice);
  //   console.log(rows);

  // }



// // useEfect for total 
//   useEffect(() => {
//   calculateGrandTotal();

    
//   }, [props.invoice.items]);

  

//   const fetchInvoice = async () => {
//     try{
//     const res = await axios.post('http://localhost:5000/purchaseItem/getInvoice',{invoiceNumber});
//     setInvoice(res.data);
//     console.log("invoice data");
//     console.log(invoiceNumber);
//     console.log(res.data);
//   } 
//   catch(e){
//     console.log(e);
   
//   }
// };
  



  return (
    <React.Fragment>
       <style>{`@media print {.no-show{display: none;}}`}</style>
    <TableContainer component={Paper} style={Styles.downtable}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Invoice Number</TableCell>
            <TableCell align="right">Bill Date</TableCell>
            <TableCell align="right">Supplier Name</TableCell>
            <TableCell align="right">Payment</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.invoiceNumber} row={row} />
          ))}
        </TableBody>
      </Table>

    </TableContainer>
    <div style={Styles.buttonprint}>
      <div className='no-show'>
        
        <Button onClick={() => {
                                        window.print();
                                    }}
        variant="contained" size="large">
          RECEIPT
        </Button>
        </div>
      </div>
    {/* <Button onClick={Test}>
      Test
    </Button> */}
    </React.Fragment>
 
  );
}