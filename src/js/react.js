'use strict';

const data = [
    { name: "HTML5", level: 8},
    { name: "CSS3", level: 5},
    { name: "JavaScript", level: 10},
    { name: "ReactJS", level: 8 },
    { name: "AngularJS", level: 8 },
];

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

function About (props) {
    return (
        <section class="content">
            <h2>About</h2>
            <div class="about">
                <article class="about__goals">
                    <h3>Goals</h3>
                    <p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum. </p>
                </article>
                <article class="about__dreams">
                    <h3>Dreams</h3>
                    <p>Lorem ipsum dolor sit amet, ac erat dolor quisque magna consectetur leo, pede nec phasellus praesent adipiscing. Nullam diam magna at mauris amet, non ut urna a commodo. Donec vivamus semper nisi velit, proin id turpis, vehicula amet nullam convallis adipiscing ut sit, sit viverra. Duis interdum eu eu sodales nec ut, non nibh accumsan eleifend. Purus ut vitae sapien dui duis dolores, porttitor tempus nascetur id ut, integer ut dignissim harum. </p>
                </article>
            </div>
        </section>
    );
}

function LevelDiv(props) {
    let levelDiv = [];
    for (let j = 0; j < 11; j++) {
        if (j <= data[props.level].level) {
            levelDiv.push(
                <div class="level__item level__item--dark"></div>
            );
        } else {
            levelDiv.push(
                <div class="level__item"></div>
            );
        }
    }
    return (
        <div class="level">{levelDiv}</div>
    );
}

function Ul(props) {
    let listItems = [];
    for (let i = 0; i < data.length; i++) {
        listItems.push(
            <li class="skills__item">
                <span>{data[i].name}</span>
                <div class="level">
                    <LevelDiv level={i} />
                </div>
            </li>
        );
    }
    return (
        <section class="content">
            <h2>Skills</h2>
            <ul class="skills">{listItems}</ul>
        </section>
    );
}

function Contacts (props) {
    return (
        <section class="content">
            <h2>Contact</h2>
            <div class="contacts">
                <ul>
                    <li><span>Phone number:</span></li>
                    <li>+38066-66-66-666</li><br />
                    <li><span>Email:</span></li>
                    <li>mail@gmail.com</li><br />
                    <li><span>Skype:</span></li>
                    <li>mySkypeAcc</li><br />
                </ul>
                <form class="contacts__message" action="/" method="post">
                    <input type="text" name="user" placeholder="Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <textarea name="msg" placeholder="Send a message"></textarea>
                    <div class="btn-holder">
                        <button type="submit" name="submit">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
}

function Footer (props) {
    return (
        <footer>
            <ul>
                <li><span>Mobile:</span> +38066-66-66-666</li>
                <li><span>Email:</span> mail@gmail.com</li>
                <li><span>Skype:</span> mySkypeAcc</li>
            </ul>
            <div class="logo logo--bottom">&#60; &#8260; &#62;</div>
        </footer>
    );
}

function Main (props) {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <About />
                <Ul />
                <Contacts />
            </main>
            <Footer />
        </div>
    );
}

ReactDOM.render(<Main />, document.getElementById('root'));
