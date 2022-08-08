import './styleSheets/ProductList.css'

const ProductList = (props) => {
    console.log(props.filteredItems)
    return (
        <div className='product-list-parent'>
            <div className='filter-box'>
                <p>Filters</p>
                <form>
                <div>
                    <input onClick={(e) => {props.filterItems(e.target.value)}}  type="radio" id="all" name="category" value="all"/>
                    <label htmlFor="all">All Products</label>
                </div>
                <div>
                    <input onClick={(e) => {props.filterItems(e.target.value)}} type="radio" id="mens-clothing" name="category" value="men's clothing"/>
                    <label htmlFor="mens-clothing">Men's Clothing</label>
                </div>
                <div>
                    <input onClick={(e) => {props.filterItems(e.target.value)}} type="radio" id="womens-clothing" name="category" value="women's clothing"/>
                    <label htmlFor="womens-clothing">Women's Clothing</label>
                </div>
                <div>
                    <input onClick={(e) => {props.filterItems(e.target.value)}} type="radio" id="jewelery" name="category" value="jewelery"/>
                    <label htmlFor="jewelery">Jewelery</label>
                </div>
                <div>
                    <input onClick={(e) => {props.filterItems(e.target.value)}} type="radio" id="electronics" name="category" value="electronics" />
                    <label htmlFor="electronics">Electronics</label> 
                    </div>
                </form>
                
                
                
            </div>
            <main className='product-list'>
            
            {props.filteredItems.map((item) => {
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