import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/">
                <h3>Ecommerce</h3>
            </Link>
            <div className="Categories">
                <NavLink to={"/category/celulares"} className={ ({isActive}) => isActive ? "ActiveOption" : "Option" }>Celulares</NavLink>
                <NavLink to={"/category/2"} className={ ({isActive}) => isActive ? "ActiveOption" : "Option" }>Category 2</NavLink>
                <NavLink to={"/category/3"} className={ ({isActive}) => isActive ? "ActiveOption" : "Option" }>Category 3</NavLink>
            </div>
            <CartWidget />
        </nav>
    )

}

export default NavBar