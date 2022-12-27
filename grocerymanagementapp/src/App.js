import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Firstpage from"./components/Firstpage/index";



import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

  
function App() {
	
	return (
		<Router>
		<div className="App">
			<Routes>
				<Route path="/" exact element={<Home/>} />
				<Route path="/Homepage" exact element={<Firstpage/>} />
				<Route path="/login" element={<Login/>} />
				<Route path="users">
					<Route index element={<List/>} />
					<Route path=":userId" element={<Single/>}/>
					<Route path="new" element={<New/>}/>
					</Route>
					<Route path="product">
					<Route index element={<List/>} />
					<Route path=":productId" element={<Single/>}/>
					<Route path="new" element={<New/>}/>
					</Route>

			</Routes>
		</div>
	</Router>
        
		
	);
}

export default App;