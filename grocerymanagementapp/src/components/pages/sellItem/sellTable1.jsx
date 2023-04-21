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
import { log } from 'joi-browser';
import { v4 as uuid } from 'uuid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SellTable from './sellTable';

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
    
    },
    buttonprint:{
      margin:"30px 20px 50px 790px",
      width:"220px",
    
     },
     button:{
      margin:"20px 0px 50px 1050px",
      width:"220px",
     },
     collabtable: {
      margin:"0px 10px 10px 250px",
      width:"80%",
      alignItems: "center",
      textAlign: "center",
    
     },

};

export default function SellTable1(props) {
  const { useState } = React;
  const [itemList,setItemList]=React.useState([]);
  const [invoice,setInvoice]=React.useState({
    invoiceNumber:"",
    billDate:"null",
    customerName:"",
    items:[],
  });

  const defaultMaterialTheme = createTheme();
  const [columns, setColumns] = useState([
 
    { title: 'Item  Name', field: 'itemName' , lookup:{0: 'Select Item', 1: ' Flour', 2: 'Salt', 3: 'Nuts (Almonds, Walnuts, Pecans, etc.)', 4: 'Dried Fruit (Raisins, Cranberries, Apricots, etc.)', 5: 'Cooking Oil (Vegetable, Canola, Olive, etc.)', 6: 'Eggs', 7: 'Chicken', 8: 'Fresh Herbs (Basil, Cilantro, Parsley, etc.)', 9: 'Spices (Cinnamon, Garlic Powder, Chili Powder, etc.)', 10: 'Red Bull'}},
    { title: 'Unit', field: 'unitOfItem', },
    { title: 'Quantity', field: 'quantity', initialEditValue: 0 },
    { title: 'Price', field: 'price', initialEditValue: 0 },
    { title: 'Total', field: 'total', initialEditValue: 0,editable: false },
   
    

    
  ]);
  const [items, setItems] = React.useState([{}]);

  const {invoiceNumber, billDate, customerName, setInvoiceNumber,setCustomerName,setBillDate,setSelectedCustomer}= props;
  



  const[message, setMessage]= React.useState("");
  const[status, setStatus]= React.useState("");
  const[open, setOpen]= React.useState(false);
  const[testArray, setTestArray]= React.useState(["Rice","coke","fancy"]);


  useEffect(() => {
    fetchItemName();
   
  }, []);
  // TEST

  const test=()=>{
    console.log("lookup Object");
    console.log(itemList);
  }

 // reset 
  const reset =()=>{
    
    setInvoiceNumber("");
    setCustomerName("");
    setSelectedCustomer("Select customer");
    setBillDate(null);
    setItems([{}]);
    setData([]);

    const unique_id = uuid();
  				const small_id = unique_id.slice(0,8);
				
				console.log(small_id);
        setInvoiceNumber(small_id);

  }
  
  const fetchItemName= async() => {
  try{
      const res = await axios.get(' http://localhost:5000/addItem/getItem');
      // setItemNameArray(res.data); 
      let obj = { 0: "Select Item" };
      let count=1;

// Loop through the array and append key-value pairs to the object
    res.data.map((item) => {
    obj[count] = item.itemName;
      count++;
    });
          setItemList(obj);
  }
  catch(e){
    console.log(e);
  }
 }
   
  
 
    
  
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
const handleOnclick = async () => {    

  items.shift();
  // console.log("ITEMS");
  // console.log(items);
  // console.log("Customer Name");
  // console.log(customerName);

  try{
    const response = await axios.post("http://localhost:5000/sellItem/sell",{invoiceNumber,billDate,customerName,items});
    console.log(response.data);
    setInvoice(response.data);
    setMessage("Items purchased successfully");
    setStatus("success");
    setOpen(true);
    reset();
  }
  catch(e){
    console.log(e);
    setMessage("Error Occurred ! customer can't be added ");
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
// for adding total
        options={{
          search:false,
          paging:false,
          // showTotal: true,
          // totalRow: { name: 'Grand Total', total: ()=>{
          //   let total = 0;
          //   data.forEach(item => {
          //     total+= item.quantity * item.price;
          //   });
          //   return total;} },
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
                const total = newData.price * newData.quantity;
                newData.total=total;
                setData([...data, newData]);
                const tempItem={"itemName":itemList[newData.itemName],"unitOfItem":newData.unitOfItem,"quantity":newData.quantity,"price":newData.price,"total":total};
                setItems([...items, {...tempItem} ]);
               console.log("Total Data");
                console.log(newData);
                console.log(newData.price);
               
               
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
      <div style={Styles.button}>
        <Button onClick={handleOnclick} variant="contained" size="large">
          SAVE ITEM 
        </Button>
      </div>
      {/* <Button onClick={test} >
      Test
        </Button> */}
        
        <div style={Styles.collabtable}>
      <SellTable invoice={invoice}/>
      </div>
      </div>
    )

  }
  