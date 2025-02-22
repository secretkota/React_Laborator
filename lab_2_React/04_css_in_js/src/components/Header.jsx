export default function Header() {
    return (
        <header className="header">
            <div className="header__logo">Logo</div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li className="header__nav-item">Main</li>
                        <li className="header__nav-item">About</li>
                        <li className="header__nav-item">Login</li>
                    </ul>
                </nav>
        </header>
    )
}