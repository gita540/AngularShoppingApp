(function(){
 var app= angular.module("app",[]);
 app.controller("myController",function($scope){
   
   
   $scope.products=["Milk","coffee","tea","abc"];
   
   $scope.addItem= function(){
     $scope.products.push($scope.add);
     $scope.add="";
     
   };
   $scope.remove=function(index){
     $scope.products.splice(index,1);
   }
   
   
 });

})();

