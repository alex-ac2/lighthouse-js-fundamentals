var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var counter = 0;
while (counter < ingredients.length) {
    console.log(ingredients[counter]);
    counter ++
}
console.log("-------- End of while loop\n");

// Write a for loop that prints out the contents of ingredients:
for (let i = 0; i < ingredients.length; i++) {
    console.log(ingredients[i]);
}
console.log("-------- End of for loop\n");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = 1; i <= ingredients.length; i++) {
    console.log(ingredients[ingredients.length - i]);
}
console.log("-------- End of backwards for loop");
