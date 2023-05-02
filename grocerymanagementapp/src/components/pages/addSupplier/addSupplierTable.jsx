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
      width:"90%",
      margin:"-400px 10px 10px 120px",
    
    }

};

export default function SupplierTable(props) {
    const { useState,useEffect } = React;
    const [rows, setRows] = useState([]);
    const defaultMaterialTheme = createTheme();
  

  
    const [columns, setColumns] = useState([
   
      { title: 'Supplier Name', field: 'supplierName', initialEditValue: 'initial edit value' },
      { title: 'Supplier Contact', field: 'supplierContact', initialEditValue: 'initial edit value' },
      { title: 'Supplier Email', field: 'supplierEmail', initialEditValue: 'initial edit value' },
      { title: 'Supplier Address', field: 'supplierAddress', initialEditValue: 'initial edit value' },
      
    ]);

    // RELOADING 
  const {reloadData,setReloadData}=props;
  //  const [data, setData] = useState([...props.reloadData]);


  //  useEffect(() => {
  //  firstload();
  // },[]);

  // const firstload=()=>{
  //   setData([...props.reloadData])
 // }


  // //testing for botton
  //   const test=()=>{
  //      console.log(data);
  //     console.log(props.reloadData);
  //     console.log(props.reloadData==null);
  //   }
  
    return (

        <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable style={Styles.table}
        title="Supplier Details "
        icons={tableIcons}
         
        columns={columns}
        
        data={reloadData}
        editable={{
          onRowUpdate: (newData, oldData) =>
									new Promise(async (resolve, reject) => {
										try {
											let { _id, ...req } = newData;
											const res = await axios.put(
												`http://localhost:5000/addSupplier/update/supplier/${oldData._id}`,
												req,
											);
                      const dataUpdate = [...reloadData];
                      const index = oldData.tableData.id;
                      dataUpdate[index] = newData;
                      setReloadData([...dataUpdate]);
											resolve();
										} catch (e) {
											console.log(e);
											reject();
										}
									}),

                  onRowDelete: (oldData) =>
									new Promise(async (resolve, reject) => {
										try {
											const res = await axios.delete(`http://localhost:5000/addSupplier/delete/supplier/${oldData._id}`,
											);
											const dataDelete = [...reloadData];
                      const index = oldData.tableData.id;
                      dataDelete.splice(index, 1);
                      setReloadData([...dataDelete]);
											resolve();
										} catch (e) {
											console.log(e);
											reject();
										}
									}),





          // onRowUpdate: (newData, oldData) =>
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       const dataUpdate = [...data];
          //       const index = oldData.tableData.id;
          //       dataUpdate[index] = newData;
                
          //       setData([...dataUpdate]);
          //       resolve();
          //     }, 1000)
          //   }),

    // //           axio.put(`http://localhost:5000/addSupplier/update/supplie`, newData)
    // //     .then((response) => {
    // //       // If the update was successful, update the local state
    // //       setData([...dataUpdate]);
    // //       resolve();
    // //     })
    // //     .catch((error) => {
    // //       // If the update failed, show an error message
    // //       console.error(error);
    // //       reject();
    // //     });
    // // }, 1000);
            
          // onRowDelete: oldData =>
          //   new Promise((resolve, reject) => {
          //     setTimeout(() => {
          //       const dataDelete = [...data];
          //       const index = oldData.tableData.id;
          //       dataDelete.splice(index, 1);
          //       setData([...dataDelete]);
                
          //       resolve()
          //     }, 1000)
          //   }),
        }}
        
      />
      {/* <button onClick={test}>Test</button> */}
      </ThemeProvider>
    )
  }
  