bark("rover", "23");
bark("spot", 13, 0);
bark("spike", 52);
bark("lady", 17);

function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF")
    } else {
        console.log(name + " says woof woof")
    }
}