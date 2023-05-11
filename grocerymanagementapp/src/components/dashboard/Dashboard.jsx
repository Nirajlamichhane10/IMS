import React, { useEffect } from 'react';
import DataTable from './table';
import BasicCard from'./cards';
import axios from "axios";

import DashboardTable from './dashboardTable';

import GraphicalRepresentation from './graphCharts';




const  Styles={
    root: {
        display: "flex",
      
    },
  
    appbar:{
      display: "flex",
      justifyContent :"space-around",
      
  
    },
    //for all icon text
    icond: {
      margin: "0px 0px 0px 25px",   
  
   
    },
  
  // for all icon
    icont:{
      height:"4vw",
      color:"#4c00b0",
      transform: "scale(1)",
      cursor: "pointer",
      
  
    },
   // for 3 dots
   dot:{
   margin: "0px 0px 0px 10px", 
   color:"red",
  
   },
    lims: {},
  
  //appbar css
  
  
  
  // grocery 
  grocery:{
  margin:"0px 0px 0px 500px",
  
  
  },

  cards:{
  
    borderRadius:"20px",
    width:"220px",
   
    textAlign:"center",
    margin:"110px 30px 50px -15em",
    boxShadow: "15px 15px 8px lightblue",
   
  
  
  },
  cards1:{
  
    borderRadius:"20px",
    width:"220px",
    textAlign:"center",
    margin:"-140px 30px 50px 12em",
    boxShadow: "15px 15px 8px lightblue",
   
  
  
  },
  cards2:{
  
    borderRadius:"20px",
    width:"220px",
    textAlign:"center",
    margin:"-140px 30px 50px 40em",
    boxShadow: "15px 15px 8px lightblue",
  
   
  
  
  },
  graph:{
    margin:"110px 30px 50px -22em",
    

  },
  dasdboardback:{
    color:"#D9E5D6",
  },

  footer:{
    margin:"110px 30px 50px -45em",

  },
  
  
  
  };
  

export default function Dashboard() {

  const [text1,setText1]= React.useState("TOTAL SALES");
  const [text2,setText2]= React.useState("TOTAL PURCHASES");
  const [text3,setText3]= React.useState("TOTAL STOCK VALUE");
  const [grandTotal, setGrandTotal] = React.useState();
  const [purchaseGrandTotal, setPurchaseGrandTotal] = React.useState(0);
  const [sellGrandTotal, setSellGrandTotal] = React.useState(0);
  const [stockGrandTotal, setStockGrandTotal] = React.useState(0);




 // for fetch purchase Item 
  useEffect(() => {
		fetchPurchaseItem();
    fetchSellItem();
    fetchStockItem();

	}, []);

  const fetchPurchaseItem = async () => {
		try {
			const res = await axios.get(" http://localhost:5000/purchaseItem/getPurchase");

    let allGrandTotal = 0 ;
    res.data.map((item) => {
      allGrandTotal+=item.grandTotal;
      

    }
    )
    console.log("all grandTotal");
    console.log(allGrandTotal);
    setPurchaseGrandTotal(allGrandTotal);
 

    } catch (e) {
			
			console.log(e);
		}
  }

  const fetchSellItem = async () => {
		try {
			const res = await axios.get("http://localhost:5000/sellItem/getSell");

    let allGrandTotal = 0 ;
    res.data.map((item) => {
      allGrandTotal+=item.grandTotal;
      

    }
    )
    console.log("all grandTotal");
    console.log(allGrandTotal);
    setSellGrandTotal(allGrandTotal);
 

    } catch (e) {
			
			console.log(e);
		}
  }


  const fetchStockItem = async () => {
		try {
			const res = await axios.get("http://localhost:5000/addItem/getItem");

    let allStockTotal = 0 ;
    res.data.map((item) => {
      let stockTotal = item.quantity * item.price;
      allStockTotal  += stockTotal;
      

    }
    )
    console.log("all stock");
    console.log(allStockTotal);
    setStockGrandTotal(allStockTotal);
 

    } catch (e) {
			
			console.log(e);
		}
  }
 
  return (

    
    
    <div>
        <div style={Styles.cards}>
        <BasicCard text={text1} value={`Rs. ${sellGrandTotal}`} />
      
        </div>
        <div style={Styles.cards1}>
        <BasicCard text={text2} value={`Rs. ${purchaseGrandTotal}`}/>
        </div>
        <div style={Styles.cards2}>
        <BasicCard text={text3} value={`Rs. ${stockGrandTotal}`}/>
        </div>
    <div style={Styles.graph}>
      <GraphicalRepresentation
      sellGrandTotal={sellGrandTotal}
      purchaseGrandTotal={purchaseGrandTotal}
      stockGrandTotal={stockGrandTotal}
      
      />
    </div>
      
      <div >
      { <DashboardTable/> }
      </div>
      <div style={Styles.footer}>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div>
    </div>
  )
}
