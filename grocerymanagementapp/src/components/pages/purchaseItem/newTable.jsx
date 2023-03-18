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

const Styles={
    root:{
      display :"flex",
  
    },
    table:{
      alignItems: "center",
      textAlign: "center",
      width:"55%",
      margin:"80px 10px 10px 100px",
     
    
    }
}

function createData(  InvoiceNo,BillDate,SupplierName) {
  return {
  InvoiceNo,
  BillDate,
  SupplierName,
    history: [
      {
        itemname: 'Coke',
        unit:"ml",
        quantity: 11,
        price: 400,
        total:500,
      },
      {
         itemname: 'sprite',
         unit:"ml",
        quantity: 11,
        price: 400,
        total:600,
      },
    ],
  };
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
        <TableCell >{row.InvoiceNo}</TableCell>
        <TableCell align="right" >{row.BillDate}</TableCell>
        <TableCell  align="right"  >{row.SupplierName}</TableCell>
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
                    <TableRow key={historyRow.itemname}>
                      <TableCell component="th" scope="row">
                        {historyRow.itemname}
                      </TableCell>
                      <TableCell>{historyRow.unit}</TableCell>
                      <TableCell align="right">{historyRow.quantity}</TableCell>
                      <TableCell align="right">{historyRow.price}</TableCell>
                      <TableCell align="right">{historyRow.total}</TableCell>
                    </TableRow>
                  ))}
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

const rows = [
  
  createData(1234, "2023/22/23", "Niraj Lamichhane"),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper} style={Styles.table}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Invoice Number</TableCell>
            <TableCell align="right">Bill Date</TableCell>
            <TableCell align="right">Supplier Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.InvoiceNo} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}