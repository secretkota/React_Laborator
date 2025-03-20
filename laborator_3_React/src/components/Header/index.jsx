import { HeaderElement, LoginBtn, Logo, NavList } from "./Header.style";

export default function Header () {
    return (
        <HeaderElement>
            <Logo>Logo</Logo>
            <NavList>
                <a href="/"><button>Main</button></a>
                <a href="/"><button>Car List</button></a>
            </NavList>
            <a href="/"><LoginBtn>Login</LoginBtn></a>
        </HeaderElement>
    )
}