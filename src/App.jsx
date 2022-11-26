import { Route, Routes } from "react-router-dom";
import "./App.css";
import Guard from "./components/Guard";
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import NewProduct from "./pages/Product/Add";
import Product from "./pages/Product/Detail";
import ProductList from "./pages/Product/List";
import NewUser from "./pages/User/Add";
import User from "./pages/User/Detail";
import UserList from "./pages/User/List";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Guard/>}>
				<Route index element={<Home />} />
				<Route path='/users' element={<UserList />} />
				<Route path='/user/:userId' element={<User />} />
				<Route path='/newUser' element={<NewUser />} />
				<Route path='/products' element={<ProductList />} />
				<Route path='/product/:productId' element={<Product />} />
				<Route path='/newproduct' element={<NewProduct />} />
			</Route>
			<Route path="login" element={<LoginPage/>}/>
		</Routes>
	);
}

export default App;
