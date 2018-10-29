function whatChoose() {
    var choice = Number(prompt("Make your choice: 1-New Cars or 2-Planets", 1));
      if (choice < 1 || choice > 2) {
            alert("Please enter a valid number!");
      }        
        return choice;
    }
var variant = ["New cars", "Planet"];
var choose = variant [whatChoose+1];
