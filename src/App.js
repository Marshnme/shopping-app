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
		const quantity = 1;
		console.log(cart.items);
		// Try using map or foreach again and correctly calling setCart for current cartitem instead of modifying useState directly
		for (let i = 0; i < cart.items.length; i++) {
			console.log(cart.items[i]);
			if (cart.items[i].item.id === newItem.id) {
				setCart((prevState) => ({
					...prevState,
					quantity: cart.quantity + 1,
				}));
				// bad practice to modify state directly
				return (cart.items[i].quantity += 1);
			}
		}
		setCart((prevState) => ({
			...prevState,
			quantity: cart.quantity + 1,
			items: [...cart.items, { item: newItem, quantity: quantity }],
		}));
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

	function addQuantity(currentItem) {
		let newCartQuan = cart.quantity;
		console.log('currrr', currentItem);
		let newItems = cart.items.map((item) => {
			if (item.item.id === currentItem.item.id) {
				console.log('the saaaame', item);
				if (item.quantity < item.item.rating.count) {
					newCartQuan += 1;
					item.quantity += 1;
				} else {
					console.log('MAX STOCK REACHED');
				}
				return item;
			} else {
				return item;
			}
		});
		setCart((prevState) => ({
			...prevState,
			quantity: newCartQuan,
			items: newItems,
		}));
		// setCart(newItems);
	}
	function minusQuantity(currentItem) {
		let newCartQuan = cart.quantity;
		let newItems = cart.items.map((item) => {
			if (item.item.id === currentItem.item.id) {
				console.log('the saaaame', item);
				if (item.quantity > 1) {
					newCartQuan -= 1;
					item.quantity -= 1;
				} else {
					return item;
				}

				return item;
			} else {
				return item;
			}
		});
		setCart((prevState) => ({
			...prevState,
			quantity: newCartQuan,
			items: newItems,
		}));
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
						element={
							<ShoppingCart
								cart={cart}
								addQuantity={addQuantity}
								minusQuantity={minusQuantity}
							/>
						}
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
