import * as React from 'react';
import MaterialTable from 'material-table';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

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
      width:"80%",
      margin:"200px 10px 10px 8em",
    
    },
    button:{
        margin:"550px 10px 10px -15em",
    },
        suppState:{
        
        color :"red",  
        textAlign:"center",
         margin:"-6em 0px 50px -26em",
         
         display:"flex",
    },

    
};

export default function SupplierTableInvoice(props) {
    const { useState,useEffect } = React;
    const defaultMaterialTheme = createTheme();
    let Navigator = useNavigate();

   
    const [columns, setColumns] = useState([
   
      { title: 'Invoice Number', field: 'invoiceNumber', },
      { title: 'Bill Date', field: 'billDate', },
      { title: 'Supplier Name', field: 'supplierName',  },
      
    
    ]);
  
    const [data, setData] = useState([
        
      
    ]);

  //  // TEST  
  //   const Test =()=>{
    
  //     fetchInvoiceData();

      
    
  
  //   }

    // using useeffect to fetch data 

    useEffect(() => {
      fetchInvoiceData();
      
    },[]);


     const fetchInvoiceData = async()=>{
        try {
      const SupplierInvoiceData= await axios.get("http://localhost:5000/purchaseItem/getInvoice");

      const outputArray = SupplierInvoiceData.data.map(({ 
        _id, invoiceNumber, billDate, supplierName,items
     }) => ({ invoiceNumber, billDate, supplierName }));

      setData([...outputArray]);
      console.log("Output array");
      console.log(outputArray);
      
    }
    catch(error) {
        console.log(error);
    }
}

  
    return (
        

      <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        style={Styles.table}
        title="Supplier Statement Details"
        icons={tableIcons}
        columns={columns}
        data={data}

        actions={[
            {
              icon: 'save',
              tooltip: 'Save User',
              onClick: (event, rowData) =>{
              Navigator('/reciptTable',{state:rowData});

              // window.location='/reciptTable';
              console.log("row data");
              console.log(rowData);

            }
          }
          ]}
          // adding action button 
        components={{
            Action: props => (
              <Button
                onClick={(event) => 
                  props.action.onClick(event, props.data)}
                color="primary"
                variant="contained"
                style={{textTransform: 'none'}}
                size="small"
              >
                Recipt
              </Button>
            ),
          }}
        
        // editable={{
        //   onRowUpdate: (newData, oldData) =>
        //     new Promise(async (resolve, reject) => {
        //       try {
        //         let { _id, ...req } = newData;
        //         const res = await axios.put(
        //           `http://localhost:5000/addItem/update/item/${oldData._id}`,
        //           req
        //         );
        //         const dataUpdate = [...data];
        //         const index = oldData.tableData.id;
        //         dataUpdate[index] = newData;
        //         setData([...dataUpdate]);
    
        //         resolve();
        //       } catch (error) {
        //         reject(error);
        //       }
              
        //     }),

        //   onRowDelete: (oldData) =>
        //     new Promise(async (resolve, reject) => {
        //       try {
        //         const res = await axios.delete(
        //           `http://localhost:5000/addItem/delete/item/${oldData._id}`
        //         );
        //         const dataDelete = [...data];
        //         const index = oldData.tableData.id;
        //         dataDelete.splice(index, 1);
        //         setData([...dataDelete]);
    
        //         resolve();
        //       } catch (error) {
        //         reject(error);
        //       } 
            
            // }),
        // }}
        options={{
          exportButton: true
        }}
      />
      <div>
        <Typography  color="text.secondary" variant="h4" gutterBottom style={Styles.suppState}>
           Supplier Statement:
           </Typography>
           </div>
           {/* <Button onClick={Test}>
      Test
    </Button> */}

    </ThemeProvider>
    
    
    )}
    
