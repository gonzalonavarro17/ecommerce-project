import './Content.css'
import { products } from '../../fakeapi/data.json'
import PropTypes from 'prop-types';

export const Content = () => {
    return (
        <>
        <News />
        <div className='Collection-slide'>
            {   products.map( eachProduct =>
                    <Collection
                        key={ eachProduct.id }
                        { ...eachProduct }
                    />
                )
            }
        </div>
        </>
    )
}

const News = () => {
    return (
        <section className='Section-news'>
            <p className='Section-p'>¡20% de descuento para nuevos clientes!</p>
        </section>
    )
}

const Collection = ({ image ,title, description, price }) => {
    return (
        <>
        <div className='Collection-article'>
            <img src={image} alt={title} className="Collection-img" />
            <h3 className='Collection-title'>{title}</h3>
            <p className='Collection-description'>{description}</p>
            <p className='Collection-price'>${price}</p>
        </div>
        </>
    )
}

Collection.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}