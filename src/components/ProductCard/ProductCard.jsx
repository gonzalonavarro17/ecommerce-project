import './ProductCard.css'

const ProductCard = ({ product }) => {
    const { id, title, price, description, image, rating } = product;

    return (
        <div className='product-card' key={ id }>
            <img className='product-image' src={ image } alt={ title } />
            <div className='product-info'>
                <h3 className='product-title'>{ title }</h3>
                <p className='product-description'>{ description }</p>
                { false && (
                    <div className='product-rating'>
                        <p>{`Rating: ${ rating.rate } (${ rating.count } reviews)`}</p>
                    </div>
                )}
                <p className='product-price'>{`$${price}`}</p>
            </div>
        </div>
    )
}

export default ProductCard;