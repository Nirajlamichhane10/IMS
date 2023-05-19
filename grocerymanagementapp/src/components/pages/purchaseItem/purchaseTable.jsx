import * as React from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { MTableEditField } from "material-table";

import { ListItem, ThemeProvider, createTheme } from "@mui/material";

import { forwardRef } from "react";
import AddBox from "@mui/icons-material/AddBox";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Check from "@mui/icons-material/Check";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Clear from "@mui/icons-material/Clear";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Edit from "@mui/icons-material/Edit";
import FilterList from "@mui/icons-material/FilterList";
import FirstPage from "@mui/icons-material/FirstPage";
import LastPage from "@mui/icons-material/LastPage";
import Remove from "@mui/icons-material/Remove";
import SaveAlt from "@mui/icons-material/SaveAlt";
import Search from "@mui/icons-material/Search";
import ViewColumn from "@mui/icons-material/ViewColumn";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import { log } from "joi-browser";
import { v4 as uuid } from "uuid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CollapsibleTable from "./newTable";
import Alertbar from '../../Alertbar';
import { purchaseItemSchema } from "../../validationJoi/Validation";

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => (
		<ChevronRight {...props} ref={ref} />
	)),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => (
		<ChevronLeft {...props} ref={ref} />
	)),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const Styles = {
	root: {
		display: "flex",
	},
	maintable: {
		alignItems: "center",
      textAlign: "center",
      width:"80%",
    
      margin:"25px 10px 10px 190px",
    
	},
	buttonprint: {
		margin: "30px 20px 50px 700px",
		width: "220px",
	},
	button: {
		margin: "30px 0px 50px 1150px",
		width: "220px",
	},

};

export default function PurchasedTable(props) {
	const { useState } = React;
	var [itemNames, setItemNames] = useState({});

	const [invoice, setInvoice] = React.useState({
		invoiceNumber: "",
		billDate: "null",
		supplierName: "",
		payment:"",
		items: [],
	});

	const defaultMaterialTheme = createTheme();

	const [items, setItems] = React.useState([{}]);
	const [selectedItem, setSelectedItem] = React.useState(null);
	// const [unitList, setUnitList]= React.useState({});
	const [priceList, setPriceList]= React.useState({});
	
	const[message, setMessage]= React.useState("");
    const[status, setStatus]= React.useState("");
    const[open, setOpen]= React.useState(false);


	const {
		invoiceNumber,
		billDate,
		supplierName,
		payment,
		setInvoiceNumber,
		setSupplierName,
		setBillDate,
		setSelectedSupplier,
		setPayment,
	} = props;


	const [grandTotal, setGrandTotal] = React.useState(0);
	

	// // // TEST

	// const test = () => {
	// 	console.log("unit list ");
	// 	console.log(unitList[1]);
	// };




	// reset
	const reset = () => {
		setInvoiceNumber("");
		setSupplierName("");
		setSelectedSupplier("Select supplier");
		setPayment("");
		setBillDate(null);
		setItems([{}]);
		setData([]);
		generatedInvoiceNumber();


		// const unique_id = uuid();
		// const small_id = unique_id.slice(0, 8);

		// console.log(small_id);
		// setInvoiceNumber(small_id);
	};



	const generatedInvoiceNumber = async () =>{
		try {
		  const res = await axios.get(" http://localhost:5000/purchaseInvoice/getPurchaseInvoice");
		  
		  let tempInvoiceNumber = res.data[0].invoiceNumber;
		  
		  let parts = tempInvoiceNumber.split('-'); // split the string by hyphens
		  let numericPart = parts[4]; // extract the last part (01)
		  let incrementedNumericPart = (parseInt(numericPart, 10) + 1).toString().padStart(2, '0'); // increment the numeric part and pad it with leading zeros
		  parts[4] = incrementedNumericPart; // update the numeric part in the array
		  let newInvoiceNumber = parts.join('-'); // join the array back into a string
		  console.log(newInvoiceNumber); // "GMS-P-2080-81-02"
	
		  const updateRes = await axios.post("http://localhost:5000/purchaseInvoice/updatePurchaseInvoice",{id:res.data[0]._id,invoiceNumber:newInvoiceNumber});
		  console.log(updateRes);
		  const newRes = await axios.get(" http://localhost:5000/purchaseInvoice/getPurchaseInvoice");
		  setInvoiceNumber(newRes.data[0].invoiceNumber);
	
	
	
		}catch(e){
		  console.log(e);
		}
	
	  }

	const [data, setData] = useState([
		// { itemName: 0, unitOfItem: "ml", quantity: 12, price: 1200, total: 1500 },
	]);


	 // for Alertbar of Snackbar
   
const handleClose = (event, reason) => {
	if (reason === 'clickaway') {
	  return;
	}
  
	setOpen(false);
	
  };

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
		try {
			const purchaseItemData ={supplierName,payment,items};
            const result=purchaseItemSchema(purchaseItemData);
            if (result.error){
				setMessage(" please fill all required fields ");
				console.log("with error");
                console.log(result);
			    setStatus("error");
			    setOpen(true);
			
			
			}
			if (!result.error){

			const response = await axios.post(
				"http://localhost:5000/purchaseItem/purchase",
				{ invoiceNumber, billDate, supplierName, payment, items },
			);
			console.log("invoice data");
			console.log(response.data);
			setInvoice(response.data);
			calculateGrandTotal(response.data);
			console.log("without error ");
            console.log(result);
			setMessage("Items added successfully");
			setStatus("success");
			setOpen(true);
			reset();

			}
			


		} catch (e) {
			console.log(e);
			setMessage("Error Occurred ! Items  can't be added ");
			setStatus("error");
			setOpen(true);
		}
	};

	// function for row total
	//         const calculateGrandTotal = (newData) => {
	//           let grandTotal = 0;

	// for (const row of data) {
	//     if (row.total) {
	//       grandTotal += row.total;
	//     }
	//   }

	//   return grandTotal;
	//         }

	const calculateGrandTotal = (data) => {
		let grandTotal = 0;
		data.items.map((eachInvoice) => (grandTotal += eachInvoice.total));
		console.log("grand total");
		console.log(grandTotal);
		console.log(data);
		setGrandTotal(grandTotal);
	};

