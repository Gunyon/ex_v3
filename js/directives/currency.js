app.directive('currencyItem', function() {
	return {
		restrict: 'E', // available: 'A' attribute, 'C' class, 'M' comment, 'E' element
		scope: {
			allCurrencies: '=',
			currency: '=currencyData',
			eventNg: '=',
			fromVal: '=',
			fromCurrency: '=',
			changeFromCurrency: '&changeOnClick'
		},
		replace: true,
		templateUrl: 'js/directives/currency.html'
	};
});