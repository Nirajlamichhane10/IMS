import Firstpage from"./components/Firstpage/index";
import Drawer from "./components/sidebar/drawer";
import DataTable from "./components/sidebar/table";






import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  
function App() {
	
	return (
		<Router>
		<div className="App">
			<Routes>
			
				<Route path="/homepage" exact element={<Firstpage/>} />
				
				<Route path="/drawer" element={<Drawer/>}/>

				<Route path="/table" element={<DataTable/>}/>




			
				


			</Routes>
		</div>
	</Router>

		
	);
}

export default App;