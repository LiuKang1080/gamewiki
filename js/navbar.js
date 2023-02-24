/*
========== ========== ==========
JavaScript for Mobile Menu
========== ========== ==========
*/
const initApp = () => {
    /*
    Function initializes the mobile version of the navbar.
        - Get hamburger-button and mobile-menu elements.
        - toggle the "hidden" attribute for mobile-menu.
        - Add event listeners for the toggle.
    
    Parameters:
    ----------
    [none]

    Return:
    ----------
    [none]
    */
    
    // create variables:
    const hamburger_button = document.getElementById("hamburger-button");
    const mobile_menu = document.getElementById("mobile-menu");

    // toggle the menu:
    const toggle_menu = () => {
        mobile_menu.classList.toggle('hidden');
        mobile_menu.classList.toggle('flex');
    }

    // Add event listeners for clicks:
    hamburger_button.addEventListener("click", toggle_menu);
    mobile_menu.addEventListener("click", toggle_menu);
}


// call the initApp function
/*
    - listen to when the full HTML DOM has loaded, then call the initApp function
    - If we try and call the function before the DOM has loaded in the buttons won't exist. Wait for the DOM to fully load, and
        then call the initApp function.
*/
document.addEventListener("DOMContentLoaded", initApp);
