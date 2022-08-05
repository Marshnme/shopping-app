import './styleSheets/ProductList.css'

const ProductList = (props) => {
    return (
        <main className='product-list-parent'>
            {props.storeItems.map((item) => {
                console.log(item) 
                return (
                    <div key={item.id} className='product'>
                        <p>{item.title}</p>
                    </div>
                )
            })}
        </main>
    )
}

export default ProductList