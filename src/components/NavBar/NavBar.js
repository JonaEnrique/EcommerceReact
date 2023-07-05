import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className="NavBar">
            <Link to="/" className='CustomLink'>
                <h3>Ecommerce</h3>
            </Link>
            <NavLink to={"/category/pantalones"} className={({ isActive }) => isActive ? "ActiveOption CustomNavLinkActive" : "Option CustomNavLinkNoActive"}>Pantalones</NavLink>
            <NavLink to={"/category/remeras"} className={({ isActive }) => isActive ? "ActiveOption CustomNavLinkActive" : "Option CustomNavLinkNoActive"}>Remeras</NavLink>
            <CartWidget />
        </nav >
    )

}

export default NavBar