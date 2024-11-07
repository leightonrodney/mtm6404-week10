import { NavLink } from 'react-router-dom';

export const Header = () => {
    return(
        <nav className='nav-menu'>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
        </nav>
    );
}