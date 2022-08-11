import './styleSheets/ShoppingCart.css'

const ShoppingCart = (props) => {
    return (
        <main className='shopping-cart-parent'>
            <h1>ShoppingCart</h1>
            {console.log(props.cart.items)}
            {props.cart.items.map((item) => {
                console.log(item)
                return (
                    <div key={item.item.id}>
                        <p><span>${item.item.price} - </span>{item.item.title}</p>
                        <p><span onClick={() => { props.minusQuantity(item) }}>minus</span>{item.quantity}<span onClick={() => { props.addQuantity(item) }}>add</span></p>

                    </div>
                    
                )
            })}
        </main>
    )
}

export default ShoppingCart