import React from 'react';
import DataTable from './table';
import BasicCard from'./cards';

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
    margin:"110px 30px 50px 0px",
    boxShadow: "15px 15px 8px lightblue",
   
  
  
  },
  cards1:{
  
    borderRadius:"20px",
    width:"220px",
    textAlign:"center",
    margin:"-190px 30px 50px 20em",
    boxShadow: "15px 15px 8px lightblue",
   
  
  
  },
  cards2:{
  
    borderRadius:"20px",
    width:"220px",
    textAlign:"center",
    margin:"-190px 30px 50px 40em",
    boxShadow: "15px 15px 8px lightblue",
   
  
  
  },
  graph:{
    margin:"110px 30px 50px -20em",
    

  },
  dasdboardback:{
    color:"#D9E5D6",
  },
  
  
  
  };
  

export default function Dashboard() {

  const [text1,setText1]= React.useState("Total Sales");
  const [text2,setText2]= React.useState("Total Purchase");
  const [text3,setText3]= React.useState("Total Stock Value");

  return (
    <div>
        <div style={Styles.cards}>
        <BasicCard text={text1}/>
        </div>
        <div style={Styles.cards1}>
        <BasicCard text={text2}/>
        </div>
        <div style={Styles.cards2}>
        <BasicCard text={text3}/>
        </div>
    <div style={Styles.graph}>
      <GraphicalRepresentation/>
    </div>
      
      <div >
      { <DashboardTable/> }
      </div>
      <div>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div>
    </div>
  )
}
