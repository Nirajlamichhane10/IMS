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
  { id: 0, productName: 'Veg', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 1, productName: 'Veg', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 2, productName: 'Veg', stockIn:35, stockOut: 35, stockAvailable: 35},
  { id: 3, productName: 'Veg', stockIn:35, stockOut: 35, stockAvailable: 35},
  
];

export default function DataTable() {
  return (
    <div >
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