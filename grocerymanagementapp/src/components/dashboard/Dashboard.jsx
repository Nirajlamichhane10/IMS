import React from 'react';
import DataTable from './table';
import BasicCard from'./cards';
// import MyCharts from './piechart';

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
  // table
  table:{
    // margin:"80% 0% 0% 150%",
    width:"850px",
    margin:"50px 10px 10px 400px",
    height:"400px",
    boxShadow: "15px 15px 8px lightblue",
  
    
  
  },
  cards:{
  
    borderRadius:"20px",
    width:"220px",
    textAlign:"center",
    margin:"110px 30px 50px 400px",
    boxShadow: "15px 15px 8px lightblue",
   
  
  
  },
  cards1:{
  
    borderRadius:"20px",
    width:"220px",
    textAlign:"center",
    margin:"-190px 30px 50px 700px",
    boxShadow: "15px 15px 8px lightblue",
   
  
  
  },
  cards2:{
  
    borderRadius:"20px",
    width:"220px",
    textAlign:"center",
    margin:"-190px 30px 50px 1000px",
    boxShadow: "15px 15px 8px lightblue",
   
  
  
  },
  dasdboardback:{
    color:"#D9E5D6",
  },
  
  
  
  };
  

export default function Dashboard() {

  const [text1,setText1]= React.useState("Stock In");
  const [text2,setText2]= React.useState("Stock Out");
  const [text3,setText3]= React.useState("Stock Availabe");

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
       {/* <div>
        <MyCharts/>
        </div> */}
      <div style={Styles.table}>
      <DataTable/>
      </div>
      <div>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div>
    </div>
  )
}
