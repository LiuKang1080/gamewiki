// JavaScript for martial_arts.html


/* 
========== ========== ========== ========== ==========
Table of Contents JavaScript 
========== ========== ========== ========== ==========
*/
function straight_sabre() {
    let element = document.getElementById("straight_sabre");
    element.scrollIntoView();
}

function sword() {
    let element = document.getElementById("sword");
    element.scrollIntoView();
}


function credits() {
    let element = document.getElementById("credits");
    element.scrollIntoView();
}


/* 
========== ========== ========== ========== ==========
Sort table JavaScript 
========== ========== ========== ========== ==========
*/
function sort_table(n, event) {
    // declare variables
    let i, x, y;
    let table, rows, switching;
    let shouldSwitch, dir;
    let switchcount = 0;
    let current_table_id

    /*
        - Get the element that clicked, it will be a <th>. 
        - Move to to the top table element with parentNode. 
        - Get the ID of the table itself using parentNode.id
    */
    current_table_id = event.parentNode.parentNode.parentNode.id;
    table = document.getElementById(current_table_id);

    // start with switching is true
    switching = true;
    
    // Set the sorting direction to ascending:
    dir = "asc";
    
    /* Make a loop that will continue until no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;

        /* Loop through all table rows (except the first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;

            /* Get the two elements you want to compare, one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            /* Check if the two rows should switch place, based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                } 
            
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
      
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            // Each time a switch is done, increase this count by 1:
            switchcount ++;

        } else {
            /* If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
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
