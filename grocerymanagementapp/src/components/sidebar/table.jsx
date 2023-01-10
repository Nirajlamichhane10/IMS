import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70,  sortable: false,type: 'number' },
  { field: 'productName', headerName: 'Product Name', width: 130 },
  { field: 'stockIn', headerName: 'Stock In', width: 130, sortable: false,  type: 'number' },
  { field: 'stockOut', headerName: 'Stock Out', width: 130 , sortable: false , type: 'number'},
  { field: 'stockAvailable', headerName: 'Stock Available', width: 130, sortable: false,  type: 'number' },
 
  
];

const rows = [
  { id: 0, productName: 'Fruits', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 1, productName: 'Vegtable', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 2, productName: 'Rice', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 3, productName: 'Cold Drinks', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 4, productName: 'Fruits', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 5, productName: 'Vegtable', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 2, productName: 'Rice', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 6, productName: 'Cold Drinks', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 7, productName: 'Fruits', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 8, productName: 'Vegtable', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 9, productName: 'Rice', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 10, productName: 'Cold Drinks', stockIn:35, stockOut: 35, stockAvailable: 35},
  
];

export default function DataTable() {
  return (
    <div style={{height: 400, }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}