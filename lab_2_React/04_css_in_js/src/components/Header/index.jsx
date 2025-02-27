import { HeaderElement, HeaderLogo, HeaderNavList } from "./Header.styled"

export default function Header() {
    return (
        <HeaderElement>
            <HeaderLogo>Logo</HeaderLogo>
            <HeaderNavList>
                <a href=""><button>Main</button></a>
                <a href=""><button>About</button></a>
                <a href=""><button>Login</button></a>
            </HeaderNavList>
        </HeaderElement>
    )
}