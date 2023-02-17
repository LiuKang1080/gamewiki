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
    
    Parameters
    ----------
    [none]

    Return
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


/*
========== ========== ==========
Randomly change background image upon page landing / refresh
========== ========== ==========
*/
function change_background() {
    /*
    Function that randomly displayes the background image in the <body> tag of the page.
        - Set up array of paths to the images (picture_array)
        - Generate a random number from 0 to the length of picture_array
        - Construct the final url as a string: "url( picture_array[random_number] )"
        - Set the background-image using the complete_url [document.body.style.backgroundImage = value;]
    
    Parameters
    ----------
    [none]

    Return
    ----------
    [none]
    */

    // Set up an array with images
    let picture_array = [
        './img/nioh2_index_image_1.png',
        './img/nioh2_index_image_2.png',
        './img/nioh2_index_image_3.png',
        './img/nioh2_index_image_4.png',
        './img/nioh2_index_image_5.png',
        './img/nioh2_index_image_6.png',
        './img/nioh2_index_image_7.png',
        './img/nioh2_index_image_8.png'
    ];
    
    // get a random number
    let random_number = Math.floor(Math.random() * picture_array.length);
    
    // construct the URL path for the background-image using the random number
    let complete_url = String("url(" + picture_array[random_number] + ")");

    // change the background image
    document.body.style.backgroundImage = complete_url;
}


// call function to randomly change the background image
change_background();
