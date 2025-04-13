import { Link } from "react-router";
import { HeaderElement, LoginBtn, Logo, NavList } from "./Header.style";

/**
 * 
 * Создание хэдера
 * @returns {JSX element} - Headers
 */
export default function Header () {
    return (
        <HeaderElement>
            <Logo>Logo</Logo>
            <NavList>
                <Link to="/"><button>Main</button></Link>
                <Link to="/carList"><button>Car List</button></Link>
            </NavList>
            <a href="/"><LoginBtn>Login</LoginBtn></a>
        </HeaderElement>
    )
}