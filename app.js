var app = angular.module('app', []);

app.controller('myCtrl', ['$scope', function($scope){
	$scope.message = "Calculator";
	$scope.clearCalc = false;
	$scope.operator = '';
	$scope.total = 0;
	$scope.num1 = 0; 
	$scope.equals = 0;

	$scope.list = function(number){
		if(isNaN($scope.total)){
			$scope.total = 0;
		}
		$scope.total = $scope.total * 10 + number;
	};

	$scope.listEquals = function (){

	}

	$scope.calc = function(type){
		if(isNaN($scope.total)){
			$scope.total = 0;
		}
		if($scope.clearCalc === false){
			$scope.equals = $scope.total;
			$scope.total = type;
			$scope.operator = type;
			$scope.clearCalc = true;
		}else{
			switch($scope.operator){
				case "+":
					$scope.equals = $scope.equals + $scope.total;
					break;
				case "-":
					$scope.equals = $scope.equals - $scope.total;
					break;
				case "*":
					$scope.equals = $scope.equals * $scope.total;
					break;
				case "/":
					$scope.equals = $scope.equals / $scope.total;
					break;
			}
			$scope.operator = type;
			$scope.total = type;
			if(type === "=")
			{
				$scope.total = $scope.equals;
				$scope.clearCalc = false;
				$scope.equals = 0;
			}

		}
		
	};



}]);

