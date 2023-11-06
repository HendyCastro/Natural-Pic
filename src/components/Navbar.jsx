import { NavLink } from "react-router-dom";

export default function Navbar(){
    return (
      <nav className="d-flex justify-content-center align-items-center gap-4 bg-success">
        <NavLink to="/" className="text-decoration-none text-white">Home</NavLink>
        
        <NavLink to="/favorites" className="text-decoration-none text-white">Favoritos</NavLink>
      </nav>
    );
}