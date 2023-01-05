import * as React from 'react';
import Firstpage from"./components/Firstpage/index";
import Drawer from "./components/sidebar/drawer";
import DataTable from "./components/sidebar/table";
// import Forgetpassword from "./components/Firstpage/forgetpassword";
import BasicCard from "./components/sidebar/cards";






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
				{/* <Route path="/homepage" exact element={<Firstpage/>} /> */}
				
				{/* <Route path="/drawer" element={<Drawer/>}/> */}

				<Route path="/table" element={<DataTable/>}/>

				<Route path="/cards" element={<BasicCard/>}/>

			</Routes>
		</div>
	</Router>	
	):(
        <Firstpage isLogin={isLogin} setLogin={setLogin} tokenId={tokenId}  />
		// uniqueId={uniqueId} setUniqueId={setUniqueId}
    );
}

export default App;