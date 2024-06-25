import './Content.css'
import data from '../../fakeapi/data.json'
import PropTypes from 'prop-types';

function Content({ filtro }) {
    const productsFiltrados = data.filter(
        (product) => product.title.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
        <>
        <News />
        <div className='Collection-slide'>
            {   productsFiltrados.map( product =>
                    <Collection
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
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

export default Content;