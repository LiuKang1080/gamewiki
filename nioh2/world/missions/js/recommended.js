/* JavaScript for recommended.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function region1() {
    let element = document.getElementById("region1");
    element.scrollIntoView();
}

function region2() {
    let element = document.getElementById("region2");
    element.scrollIntoView();
}

function region3() {
    let element = document.getElementById("region3");
    element.scrollIntoView();
}

function region4() {
    let element = document.getElementById("region4");
    element.scrollIntoView();
}

function region5() {
    let element = document.getElementById("region5");
    element.scrollIntoView();
}

function region6() {
    let element = document.getElementById("region6");
    element.scrollIntoView();
}

function region7() {
    let element = document.getElementById("region7");
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
