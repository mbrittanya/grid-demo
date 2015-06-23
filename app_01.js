var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', function($scope){
	$scope.message = "Calculator";
	$scope.num1 = 0; 
	$scope.total = 0;
	$scope.equals = 0;
	$scope.addSub = false;

	$scope.list = function(number){
		if(isNaN($scope.total)){
			$scope.total = 0;
		}
		$scope.total = $scope.total * 10 + number;
	};

	$scope.calc = function(type){
		switch(type){
			case "add":
				if($scope.addSub === false){
					$scope.addSub = true;
					$scope.num1 = $scope.total;
					$scope.total = "+";
				}else{
					$scope.equals = $scope.num1 + $scope.total;
					$scope.num1 = 0;
					$scope.total = "+";
				}
				break;


		}
	};



}]);

