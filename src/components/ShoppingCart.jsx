import './styleSheets/ShoppingCart.css'

const ShoppingCart = (props) => {
    return (
        <main className='shopping-cart-parent'>
            <h1>ShoppingCart</h1>

            {props.cart.items.map((item) => {
                return (
                    <p><span>${item.price} - </span>{item.title}</p>
                    
                )
            })}
        </main>
    )
}

export default ShoppingCart