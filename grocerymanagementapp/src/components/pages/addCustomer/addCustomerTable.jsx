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
      width:"100%",
      margin:"-380px 10px 10px 70px",
    
    }

};

export default function CustomerTable() {
    const { useState,useEffect } = React;
    const defaultMaterialTheme = createTheme();

  
    const [columns, setColumns] = useState([
   
      { title: 'customer Name', field: 'customerName', initialEditValue: 'initial edit value' },
      { title: 'Customer Contact', field: 'customerContact', initialEditValue: 'initial edit value' },
      { title: 'Customer Email', field: 'customerEmail', initialEditValue: 'initial edit value' },
      { title: 'Customer Address', field: 'customerAddress', initialEditValue: 'initial edit value' },
      
    ]);
  
    const [data, setData] = useState([
      
    ]);

    useEffect(() => {
      fetchData();
      
    },[]);

 
    const fetchData = async()=>{
      const CustomerData= await axios.get("http://localhost:5000/addCustomer/getCustomer");
      setData([...CustomerData.data]);
      console.log(CustomerData.data);
      
    }
  
    return (

        <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable style={Styles.table}
        title="Customer Details "
        icons={tableIcons}
        columns={columns}
        
        data={data}
        editable={{
          // onRowAdd: newData =>
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       setData([...data, newData]);
                
          //       resolve();
          //     }, 1000)
          //   }),
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
    )
  }
  