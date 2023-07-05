import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>Ecommerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={ "/category/pantalones"} className={ ({isActive}) => isActive ? "ActiveOption" : "Option" }>Pantalones</NavLink>
                <NavLink to={"/category/remeras"} className={ ({isActive}) => isActive ? "ActiveOption" : "Option" }>Remeras</NavLink>
            </div>
            <CartWidget />
        </nav>
    )

}

export default NavBar