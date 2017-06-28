function Phone (brand, price, color, photo) {
	
  	this.brand = brand;
	this.price = price;
	this.color = color;
    this.photo = photo;
}

Phone.prototype.printInfo = function() {
		console.log("The phone brand is " + this.brand + ", color is " + this.color + ", photo camera is " + this.photo +"px"+ " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver", 13);
var Samsung = new Phone("Galaxy S6", 2000, "pink", 15);
var OnePlus = new Phone("One", 2300, "black", 12);

iPhone6S.printInfo();
Samsung.printInfo();
OnePlus.printInfo();