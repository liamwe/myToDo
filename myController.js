var app= angular.module('myApp',[]);
app.controller('todoCtrl',function($scope){
	/* empty list */
	$scope.todoList = [];
	
	/* Add Items to the list function then resetting the inputs to blank*/
	$scope.todoAdd = function(){
		$scope.todoList.push({todoText:$scope.todoInput.name,todoDesc:$scope.todoInput.description});
		$scope.todoInput.name="";
		$scope.todoInput.description="";
		};
	/* Delete Items from the list by taking the Index and removing one Item at that point*/
	 $scope.delete = function(x){
	 $scope.todoList.splice(x,1);
	 };
	 });
	 