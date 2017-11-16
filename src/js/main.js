'use strict';

function getMsg () {
    const name = document.querySelector('.contacts__message [name="user"]');
    const mail = document.querySelector('.contacts__message [name="email"]');
    const msg = document.querySelector('.contacts__message [name="msg"]');
    return function (event) {
        event.preventDefault();
        console.log('name: ', name.value);
        console.log('mail: ', mail.value);
        console.log('msg: ', msg.value);
    }
}

const logMsg = getMsg();

window.addEventListener('submit', logMsg);
