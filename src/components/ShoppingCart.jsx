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

    console.log("cart before render", props.cart)
    
    
    
    if (props.cart.items.length === 0) {
        return (
            <div className='no-cart-items-main'>
                <h3>You got no items fool</h3>
            </div>
        )
    } else {
        
        
        return (
        
            <main className='shopping-cart-parent'>
                <h1 className='cart-product-h1'>ShoppingCart</h1>
                <div className='cart-group-sep'>
                    <div className='all-cart-items'>

                

                        {console.log('info i need',props.cart.items)}
                        {props.cart.items.map((item) => {
                            console.log(item)
                            let totalPerItem = item.quantity * item.item.price;
                            return (
                        
                                <div className='cart-item' key={item.item.id}>
                                    <div className='cart-image-title'>
                                        <img className='cart-item-image' src={item.item.image} alt='product'></img>
                                        <div className='cart-item-details'>

                                        
                                        <div>
                                            <p className='cart-item-title'>{item.item.title}</p>
                                            {/* <p>${item.item.price.toFixed(2)}</p> */}
                                        </div>

                                        <div className='quantity-parent'>
                                            <div className='quantity-count'>
                                                <p className='minus-quantity' onClick={() => { props.minusQuantity(item) }}>-</p>
                                                <p>{item.quantity}</p>
                                                <p className='add-quantity' onClick={() => { props.addQuantity(item) }}>+</p>
                                                </div>
                                            <div>
                                                <p>${totalPerItem.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <p onClick={()=>{props.removeCartItem(item.item.id)}}>Remove</p>
                                    </div>
                                </div>
                            </div>

                            )
                        })}
                    </div>
            
            
                    <div className='shopping-cart-total'>
                        <div className='cart-total-group'>
                            <p>Total:</p>
                            <p >${total}</p>
                        </div>
                    
                        <button>BUY NOW</button>
                    </div>
                </div>
            </main>
        )
    }
}

export default ShoppingCart