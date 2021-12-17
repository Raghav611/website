// document.getElementById('burger').addEventListener('click', () => {
//     document.getElementById('sliding-menu').classList.add('active');
//     console.log('hiii');
// })
var otherItems = document.querySelectorAll("body > div:not(.menu)");
const menu = document.getElementById('sliding-menu');

document.getElementById('burger').addEventListener('click', activate);
function activate() {
    document.getElementById('sliding-menu').classList.add('active');
    document.getElementById('burger').classList.add('disappear');
    document.getElementById('navbar').classList.add('fade');
    for (var i = 0; i < otherItems.length; ++i) {
        otherItems[i].classList.add('fade');
    }
    // if (menu.classList.contains('active')) {
    //     console.log('active');
    //     document.body.addEventListener('click', (evt) =>{
    //         let targetElement = evt.target;
    //         if (targetElement == menu) {
    //             console.log('inside');
    //         }
    //         else if(targetElement !== menu) {
    //             document.getElementById('sliding-menu').classList.remove('active');
    //             document.getElementById('burger').classList.remove('disappear');
    //             document.getElementById('navbar').classList.remove('fade');
    //             for (var i = 0; i < otherItems.length; ++i) {
    //                 otherItems[i].classList.remove('fade');
    //             }
    //         }
    //     })
    // }
}

document.getElementById('burger-active').addEventListener('click', deactivate);
function deactivate() {
    document.getElementById('sliding-menu').classList.remove('active');
    document.getElementById('burger').classList.remove('disappear');
    document.getElementById('navbar').classList.remove('fade');
    for (var i = 0; i < otherItems.length; ++i) {
        otherItems[i].classList.remove('fade');
    }
}