// using useeffect
	useEffect(() => {
		fetchItemName();
	}, []);


	const fetchItemName = async () => {
		try {
			const res = await axios.get(" http://localhost:5000/addItem/getItem");
			let methodObject = { 0: "Select ItemName" };
			let count = 1;
			res.data.map((item) => {
				methodObject[count] = item.itemName;
				count++;
			});
			console.log("Method Object");
			console.log(methodObject);
			setItemNames(methodObject);
// // for unit of item 
// 			let unitObject = { 0: "Select unit" };
// 			 count = 1;
// 			res.data.map((item) => {
// 				unitObject[count] = item.unitOfItem;
// 				count++;
// 			});
// 			setUnitList(unitObject);

			// for price 
			// for unit of item 
			let priceObject = { 0: "Select unit" };
			 count = 1;
			res.data.map((item) => {
				priceObject[count] = item.price;
				count++;
			});
			setPriceList(priceObject);
		} catch (e) {
			
			console.log(e);
		}
	};
 
	const columns = [
		{
			title: "Item  Name",
			field: "itemName",
			initialEditValue: 0,
			lookup: itemNames,	
		},
		
	// 	{ title: "Unit", field: "unitOfItem",lookup:{0:'Select Unit'},initialEditValue: 0,
	// 	render: rowData => {
	// 		return(unitList[rowData.itemName]);

	// 	}
	// },
		{ title: "Quantity", field: "quantity", initialEditValue: 0, },
		{ title: "Price", field: "price", initialEditValue: 0 ,
		editable: false,
		render: rowData => {
			return(priceList[rowData.itemName]);

		}
	
	},
		{ title: "Total", field: "total", initialEditValue: 0, editable: false },
	];

	return (
		<div>
			<style>{`@media print {.no-show{display: none;}}`}</style>
			<ThemeProvider theme={defaultMaterialTheme}>
				<div className="no-show">
					<MaterialTable
						style={Styles.maintable}
						showEmptyDataSourceMessage={false}
						title="Added Items"
						icons={tableIcons}
						columns={columns}
						data={data}
						// for adding total
						options={{
							search: false,
							paging: false,
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
							// Container: (props) => <div {...props} />,

							// Cell: (props) => <div {...props} />,
						}}
						editable={{
							onRowAdd: (newData) =>
								new Promise((resolve, reject) => {
									setTimeout(() => {
										const total = parseInt(priceList[newData.itemName]) * parseInt(newData.quantity);
										newData.total = total;
										setData([...data, newData]);
										const tempItem = {
											itemName: itemNames[newData.itemName],
											// unitOfItem: unitList[newData.itemName],
											quantity: newData.quantity,
											price: priceList[newData.itemName],
											total: total,
										};
										setItems([...items, { ...tempItem }]);

										//   // Update the grand total
										// const updatedGrandTotal = calculateGrandTotal([...data, newData]);
										// console.log(updatedGrandTotal); // Output: Updated grand total
										// console.log('total');
										// console.log(newData.price);
										// console.log(newData.quantity);
										// console.log(total);

										resolve();
									}, 1000);
								}),
							onRowUpdate: (newData, oldData) =>
								new Promise((resolve, reject) => {
									setTimeout(() => {
										const dataUpdate = [...data];
										const index = oldData.tableData.id;
										dataUpdate[index] = newData;
										setData([...dataUpdate]);

										resolve();
									}, 1000);
								}),
							onRowDelete: (oldData) =>
								new Promise((resolve, reject) => {
									setTimeout(() => {
										const dataDelete = [...data];
										const index = oldData.tableData.id;
										dataDelete.splice(index, 1);
										setData([...dataDelete]);

										resolve();
									}, 1000);
								}),
							editField: (props) => (
								<MTableEditField
									{...props}
									columnDef={{ ...props.columnDef, lookup: columns[0].lookup }}
								/>
							),
						}}
					/>
				</div>
			</ThemeProvider>

			<div style={Styles.button}>
				<div className="no-show">
					<Button onClick={handleOnclick} variant="contained" size="large">
						SAVE ITEM
					</Button>
				</div>
				
				<Alertbar
      message={message}
      status={status}
      open={open}
      handleClose={handleClose}
      />
    
				<div style={Styles.collabtable}>
					<CollapsibleTable invoice={invoice} grandTotal={grandTotal} />
				</div>
			</div>
			{/* <Button onClick={test}>Test</Button> */}
		</div>
	);
}
