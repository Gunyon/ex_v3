var getCurrentDate = function() {
	var d = new Date(),
			dd = d.getDate(),
			mm = d.getMonth() + 1,
			yyyy = d.getFullYear();
	return (dd < 10 ? '0' + dd : dd) + '.' + (mm < 10 ? '0' + mm : mm) + '.' + yyyy;
}

// transform XML to object
var getDataFromXML = function(xml) {
	var allVal = {}, mainValute = {}, cc, nom, name, val;
	var mainVArr = ['EUR', 'USD', 'RON', 'GBP', 'RUB', 'UAH'];
	allVal.MDL = { CharCode: "MDL", Nominal: 1, Name: "Leu Moldovenesc", Value: 1 };
	$(xml).find("Valute").each(function() {
		cc = $(this).children("CharCode").text();
		allVal[$(this).children("CharCode").text()] = {};
		// extragem toate datele in masivul allVal
		allVal[cc].CharCode = cc;
		nom = allVal[cc].Nominal = $(this).children("Nominal").text();
		name = allVal[cc].Name = $(this).children("Name").text();
		val = allVal[cc].Value = $(this).children("Value").text();

		if (mainVArr.indexOf(cc) > -1) {
			mainValute[cc] = {};
			mainValute[cc].CharCode = cc;
			mainValute[cc].Nominal = nom;
			mainValute[cc].Name = name;
			mainValute[cc].Value = val;
		}
	});
	return { all: allVal, main: mainValute };
}