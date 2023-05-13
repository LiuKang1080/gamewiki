/* JavaScript for achievements.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function base() {
    let element = document.getElementById("base");
    element.scrollIntoView();
}

function dlc1() {
    let element = document.getElementById("dlc1");
    element.scrollIntoView();
}

function dlc2() {
    let element = document.getElementById("dlc2");
    element.scrollIntoView();
}

function dlc3() {
    let element = document.getElementById("dlc3");
    element.scrollIntoView();
}

function credits() {
    let element = document.getElementById("credits");
    element.scrollIntoView();
}


/*
========== ========== ========== ========== ==========
Back to top button JavaScript 
========== ========== ========== ========== ==========
*/ 
let back_to_top = document.getElementById("back-to-top-button");
window.onscroll = function() { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
        back_to_top.style.display = "block";
    } else {
        back_to_top.style.display = "none";
    }
}
