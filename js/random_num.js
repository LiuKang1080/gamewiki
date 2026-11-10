/*
Randomly generate a number between 1 and 11, each number representing a weapon:
    1 Sword
    2 Dual Swords
    3 Spear
    4 Axe
    5 Kusarigama
    6 Odachi
    7 Tonfa
    8 Hatchets
    9 Switchglaive
    10 Splitstaff
    11 Fists

    - Math.random() returns a number between 0 and 1, we multiply this by the upper limit of the number range. In our example we
        will multiply by 11.
*/


function generate_rand_num(limit) {
    /*
    ==========
    Parameters:
        - [num] limit: This is the upper limit, the total number of weapons we have.

    ==========
    Return:
        - [none] console.log().
    */

    // initialize variables:
    let num;
    let temp;
    let arr = ["sword", "dual swords", "spear", "axe", "kusarigama", "odachi", "tonfa", "hatchets", "switchglaive", "splitstaff", "fists"];

    // loop 2 times to generate 2 weapons:
    for (let x = 0; x < 2; x++) {
        // iteration 1:
        if (x === 0) {
            // generate a random number
            num = Math.floor(Math.random() * (limit));
            temp = num;

            // print (number + 1) and the name of the weapon name from the array
            console.log(num+1 + " :" + arr[num]);

        } else {
        // iteration 2:
            label: while(true) {
                // generate a random number
                num = Math.floor(Math.random() * (limit));

                if (num === temp) {
                    continue label;
                } else {
                    break;
                }
            }

            // print (number + 1) and the name of the weapon name from the array
            console.log(num+1 + " :" + arr[num]);
        }
    }
}


// call and print the result of rand function
generate_rand_num(11);
