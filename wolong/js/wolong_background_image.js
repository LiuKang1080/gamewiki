/*
========== ========== ==========
Randomly change background image upon page landing / refresh
========== ========== ==========
*/
function change_background_wolong() {
    /*
    Function that randomly displayes the background image in the <body> tag of the page.
        - Set up array of paths to the images (picture_array)
        - Generate a random number from 0 to the length of picture_array
        - Construct the final url as a string: "url( picture_array[random_number] )"
        - Set the background-image using the complete_url [document.body.style.backgroundImage = value;]
    
    Parameters:
    ----------
    [none]

    Return:
    ----------
    [none]
    */

    // Set up an array with images
    let picture_array = [
        './img/wolong_index_image_1.png',
        './img/wolong_index_image_2.png',
        './img/wolong_index_image_3.png'
    ];
    
    // get a random number
    let random_number = Math.floor(Math.random() * picture_array.length);
    
    // construct the URL path for the background-image using the random number
    let complete_url = String("url(" + picture_array[random_number] + ")");

    // change the background image
    document.body.style.backgroundImage = complete_url;
}


// call function to randomly change the background image
change_background_wolong();
