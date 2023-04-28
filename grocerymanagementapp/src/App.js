import * as React from 'react';
import Firstpage from"./components/Firstpage/index";
import Drawer from "./components/dashboard/drawer";
import DataTable from "./components/dashboard/table";


// import Forgetpassword from "./components/Firstpage/forgetpassword";
import BasicCard from "./components/dashboard/cards";

import AddItem from './components/pages/addItem/addItem';
import PurchaseItem from './components/pages/purchaseItem/purchaseItem';
import SellItem from './components/pages/sellItem/sellItem';

// import MatTable from './components/pages/materialtable';
import Dashboard from './components/dashboard/Dashboard';
import AddSuppliers from './components/pages/addSupplier/addSuppliers';
import AddCustomers from './components/pages/addCustomer/addCustomers';
import CollapsibleTable from './components/pages/purchaseItem/newTable';
import MyStock from './components/pages/myStock/myStock';
import Profile from './components/Profile/Profile';
import ForgetPassword from './components/Firstpage/forgetpassword';




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

				
				<Route path="/profile" element={<Profile/>}/>

				<Route path="/addItem" element={<AddItem/>}/>

				<Route path="/testTable" element={<CollapsibleTable/>}/>

				<Route path="/purchaseItem" element={<PurchaseItem/>}/>

				<Route path="/addSuppliers" element={<AddSuppliers/>}/>

				<Route path="/addCustomers" element={<AddCustomers/>}/>

				<Route path="/statement" />

				
				<Route path="/myStock" element={<MyStock/>}/>
				
				<Route path="/sellItem" element={<SellItem/>}/>
				
				

				

				

				

				{/* <Route path="/materialtable" element={<MatTable/>}/> */}


			</Routes>
		</div>
	</Router>	
	):(
		<>
		<Router>
		{/* <Firstpage isLogin={isLogin} setLogin={setLogin} tokenId={tokenId}  /> */}
		<Routes>
		<Route path="/"  element={<Firstpage isLogin={isLogin} setLogin={setLogin} tokenId={tokenId}/>} />
		<Route path="/forgetPassword" element={<ForgetPassword/>}/>
		</Routes>
		</Router>
		</>
    );
}

export default App;