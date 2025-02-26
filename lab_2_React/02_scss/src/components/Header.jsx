export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">Logo</div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <a href=""><button>Main</button></a>
                        <a href=""><button>About</button></a>
                        <a href=""><button>Login</button></a>
                    </ul>
                </nav>
        </header>
    )
}