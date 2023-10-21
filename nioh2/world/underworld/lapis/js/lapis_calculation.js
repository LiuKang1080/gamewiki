/*
Lapis Lazuli - Blessing of the Departed Table:
    - 60 Total stats to get (0 / 60).
    - The cost of the first stat to get is 10
    - Each point put into the stat increases the cost by 1. 
    -ex) 0/60 points cost 10 lapis, 1/60 = 11 lapis cost, 2/60 = 12 lapis cost
    - Find the total number of lapis required to max out the entire full stat

Full Blessings of the Departed Table:
    - 0 / 60: Loot +Value Modifier - Starting cost = 10
    - 0 / 5: Effect of Jizo Blessing: Uncommon Strength - Starting cost = 20
    - 0 / 5: Effect of Jizo Blessing: Uncommon Defense - Starting cost = 20
    - 0 / 5: Effect of Jizo Blessing: Uncommon Mercy - Starting cost = 20
    - 0 / 5: Spectral Salve Limit - Starting cost = 20
    - 0 / 5: Spectral Salve Potency - Starting cost = 20
    - 0 / 20: Ethereal Drop Rate
    - 0 / 5: Higher Item Level Drop Rate
*/


function total_lapis(iterations, cost, cost_increment=1) {
    /*
        - iterations: The number of total iteration the loop needs to run.
        - cost: The initial starting cost of Lapis.
        - cost_increment [defualt to 1]: The increase the Lapis cost by this amount on every iteration.
    */
    let total_lapis = 0;
    
    for (let i = 0; i <= iterations; ++i) {
        console.log("Iteration#: " + i + ", Lapis cost this iteration: " + cost + "\n");
        
        // increment the total_lapis count by the cost
        total_lapis += cost;

        // increase the cost by the cost_increment
        cost += cost_increment;

        console.log("Total Lapis cost: " + total_lapis + "\n");
        console.log("=== === \n");
    }
}


total_lapis(5, 100, 20);


/*
Total Lapis required to max out a stat in the Blessings of the Departed Table:
    - 2,035 + 900 = 2,935: Loot +Value Modifier (increases by +1 from 0 to 54, +100(increasing +20) from 55 to 60)
    - 420: Effect of Jizo Blessing: Uncommon Strength
    - 420: Effect of Jizo Blessing: Uncommon Defense
    - 420: Effect of Jizo Blessing: Uncommon Mercy
    - 420: Spectral Salve Limit
    - 420: Spectral Salve Potency
    - 4,620: Ethereal Drop Rate
    - 420: Higher Item Level Drop Rate

    - (420 * 6) = 2,520
    - 2,520 + 2,935 + 4,620 = 10,075
    - 10,075 Lapis Lazuli required to max out the entire Blessings of the Departed table.
*/
