import '../assets/Header.css';


function Main_block() {

    return (
        <>
            <header class="header">
                <div class="container">
                    <div class="menu__row">
                        <div class="menu__logotype">
                            <p class="menu__logotype__text">TetsMAket</p>
                        </div>
                        <ul class="menu__link">
                            <li><a href="#">Main</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Download</a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Main_block