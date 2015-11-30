var getCurrentDate = function() {
	var d = new Date(),
			dd = d.getDate(),
			mm = d.getMonth() + 1,
			yyyy = d.getFullYear();
	return (dd < 10 ? '0' + dd : dd) + '.' + (mm < 10 ? '0' + mm : mm) + '.' + yyyy;
}

// transform XML to object
var getDataFromXML = function(xml) {
	var tmp, allData = {},
			allCurrencies = [], mainCurrencies = [],
			cc, nom, name, val;
			mainVArr = ['EUR', 'USD', 'RON', 'GBP', 'RUB', 'UAH'];
	allData.MDL = { CharCode: "MDL", Nominal: 1, Name: "Leu Moldovenesc", Value: 1 };
	$(xml).find("Valute").each(function() {
		cc = $(this).children("CharCode").text();
		nom = $(this).children("Nominal").text();
		name = $(this).children("Name").text();
		val = $(this).children("Value").text();
		tmp = {};
		allData[cc] = {};
		tmp.CharCode = allData[cc].CharCode = cc;
		tmp.Nominal = allData[cc].Nominal = nom;
		tmp.Name = allData[cc].Name = name;
		tmp.Value = allData[cc].Value = val;

		allCurrencies.push(tmp);

		if (mainVArr.indexOf(cc) > -1) {
			mainCurrencies.push(tmp);
		}
	});
	return { allData: allData, allCurr: allCurrencies, mainCurr: mainCurrencies };
}