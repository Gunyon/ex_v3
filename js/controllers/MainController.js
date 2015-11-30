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
		var data_converted = getDataFromXML(data);
		$scope.all_data = data_converted.allData;
		$scope.all_curr = data_converted.allCurr;
		$scope.main_curr = data_converted.mainCurr;
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
		if (event) {
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