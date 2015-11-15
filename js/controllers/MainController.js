app.controller('MainController', ['$scope', '$http', function($scope, $http) {

	$scope.fromCurrency = "EUR";
	$scope.toCurrency = "MDL";


	$http({
		method  : 'GET',
		url     : 'getData.php?date=' + getCurrentDate(),
		timeout : 10000,
		params  : {},  // Query Parameters (GET)
		transformResponse : function(data) {
				// string -> XML document object
			return $.parseXML(data);
		}
	}).success(function(data) {
		var getJSON = getDataFromXML(data);
		$scope.allValutes = getJSON.all;
		$scope.mainValutes = getJSON.main;
	}).error(function(err) {
		console.log(err);  // log error messagge
	});

	$scope.swap = function() {
		var tmp = $scope.fromCurrency;
		$scope.fromCurrency = $scope.toCurrency;
		$scope.toCurrency = tmp;
	}

	$scope.changeFromCurrency = function(charCode, event) {
		$scope.fromCurrency = charCode;
		if(event){
			event.stopPropagation();
			event.preventDefault();
		}
	}

	$scope.$watch('fromCurrency', function(newValue, oldValue) { setFocusOnFromInput(); });
	$scope.$watch('toCurrency', function(newValue, oldValue) { setFocusOnFromInput(); });

	function setFocusOnFromInput() {
		$("#inputfrom").focus();
	}
}]);