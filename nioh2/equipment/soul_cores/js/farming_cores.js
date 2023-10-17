/* JavaScript for farming_cores.html */


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
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
    let current_table = document.getElementById(current_table_id);
    let switching = true;
    let i, rows;
    let ele1, ele2;
    let should_switch;

    // loop will continue until all of the switching has been done
    while (switching) {
        // we start by saying no switching is done
        switching = false;
        rows = current_table.rows;
        // rows is an array containing all fo the rows of the current_table

        // loop through all of the rows of the table except for the first row, the first row is the header for the table
        // i needs to be global within the function so that the for loop and the if statement can use the current index
        for (i = 1; i < (rows.length - 1); i++) {
            // start by saying that should_switch is false
            should_switch = false;

            // get the 2 elements we want to compare for the swap
            ele1 = rows[i].getElementsByTagName("TD")[0];
            ele2 = rows[i + 1].getElementsByTagName("TD")[0];

            // check to see if the 2 rows should be swapped
            if (ele1.innerText.toLowerCase() > ele2.innerText.toLowerCase()) {
                // if the rows should be swapped, set the should_switch to true and break out of the loop
                should_switch = true;
                break;
            }
        }

        // if should_switch has been marked, we swap the rows, and then mark switching to true
        if (should_switch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);

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


function refresh_location() {
    // refresh the window at the current location
    window.location.reload();
}
