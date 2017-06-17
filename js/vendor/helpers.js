var getCurrentDate = function() {
	var d = new Date(),
			dd = d.getDate(),
			mm = d.getMonth() + 1,
			yyyy = d.getFullYear();
	return (dd < 10 ? '0' + dd : dd) + '.' + (mm < 10 ? '0' + mm : mm) + '.' + yyyy;
};

// transform XML to object
var getDataFromXML = function(xml) {
	var cc, allData = {},
			allCurrencies = [];
			mainVArr = ['EUR', 'USD', 'RON', 'GBP', 'RUB', 'UAH'];
	allData.MDL = { CharCode: "MDL", Nominal: 1, Name: "Leu Moldovenesc", Value: 1 };
	$(xml).find("Valute").each(function() {
		cc = $(this).children("CharCode").text();
		allData[cc] = {
			CharCode: cc,
			Nominal: $(this).children("Nominal").text(),
			Name: $(this).children("Name").text(),
			Value: $(this).children("Value").text(),
			isMain: mainVArr.indexOf(cc) > -1 ? 'true' : 'false'
		};
		allCurrencies.push(allData[cc]);
	});
	return { allData: allData, allCurr: allCurrencies };
};
