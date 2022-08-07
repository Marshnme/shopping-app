import './styleSheets/ProductList.css'

const ProductList = (props) => {
    return (
        <div className='product-list-parent'>
            <div className='filter-box'>filter Box</div>
            <main className='product-list'>
            
            {props.storeItems.map((item) => {
                console.log(item) 
                return (
                    <div key={item.id} className='product'>
                        <img className='product-img' src={item.image} alt='product img'></img>
                        <p><span>${item.price} - </span>{item.title}</p>
                    </div>
                )
            })}
            </main>
        </div>
    )
}

export default ProductList