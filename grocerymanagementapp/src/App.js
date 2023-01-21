import * as React from 'react';
import Firstpage from"./components/Firstpage/index";
import Drawer from "./components/sidebar/drawer";
import DataTable from "./components/sidebar/table";
// import Forgetpassword from "./components/Firstpage/forgetpassword";
import BasicCard from "./components/sidebar/cards";
import AddItem from './components/pages/addItem';
import PurchaseItem from './components/pages/purchaseItem';

// import MatTable from './components/pages/materialtable';
import Dashboard from './components/pages/Dashboard';
import SellItem from './components/pages/sellItem';





import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


  
function App() {

	const token = localStorage.getItem("token");
	const tokenId=React.useRef("");
    const [isLogin, setLogin] = React.useState(token? true : false);
	

    return isLogin ? ( 
		<Router>
		<div className="App">
		<Drawer/>
			<Routes>
				{/* <Route path="/homepage" exact element={<Firstpage/>} />
				
				<Route path="/drawer" element={<Drawer/>}/> */}
				<Route path="/" element={<Dashboard/>}/>

				<Route path="/table" element={<DataTable/>}/>

				<Route path="/cards" element={<BasicCard/>}/>

				<Route path="/addItem" element={<AddItem/>}/>

				<Route path="/purchaseItem" element={<PurchaseItem/>}/>

			
				<Route path="/sellItem" element={<SellItem/>}/>

				

				{/* <Route path="/materialtable" element={<MatTable/>}/> */}


			</Routes>
		</div>
	</Router>	
	):(
        <Firstpage isLogin={isLogin} setLogin={setLogin} tokenId={tokenId}  />
		// uniqueId={uniqueId} setUniqueId={setUniqueId}
    );
}

export default App;