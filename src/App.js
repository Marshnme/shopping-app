import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	const [storeItems, SetStoreItems] = useState();

	function getStoreItems() {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => {
				SetStoreItems(json);
				console.log(json);
			});
	}

	useEffect(() => {
		getStoreItems();
	}, []);

	return (
		<div className="App">
			<NavBar></NavBar>
			<Routes>
				<Route
					path="/"
					element={<ProductList storeItems={storeItems} />}
				></Route>
				<Route path="/shoppingCart" element={<ShoppingCart />}></Route>
			</Routes>
			<Footer></Footer>
		</div>
	);
}

export default App;
