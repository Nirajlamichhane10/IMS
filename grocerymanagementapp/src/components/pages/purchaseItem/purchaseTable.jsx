
import * as React from 'react';
import MaterialTable , { MTableToolbar } from 'material-table';


import { ThemeProvider, createTheme } from '@mui/material';

import { forwardRef } from 'react';
import AddBox from '@mui/icons-material/AddBox';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Check from '@mui/icons-material/Check';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import Clear from '@mui/icons-material/Clear';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import Edit from '@mui/icons-material/Edit';
import FilterList from '@mui/icons-material/FilterList';
import FirstPage from '@mui/icons-material/FirstPage';
import LastPage from '@mui/icons-material/LastPage';
import Remove from '@mui/icons-material/Remove';
import SaveAlt from '@mui/icons-material/SaveAlt';
import Search from '@mui/icons-material/Search';
import ViewColumn from '@mui/icons-material/ViewColumn';
import { useEffect,useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';


const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


  const Styles={
    root:{
      display :"flex",
  
    },
    table:{
      alignItems: "center",
      textAlign: "center",
      width:"55%",
      height:"35%",
      margin:"-35px 10px 10px 250px",
    
    }

};

export default function PurchasedTable(props) {
  const { useState } = React;
  const [itemName, setItemName]= React.useState("");
  const [quantity, setQuantity]= React.useState(0);
  const [price, setPrice ]= React.useState(0);
  const [total, setTotal ]=React.useState(0);
  const[unitOfItem, setUnitOfItem] =React.useState("");

  const invoiceNumber= React.useState(props.invoiceNumber);
  const billDate= React.useState(props.billDate);
  const supplierName= React.useState(props.supplierName);

  const [testObject, setTestObject] = React.useState({
    
  });

  const handleChangeItemName =(event)=>{
    setItemName(event.target.value)
  };

  const handleChangeQuantity =(event)=>{
    setQuantity(event.target.value)
  };

  const handleChangePrice =(event)=>{
    setPrice(event.target.value)
  };

  const handleChangeUnitOfItem =(event)=>{
    setUnitOfItem(event.target.value)
  };

  const handleChangeTotal =(event)=>{
    setTotal(event.target.value)
  };
  


  const[message, setMessage]= React.useState("");
  const[status, setStatus]= React.useState("");
  const[open, setOpen]= React.useState(false);

  const reset =()=>{
    
    setItemName("");
    setQuantity("");
    setPrice("");
    setTotal("");
    setUnitOfItem("");
  
  }

   
  const defaultMaterialTheme = createTheme();
    

  
    const [columns, setColumns] = useState([
   
      { title: 'Item  Name', field: 'itemName', initialEditValue: 'initial edit value' },
      { title: 'Unit', field: 'unitOfItem', initialEditValue: 'initial edit value' },
      { title: 'Quantity', field: 'quantity', initialEditValue: 'initial edit value' },
      { title: 'Price', field: 'price', initialEditValue: 'initial edit value' },
      { title: 'Total', field: 'total', initialEditValue: 'initial edit value' },
     
      

      
    ]);
    
  
    const [data, setData] = useState([
      // { itemName:"Cold Drinks", unitOfItem:"ml", quantity:12, price:1200, total:1500 },
    
    ]);


// // saving data 
// const handleSave = async () => {
//   try {
//     const response = await axios.post("http://localhost:5000/purchaseItem/purchase",{itemName,quantity,price,total,unitOfItem});
//     console.log(response.data);
//     // do something with response if needed
//   } catch (error) {
//     console.error(error);
//     // handle error if needed
//   }
// };
const handleSave = async () => {
  const items = [{ itemName, quantity, price, total, unitOfItem }];
  
      
  try{
    const response = await axios.post("http://localhost:5000/purchaseItem/postPurchase",{invoiceNumber,billDate,supplierName,items});
    console.log(response);
    setMessage("Items purchased successfully");
    setStatus("success");
    setOpen(true);
    reset();
  }
  catch(e){
    console.log(e);
    setMessage("Error Occurred ! Supplier can't be added ");
    setStatus("error");
    setOpen(true);
  }

};

   return (
      <div> 
        <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable style={Styles.table}
        title="Added Items"
        
        icons={tableIcons}
        columns={columns}
        
        data={data}

        options={{
          search:false,
          paging:false,
        }}

        components={{
          Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              <div style={{padding: '0px 10px'}}>
                <hr/>
              </div>
            </div>
          ),
        }}

        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
               
                handleSave(); // save data to backend
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                setTestObject(newData);
                console.log(newData);
                handleSave();// save data to backend
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}
        
      />
          
      </ThemeProvider>
     
      </div>
    )

  }
  