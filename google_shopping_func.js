//load products.json
var data = require("./products.json")

//define getItemsCount function
//accepts full item data
//returns the length of the items array
var getItemsCount = function(itemData){
	return itemData.items.length;
};

//output item count using the getItemsCount function
console.log('Item Count: ' + getItemsCount(data));

//create your answer in this file.
//the above is just provided as a simple example.

var getItems = function(itemData) {
	return itemData.items;
}


//functions listed below return an array for display of search type if a third argument, 'display'
//is passed in to the function. If the third value is left blank, then it will return an array with all of the
//object data from the search typ in an array.
var getItemsByBrand = function(array, brand, ret) {
	var returnArray = [];
	var displayArray = [];
	for ( var i = 0; i<array.length; i++) {
		if (array[i].product.brand.toLowerCase() === brand.toLowerCase()) {
			displayArray.push(array[i].product.title);
			returnArray.push(array[i]);
		}
	}
	if (ret === 'display') {
		return displayArray;
	} else {
		return returnArray;
	}
}

var getItemsByAuthor = function(array, author, ret) {
	var returnArray = [];
	var displayArray = [];
	for ( var i = 0; i<array.length; i++) {
		if (array[i].product.author.name.toLowerCase().indexOf(author.toLowerCase()) !== -1) {
			displayArray.push(array[i].product.title);
			returnArray.push(array[i]);
		}
	}
	if (ret === 'display') {
		return displayArray;
	} else {
		return returnArray;
	}
}

var getAvailableProducts = function(array, ret) {
	var returnArray = [];
	var displayArray = [];
	for ( var i = 0; i<array.length; i++) {
		if (array[i].product.inventories[0].availability === "inStock") {
			displayArray.push(array[i].product.title);
			returnArray.push(array[i]);
		}
	}
	if (ret === 'display') {
		return displayArray;
	} else {
		return returnArray;
	}
}

var sortByPrice = function(array, order) {
	var priceArray = [];

	for (var i = 0; i < array.length; i++) {
		priceArray.push([array[i].product.title, array[i].product.inventories[0].price]);
	}

	// console.log(priceArray);

	if (order === "lowFirst") {
		return priceArray.sort(function(a,b) {return a[1] - b[1];});
	} else {
		return priceArray.sort(function(a,b) {return b[1] - a[1];});
	}

}


var bigData = getItems(data);
// console.log(bigData);
console.log(getItemsByBrand(bigData, "Sony", 'display'));
console.log(getItemsByAuthor(bigData, "ebay", 'display'));
console.log(getAvailableProducts(bigData, 'display'));
console.log(getItemsByAuthor((getItemsByBrand(bigData,"Sony")), "newegg.com", 'display'));
console.log(getAvailableProducts(getItemsByBrand(bigData, "Sony"), 'display'));
console.log(sortByPrice(bigData, 'lowFirst'));