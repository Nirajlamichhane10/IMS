import * as React from 'react';
import MaterialTable from 'material-table';

import { ThemeProvider, createTheme } from '@mui/material';



import { forwardRef } from 'react';
import axios from 'axios';
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
import { TextField, Chip } from '@material-ui/core';

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
      width:"130%",
      margin:"30px 10px 10px -15em",
    
    },
    edit:{
     color:"green"

    }

};

export default function DashboardTable() {
    const { useState,useEffect } = React;
    const defaultMaterialTheme = createTheme();

  
    const [columns, setColumns] = useState([
   
      { title: 'Item Name', field: 'itemName', },
      { title: 'Unit Of Item', field: 'unitOfItem', },
      { title: 'In Stock', field: 'quantity',

				render: rowData => {
          if (rowData.quantity > rowData.minimum) {
            return (
              <Chip label={rowData.quantity} color="primary" style={{ marginRight: 5 }} />
            );
          } else if (rowData.quantity > 0) {
            return (
              <Chip label={rowData.quantity} color="secondary" style={{ marginRight: 5 }} />
            );
          } else {
            return (
              <Chip label="Out of stock" color="default" style={{ marginRight: 5 }} />
            );
          }
        }
      },

      { title: 'Minimum', field: 'minimum',  },
      { title: 'Price', field: 'price',  },
      
    ]);
  
    const [data, setData] = useState([
      
    ]);
    
    useEffect(() => {
      fetchData();
      
    },[]);

 
    const fetchData = async()=>{
      const AddItemData= await axios.get("http://localhost:5000/addItem/getItem");
      setData([...AddItemData.data]);
      console.log(AddItemData.data);
      
    }
  
    return (

      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        style={Styles.table}
        title="Added Items"
        icons={tableIcons}
        columns={columns}
        data={data}
        editable={{
    //       onRowUpdate: (newData, oldData) =>
    //         new Promise(async (resolve, reject) => {
    //           try {
    //             let { _id, ...req } = newData;
    //             const res = await axios.put(
    //               `http://localhost:5000/addItem/update/item/${oldData._id}`,
    //               req
    //             );
    //             const dataUpdate = [...data];
    //             const index = oldData.tableData.id;
    //             dataUpdate[index] = newData;
    //             setData([...dataUpdate]);
    
    //             resolve();
    //           } catch (error) {
    //             reject(error);
    //           }
    //         }),
    //       onRowDelete: (oldData) =>
    //         new Promise(async (resolve, reject) => {
    //           try {
    //             const res = await axios.delete(
    //               `http://localhost:5000/addItem/delete/item/${oldData._id}`
    //             );
    //             const dataDelete = [...data];
    //             const index = oldData.tableData.id;
    //             dataDelete.splice(index, 1);
    //             setData([...dataDelete]);
    
    //             resolve();
    //           } catch (error) {
    //             reject(error);
    //           }
    //         }),
        }}
      />
    </ThemeProvider>
    )}
  