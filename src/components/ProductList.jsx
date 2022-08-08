import './styleSheets/ProductList.css'

const ProductList = (props) => {
    return (
        <div className='product-list-parent'>
            <div className='filter-box'>
                <div>
                    <input type="radio" id="all" name="category" value="all"/>
                    <label for="all">All Products</label>
                </div>
                <div>
                    <input type="radio" id="mens-clothing" name="category" value="Men's Clothing"/>
                    <label for="mens-clothing">Men's Clothing</label>
                </div>
                <div>
                    <input type="radio" id="womens-clothing" name="category" value="Women's Clothing"/>
                    <label for="womens-clothing">Women's Clothing</label>
                </div>
                <div>
                    <input type="radio" id="jewelry" name="category" value="Jewelry"/>
                    <label for="jewelry">Jewelry</label>
                </div>
                <div>
                    <input type="radio" id="electronic" name="category" value="Electronic" />
                    <label for="electronic">Electronic</label> 
                </div>
                
                
                
            </div>
            <main className='product-list'>
            
            {props.storeItems.map((item) => {
                console.log(item) 
                return (
                    <div key={item.id} className='product'>
                        <img className='product-img' src={item.image} alt='product img'></img>
                        <p className='product-title'>{item.title}</p>
                        <p className='product-price'>${item.price}</p>
                        <p className='product-description'>{item.description}</p>
                    </div>
                )
            })}
            </main>
        </div>
    )
}

export default ProductList