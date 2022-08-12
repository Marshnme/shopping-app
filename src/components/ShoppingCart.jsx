import './styleSheets/ShoppingCart.css'
import { useState,useEffect} from 'react'
const ShoppingCart = (props) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        findTotal()
    },[props.addQuantity,props.minusQuantity])
    
    function findTotal() {
        let newTotal = 0;
        for (let i = 0; i < props.cart.items.length; i++){
            if (props.cart.items[i].quantity > 1) {
                for (let j = 0; j < props.cart.items[i].quantity; j++){
                    console.log('multiple run')
                    newTotal += props.cart.items[i].item.price
                }
            } else {
                 console.log('single run')
                newTotal += props.cart.items[i].item.price
            }
           
        }

        setTotal(newTotal.toFixed(2))
    }
    return (
        <main className='shopping-cart-parent'>
            <h1>ShoppingCart</h1>
            {console.log(props.cart.items)}
            {props.cart.items.map((item) => {
                console.log(item)
                return (
                    <div className='cart-item' key={item.item.id}>
                        <p><span>${item.item.price} - </span>{item.item.title}</p>
                        <div className='quantity-parent'>
                            <p className='minus-quantity' onClick={() => { props.minusQuantity(item) }}>-</p>
                            <p>{item.quantity}</p>
                            <p className='add-quantity'onClick={() => { props.addQuantity(item) }}>+</p>
                        </div>
                        

                    </div>
                    
                )
            })}

            <p>${total}</p>
        </main>
    )
}

export default ShoppingCart