var calc=angular.module('calc',[]);

calc.controller('myController',function($scope,$http,$window)
		{
	$scope.exampleInputName2="";
	$scope.hasResult = true;
	//var exp="";
	
	
	//$scope.itinerary=[];
	$scope.submit = function() {
		console.log($scope.exampleInputName2);
		$http({
			method : "POST",
			url : '/calculate',
			data : {
				"exp" : $scope.exampleInputName2
			}
		
		}).success(function(data) {
			//checking the response data for statusCode
			if (data.statusCode=== 200) {
				$scope.exampleInputName2=data.result;
				console.log('inside 200');
			}
			else
				{
				$scope.result=0;
				console.log('inside 400');
				}
				//Making a get call to the '/redirectToHomepage' API
				//window.location.assign("/homepage"); 
		}).error(function(error) {
			$scope.validlogin = true;
			$scope.invalid_login = true;
		});
	};
	
	$scope.append = function(value)
	{
		$scope.exampleInputName2 = $scope.exampleInputName2+value;
		//exp=$scope.exampleInputName2;
		
	};
	
	
		});