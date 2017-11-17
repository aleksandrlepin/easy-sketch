function Header (props) {
    return (
        <header class="header">
            <div class="header__container">
                <div class="logo">
                    <p>&#60; &#8260; &#62;</p>
                </div>
                <nav>
                    <ul class="menu">
                        <li>
                            <a class="menu__item menu__item--active" href="#">Home</a>
                        </li>
                        <li>
                            <a class="menu__item" href="#">About</a>
                        </li>
                        <li>
                            <a class="menu__item" href="#">Skills</a>
                        </li>
                        <li>
                            <a class="menu__item" href="#">Contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="caption">
                <h1>Name Surname</h1>
                <p>Front-end developer</p>
            </div>
        </header>
    );
}
