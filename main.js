// document.getElementById('burger').addEventListener('click', () => {
//     document.getElementById('sliding-menu').classList.add('active');
//     console.log('hiii');
// })
var otherItems = document.querySelectorAll("body > div:not(.menu)");
var menucopy = document.getElementById('menu-copy');

var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var content1 = document.getElementById('content1');
var content2 = document.getElementById('content2');
var content3 = document.getElementById('content3');




//Mobile Mode Starts

document.getElementById('burger').addEventListener('click', activate);
function activate() {
    document.getElementById('sliding-menu').classList.add('active');
    menucopy.classList.add('activecopy');
    document.getElementById('burger').classList.add('disappear');
    document.getElementById('navbar').classList.add('fade');


    //VERY IMPORTANT (use if needed)
    //Fades the other elements
    //for (var i = 0; i < otherItems.length; ++i) {
    //    otherItems[i].classList.add('fade');
    //}



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


    //Unfades the other elements
    for (var i = 0; i < otherItems.length; ++i) {
        otherItems[i].classList.remove('fade');
    }


    menucopy.classList.remove('activecopy');
}

menucopy.addEventListener('click', deactivate);
function deactivate() {
    document.getElementById('sliding-menu').classList.remove('active');
    document.getElementById('burger').classList.remove('disappear');
    document.getElementById('navbar').classList.remove('fade');


    //Unfades the other elements
    for (var i = 0; i < otherItems.length; ++i) {
        otherItems[i].classList.remove('fade');
    }


    menucopy.classList.remove('activecopy');
}

//Mobile Mode ends



//About Me Page Animation Starts

option1.addEventListener('click', () => {
    content2.classList.add('disappear');
    content3.classList.add('disappear');
    content1.classList.remove('disappear');
    option1.classList.add('highlighted');
    option2.classList.remove('highlighted');
    option3.classList.remove('highlighted');
})
option2.addEventListener('click', () => {
    content1.classList.add('disappear');
    content3.classList.add('disappear');
    content2.classList.remove('disappear');
    option2.classList.add('highlighted');
    option1.classList.remove('highlighted');
    option3.classList.remove('highlighted');
})
option3.addEventListener('click', () => {
    content1.classList.add('disappear');
    content2.classList.add('disappear');
    content3.classList.remove('disappear');
    option3.classList.add('highlighted');
    option2.classList.remove('highlighted');
    option1.classList.remove('highlighted');
})

//About Me Page Animation Ends
