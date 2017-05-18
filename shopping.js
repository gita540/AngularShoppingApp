(function(){
 var app =  angular.module("app",[]);
 app.controller("myController",function($scope){
   
   
   $scope.products = ["Milk","coffee","tea","abc"];
   
   $scope.addItem = function(){

   	$scope.errorTxt =  '';


   	if($scope.products.indexOf($scope.add ) == -1 ){

   		$scope.products.push($scope.add);
     	$scope.add =  " ";
     

   	} else{

   		$scope.errorTxt = " This item is already exits  in your list"
   	}
     
   };
   $scope.remove =  function(index){
     $scope.products.splice(index,1);
   }
   
   
 });

})();

