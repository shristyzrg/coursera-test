(function(){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.dishes = ""
  $scope.message = ""
  $scope.myMessageColor = ""
  $scope.myBorderColor = ""

$scope.showMessage = function(dishes) {
 if(dishes.length == 0){
     $scope.message = "Please enter data first";
     $scope.myMessageColor = {"color":"red"};
     $scope.myBorderColor = {"border-color":"red"}
     return
   }
   
    var my_dishes = dishes.split(",")

    if(my_dishes.length <= 3) {
      $scope.message = "Enjoy!";
      $scope.myMessageColor = {"color":"green"};
      $scope.myBorderColor = {"border-color":"green"};
    }
    else {
      $scope.message = "Too much!"
      $scope.myMessageColor = {"color":"green"};
      $scope.myBorderColor = {"border-color":"green"};
    }
  };

};

})();
