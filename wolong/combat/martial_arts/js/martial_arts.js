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

function curved_sabre() {
    let element = document.getElementById("curved_sabre");
    element.scrollIntoView();
}

function glaive() {
    let element = document.getElementById("glaive");
    element.scrollIntoView();
}

function halberd() {
    let element = document.getElementById("halberd");
    element.scrollIntoView();
}

function staff() {
    let element = document.getElementById("staff");
    element.scrollIntoView();
}

function hammer() {
    let element = document.getElementById("hammer");
    element.scrollIntoView();
}

function poleaxe() {
    let element = document.getElementById("poleaxe");
    element.scrollIntoView();
}

function spear() {
    let element = document.getElementById("spear");
    element.scrollIntoView();
}

function slashing_spear() {
    let element = document.getElementById("slashing_spear");
    element.scrollIntoView();
}

function dual_swords() {
    let element = document.getElementById("dual_swords");
    element.scrollIntoView();
}

function dual_sabres() {
    let element = document.getElementById("dual_sabres");
    element.scrollIntoView();
}

function dual_halberds() {
    let element = document.getElementById("dual_halberds");
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
    let x_inner_text;
    let y_inner_text;
    let table, rows, switching;
    let shouldSwitch, dir;
    let switchcount = 0;
    let current_table_id;

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

            /* set what x_inner_text and y_inner_text will be */
            if (n === 0) {
                // if user clicked on the first TD, then get the innet text from the second inner nested child element
                x_inner_text = x.firstElementChild.firstElementChild.innerText;
                y_inner_text = y.firstElementChild.firstElementChild.innerText;
            } else {
                //  else the user clicked on the second TD, get the inner text directly
                x_inner_text = x.innerText;
                y_inner_text = y.innerText;
            }


            /* Check if the two rows should switch place, based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x_inner_text.toLowerCase() > y_inner_text.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                } 
            
            } else if (dir == "desc") {
                if (x_inner_text.toLowerCase() < y_inner_text.toLowerCase()) {
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
