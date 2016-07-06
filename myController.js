var app= angular.module('myApp',[]);
app.controller('todoCtrl',function($scope){
	$scope.todoList = [];
	
	$scope.todoAdd = function(){
		$scope.todoList.push({todoText:$scope.todoInput.name,todoDesc:$scope.todoInput.description});
		$scope.todoInput.name="";
		$scope.todoInput.description="";
		};
	
	 $scope.delete = function(x){
	 $scope.todoList.splice(x,1);
	 };
	 });
	 