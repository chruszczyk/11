function Phone(model, brand, price, color) {
	this.model = model;
	this.brand = brand;
	this.price = price;
	this.color = color;
}

Phone.prototype.printInfo = function() {
	console.log("The brand of " + this.model + " is " + this.brand + ", the color is " + this.color + " and the price is " + this.price + ".");
};

var iPhone6S = new Phone("iPhone 6S", "Apple", 2000, "silver");
var galaxyS6 = new Phone("Galaxy S6", "Samsung", 2000, "black");
var onePlus = new Phone("OnePlus 1", "OnePlus", 2000, "black");

iPhone6S.printInfo();
onePlus.printInfo();
galaxyS6.printInfo();



