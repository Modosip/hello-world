function createCar() {
    var brands = ["VAZ", "VOLVO", "BMW", "FORD","Ferrari"];
    var models = ["S500", "Corsar", "Smarty", "Bravo", "STAR"];
    var colors = ["red", "blue", "yellow", "black", "white"];
    var engineValues = [0.8, 1.6, 2.0, 2.5, 3.0, 3.6, 5, 7.8];
    var engineHPs = [20, 50, 100, 150, 175, 200, 220, 250, 290, 350];
    var stylies = ["Pickup", "Sedan", "HotHatch", "Truck", "Crossover", "FULL 4x4", "Bus"];
    var years =  [1900, 1920, 1940, 1960, 1980, 1999]

    var rand1 = Math.floor(Math.random() * brands.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * colors.length);
    var rand4 = Math.floor(Math.random() * engineValues.length);
    var rand5 = Math.floor(Math.random() * engineHPs.length);
    var rand6 = Math.floor(Math.random() * stylies.length);
    var rand7 = Math.floor(Math.random() * years.length);

    var car = {
        brand : brands[rand1],
        model : models[rand2],
        color : colors[rand3],
        engineValue : engineValues[rand4],
        engineHP : engineHPs[rand5] + Math.floor(Math.random()*30),
        style : stylies[rand6],
        year : years[rand7] + Math.floor(Math.random()*20)
    };
    return car;
}

function showCar(car) {
    document.write ("<p><h4>" + car.brand + " " + car.model + " " + car.style + "</h4> </p>");
    document.write ("<h5> Двигатель " + car.engineValue + "л " + car.engineHP + " л.с.<br>");
    document.write ("Цвет: " + car.color + "<br>");
    document.write ("Год выпуска: " + car.year + "<br> </h5>");
}
var numberCars = prompt("How much does cars you want?", 1);
for (var i = 0; i<numberCars; i++) {
showCar (createCar());
}