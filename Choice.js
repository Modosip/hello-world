function whatChoose() {
    var tryAgain = false;
    while (!tryAgain) {
        var choice = prompt("Make your choice: 1-New Cars or 2-Planets", 1);
        if (choice < 1 || choice > 2 || isNaN(choice)) {
            alert("Please enter a valid number!");
        } else tryAgain = true;
    }
    return choice;
}

function init() {
    var variantTitle = ["New cars", "Planet"];
    var variantGlava = ["Новая машина", "Планета"];
    var variantFunction = ["makecar.js", "Planet.js"];
    var choose = whatChoose() - 1;
    var go1 = document.getElementById("title");
    var go2 = document.getElementById("glava");
    var go3 = document.getElementById("function");
    go1.innerHTML = variantTitle[choose];
    go2.innerHTML = variantGlava[choose];
    go3.innerHTML = variantFunction[choose];
}
window.onload = init;
