import './styleSheets/NavBar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link,useNavigate} from 'react-router-dom'

const NavBar = () => {
    let navigate = useNavigate()
    function goToCart(){
        navigate('/shoppingCart')
    }
    return (
        <header className='nav-parent'>
            <h2>BuyIt</h2>
            <div className='nav-links'>
                <Link className='products-link' to='/'>Products</Link>
                <ShoppingCartIcon className='cart-icon' onClick={goToCart}></ShoppingCartIcon>
            </div>
            
        </header>
    )
}

export default NavBar