'use strict';

const data = [
    { name: "HTML5", level: 8},
    { name: "CSS3", level: 5},
    { name: "JavaScript", level: 10},
    { name: "ReactJS", level: 8 },
    { name: "AngularJS", level: 8 },
];

// function skillsItems () {
//     return (
//         <li class="skills__item">
//             <span>{props[3]}</span>
//             <div class="level clearfix">
//                 <div class="level__item"></div>
//                 <div class="level__item"></div>
//                 <div class="level__item"></div>
//                 <div class="level__item"></div>
//                 <div class="level__item"></div>
//                 <div class="level__item"></div>
//                 <div class="level__item"></div>
//                 <div class="level__item"></div>
//                 <div class="level__item"></div>
//                 <div class="level__item"></div>
//             </div>
//         </li>
//
//     )
// }

function Skills (props) {
    constructor(props) {
    super(props);
    props.name = data[2].name;
    props.level = data[1].level;    }

    return (
        <section class="content">
            <h2>Skills</h2>
            <ul class="skills">
                <li class="skills__item">
                    <span>{props.name}</span>
                    <div class="level clearfix">
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                    </div>
                </li>
                <li class="skills__item">
                    <span>CSS3</span>
                    <div class="level">
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                    </div>
                </li>
                <li class="skills__item">
                    <span>JavaScript</span>
                    <div class="level">
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                    </div>
                </li>
                <li class="skills__item">
                    <span>ReactJS</span>
                    <div class="level">
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                    </div>
                </li>
                <li class="skills__item">
                    <span>AngularJS</span>
                    <div class="level">
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                        <div class="level__item"></div>
                    </div>
                </li>
            </ul>
        </section>
    );
}

ReactDOM.render(<Skills />, document.getElementById('root'));
