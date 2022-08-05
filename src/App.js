import './App.css';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<ProductList />}></Route>
				<Route path="/shoppingCart" element={<ShoppingCart />}></Route>
			</Routes>
		</div>
	);
}

export default App;
