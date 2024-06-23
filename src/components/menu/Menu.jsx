import { useState } from 'react'
import './Menu.css'
//import { products } from '../../fakeapi/data.json'

export const Header = () => {
    return (
        <header className='Header'>
            <div className='Header-wrapper'>
                <Logo />
                <Menu />
            </div>
        </header>
    )
}

const Logo = () => {
    return (
        <h1 className='Header-h1'>MiTienda</h1>
    )
}

const Menu = () => {
    return (
        <nav className='Header-nav'>
            <ul className='Header-ul'>
                <li className='Header-li'>INICIO</li>
                <li className='Header-li'>CATEGORÍAS</li>
                <li className='Header-li'>OFERTAS</li>
                <li className='Header-li'>CONTACTO</li>
            </ul>
            <Buscador />
            <Iconos />
        </nav>
    )
}

const Buscador = () => {
    
    const [ search, setSearch ] = useState("")

    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    /*const results = !search ? products : products.filter((dato) => dato.title.toLowerCase().includes(search.toLocaleLowerCase()))*/

    return (
        <input value={search} onChange={searcher} type="text" className="Header-search" placeholder="Buscar productos"></input>
    )
}

const Iconos = () => {
    return (
        <div className="Header-icons">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-user"></i>
        </div>
    )
}

