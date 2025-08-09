/*
Randomly generate a number between 1 and 11, each number representing a weapon from Nioh 2:
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

    - Math.random() returns a number between 0 and 1, we multiply this by the upper limit (not including that number) of the
        number range. In our example we will multiply by 12.
*/


function generate_rand_num(limit) {
    /*
    Generate a random number from 1 to the upper limit provided.
    
    ==========
    Parameters: 
        - [num] limit: This is the upper limit, we will add 1 to this because Math.random() is excluding the upper limit.

    ==========
    Return: 
        - [none] console.log().
    */
    // initialize variables
    let num = 0;

    // labeled statement
    label: while(true) {
        num = Math.floor(Math.random() * (limit + 1));
        
        if (num === 0) {
            continue label;
        } else {
            break;
        }
    }

    return num;
}


// call rand function
console.log(generate_rand_num(11));
