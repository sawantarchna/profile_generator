const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Ask for their name
rl.question("What's your name? Nicknames are also acceptable :)! ", (name) => {
  console.log(`Thank you, and nice to meet you ${name}!`);
  // Ask for their favorite activity
  rl.question("What's an activity you like doing?", (activity) => {
      console.log(`Thank you, ${activity} sounds like fun! `);
      // Ask for favorite music
      rl.question("What kind of music do you listen to? ", (music) => {
        console.log(`Thank you, ${music} sounds good! `);
        // Ask for favorite meal
        rl.question("What favorite meal of the day? ", (meal) => {
          console.log(`Thank you, I love ${meal} too! `);
          // Ask for favorite food
          rl.question("What's your favorite kind of food? ", (food) => {
            console.log(`Thank you,${food} sounds good right about now! `);
            // Ask for favorite sport
            rl.question("What's your favorite sport? ", (sport) => {
              console.log(`Thank you,${activity} sounds exciting! `);
              // Ask for super power
              rl.question("If you had a super power, what would it be? ", (supPower) => {
                console.log(`Thank you,${supPower} sounds like fun! `);

              // Output message using stored variables from question
              console.log(`Hi there! This is ${name}. I love ${activity} during the day, while listening to some ${music}. ${name} also loves ${meal}, especial if it's ${food}! Sometimes ${name} likes to watch or play ${sport} and imagine they had ${supPower}.`)

              rl.close();
            })  // super power
        }) // sport
      }) // food
    }) // meal
  }) // music
}) // closer
}); // name 