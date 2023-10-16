/* JavaScript for cores_list.html */


/* ========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ========== */
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
Sort Table Function
========== ========== ========== ========== ==========
*/
document.querySelector("#sort-button-1").addEventListener("click", async_call);
document.querySelector("#sort-button-2").addEventListener("click", async_call);
document.querySelector("#sort-button-3").addEventListener("click", async_call);
document.querySelector("#sort-button-4").addEventListener("click", async_call);


function sort_table(event) {
    /*
        - We will use event.target.className to get the class name of the object that called this function.
        - We ALWAYS follow the general structure for the sort button's class as: class="sort-button table-id"
        - Here the table id changes depending on the table we are working with, this is the part we want to capture.
        - We take the full class name and split it getting the second class of the button, this will ALWAYS be ID of the table.
        - Once we have the ID of the current table we're working with, we will sort the content within the table alphabettically.
    */
    // declare variables
    let current_table_id = (event.target.className).split(" ")[1];
    let current_tbodies_list = document.getElementById(current_table_id).tBodies;
    // We will get a list of all of the tbodies within the table, We care about the tbodies starting from index 1 and onward.
    // Index 0 in the current_tbodies_list is the header.

    let switching = true;
    let i;
    let ele1, ele2;
    let should_switch;

    // loop will continue until all of the switching has been done
    while (switching) {
        // we start by saying no switching is done
        switching = false;

        // loop through all of the elements in the current_tbody_list except for the first row, the first row is the header for the table
        // i needs to be global within the function so that the for loop and the if statement can use the current index
        for (i = 1; i < (current_tbodies_list.length - 1); i++) {
            // start by saying that should_switch is false
            should_switch = false;

            // get the 2 elements we want to compare for the swap
            ele1 = current_tbodies_list[i];
            ele2 = current_tbodies_list[i + 1];

            // check to see if the 2 rows should be swapped
            if (ele1.innerText.toLowerCase() > ele2.innerText.toLowerCase()) {
                // if the rows should be swapped, set the should_switch to true and break out of the loop
                should_switch = true;
                break;
            }
        }

        // if should_switch has been marked, we swap the rows, and then mark switching to true
        if (should_switch) {
            current_tbodies_list[i].parentNode.insertBefore(current_tbodies_list[i + 1], current_tbodies_list[i]);

            // mark the switch
            switching = true;
        }
    }
}

function resolve_function(event) {
    /*
        - resolve_function is a setTimeout() wrapper function that takes in the sort_table function and returns a promise, the
            promise will be resolved by the async_call() function.
    */
    return new Promise(resolve => {
        // return the promise from calling the setTimeout function
        setTimeout(sort_table(event), 0);
    });
}

async function async_call(event) {
    /*
        - async_call is a wrapper function around the resolve_function():
            async_call(resolve_function(setTimeout(sort_table)))

        - This function uses async await for the implicit promise chain resolution.
    */
    const result = await resolve_function(event);
}


/*
========== ========== ========== ========== ==========
Refresh Window Function
========== ========== ========== ========== ==========
*/
document.querySelector("#refresh-button-1").addEventListener("click", refresh_location);
document.querySelector("#refresh-button-2").addEventListener("click", refresh_location);
document.querySelector("#refresh-button-3").addEventListener("click", refresh_location);
document.querySelector("#refresh-button-4").addEventListener("click", refresh_location);


function refresh_location() {
    // refresh the window at the current location
    window.location.reload();
}
