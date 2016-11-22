(function() {
"use strict";

angular.module("ShoppingListCheckOff", [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController( ShoppingListCheckOffService) {
	var buyList = this;

	buyList.items = ShoppingListCheckOffService.getItems();


	
	buyList.Alreadybought = function (itemIndex) {
		ShoppingListCheckOffService.Alreadybought(itemIndex);
	};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
   var boughtList = this;
	
	boughtList.items = ShoppingListCheckOffService.setItems();
    
}

 function ShoppingListCheckOffService() {
 	var service = this;
    
    var toBuyitems = [
       { name: "cookies", quantity: 10 },
 { name: "Bread", quantity: 2 },
 { name: "cereal", quantity: 4 },
 { name: "eggs", quantity: 12 },
 { name: "milk", quantity: 3 }
 ];
    
 var boughtItems = []; 

    service.Alreadybought = function(itemIndex) {
       
	   var item = {};

	   if(toBuyitems.length > 0) {
		   item = toBuyitems[itemIndex];
		   toBuyitems.splice(itemIndex, 1);
		   boughtItems.push(item);
	   }
 	};

   service.getItems = function() {
    	
    		return toBuyitems;
 
    };

    service.setItems = function() {
    	return boughtItems;
    };
 	
 }
})();
