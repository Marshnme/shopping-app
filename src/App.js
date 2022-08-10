import './App.css';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import Footer from './components/Footer';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
	const [storeItems, setStoreItems] = useState([]);
	const [filteredItems, setFilteredItems] = useState([]);
	const [cart, setCart] = useState({
		quantity: 0,
		items: [],
	});
	function getStoreItems() {
		fetch('https://fakestoreapi.com/products')
			.then((res) => res.json())
			.then((json) => {
				setStoreItems(json);
				setFilteredItems(json);
			});
	}

	useEffect(() => {
		getStoreItems();
	}, []);

	function addToCart(newItem) {
		let quantity = 1;
		console.log(cart.items);
		if (cart.items && cart.items.length !== 0) {
			let newState = cart.items.map((item) => {
				if (item.newItem.id === newItem.id) {
					console.log('we in here');
					item.quantity = item.quantity + 1;
					newItem.quantity = newItem.quantity + 1;
					return item;
				} else {
					return item;
				}
			});
			console.log('NEWSTATE', newState);
			setCart((prevState) => ({
				...prevState,
				quantity: cart.quantity + 1,
				items: newState,
			}));
			// items: [...cart.items, { newItem, quantity: quantity }];
		} else {
			setCart((prevState) => ({
				...prevState,
				quantity: cart.quantity + 1,
				items: [...cart.items, { newItem, quantity: quantity }],
			}));
		}

		// console.log(cart);
	}

	function filterItems(currentFilter) {
		let newItems = [...storeItems];
		newItems = storeItems.filter((item) => {
			if (currentFilter === 'all') {
				return item;
			}
			if (item.category === currentFilter) {
				return item;
			}
		});
		setFilteredItems(newItems);
	}

	return (
		<div className="App">
			<div className="nav-bar-comp">
				<NavBar cart={cart}></NavBar>
			</div>
			<div className="main-comp">
				<Routes>
					<Route
						path="/"
						element={
							<ProductList
								filteredItems={filteredItems}
								filterItems={filterItems}
								addToCart={addToCart}
							/>
						}
					></Route>
					<Route
						path="/shoppingCart"
						element={<ShoppingCart cart={cart} />}
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
