import Firstpage from"./components/Firstpage/index";
import Drawer from "./components/sidebar/drawer";




import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  
function App() {
	
	return (
		<Router>
		<div className="App">
			<Routes>
			
				<Route path="/Homepage" exact element={<Firstpage/>} />
				
				<Route path="/drawer" element={<Drawer/>}/>
				


			</Routes>
		</div>
	</Router>

		
	);
}

export default App;