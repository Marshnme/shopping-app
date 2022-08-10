import './styleSheets/ShoppingCart.css'

const ShoppingCart = (props) => {
    return (
        <main className='shopping-cart-parent'>
            <h1>ShoppingCart</h1>
            {console.log(props.cart.items)}
            {props.cart.items.map((item) => {
                console.log(item)
                return (
                    <div key={item.newItem.id}>
                        <p><span>${item.newItem.price} - </span>{item.newItem.title}</p>
                        <p>{item.quantity}</p>
                    </div>
                    
                )
            })}
        </main>
    )
}

export default ShoppingCart