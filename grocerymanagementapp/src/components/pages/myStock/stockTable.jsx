import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'itemname', headerName: 'Item Name', width: 130 },
  { field: 'unit', headerName: 'Unit', width: 130 },
  { field: 'quantity', headerName: 'Quantity', width: 130 },
 
 

];

const rows = [
   { id: 0, itemname: 'coke', unit: 'litre', quantity: 100 },
   { id: 1, itemname: 'Rice', unit: 'kg', quantity: 200 },
   { id: 2, itemname: 'Vegetable', unit: 'kg', quantity: 400 },
   { id: 3, itemname: 'fruits', unit: 'kg', quantity: 500 },
   { id: 4, itemname: 'eggs', unit: 'carate', quantity: 600 },
      
];

export default function StockTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
       
      />
    </div>
  );
}