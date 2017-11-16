'use strict';

const data = [
    { name: "HTML5", level: 8},
    { name: "CSS3", level: 5},
    { name: "JavaScript", level: 10},
    { name: "ReactJS", level: 8 },
    { name: "AngularJS", level: 8 },
];


function LevelDiv(props) {
    let levelDiv = [];
    // props.level = props.level;
    for (let j = 0; j < 11; j++) {
        if (j <= data[props.level].level) {
            levelDiv.push(
                <div class="level__item level__item--dark"></div>
            )
        } else {
            levelDiv.push(
                <div class="level__item"></div>
            )
        }
    }
    return (
        <div class="level">{levelDiv}</div>
    )
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
        )
    }
    return (
        <ul>{listItems}</ul>
    )
}

ReactDOM.render(<Ul />, document.getElementById('root'));
