import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	const [storeItems, SetStoreItems] = useState([]);

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

	// useEffect(() => {

	// }, [])

	function filterItems(currentFilter) {
		let newItems = storeItems.filter((item) => {
			if (item.catetgory === currentFilter) {
				return item;
			}
		});

		SetStoreItems(newItems);
	}

	return (
		<div className="App">
			<div className="nav-bar-comp">
				<NavBar></NavBar>
			</div>
			<div className="main-comp">
				<Routes>
					<Route
						path="/"
						element={
							<ProductList
								storeItems={storeItems}
								filterItems={filterItems}
							/>
						}
					></Route>
					<Route
						path="/shoppingCart"
						element={<ShoppingCart />}
					></Route>
				</Routes>
			</div>

			<div className="footer-comp">
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
