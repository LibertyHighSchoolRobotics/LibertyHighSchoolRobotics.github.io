---
---
(function(holidays){
	var urlPrefix = '{{ site.baseurl }}/res/seasonal/';
	var now = new Date();
	var month = now.getMonth() + 1, day = now.getDate();
	for(var i=holidays.length-1; i>=0; --i){
		var holiday = holidays[i];
		var afterStart = month >= holiday.start[0] && day >= holiday.start[1],
			beforeEnd = month <= holiday.end[0] && day <= holiday.end[1];
		
		var inRange;
		if(holiday.start[0] < holiday.end[0]) inRange = afterStart || beforeEnd;//Across years (e.g. December into January)
		else inRange = afterStart && beforeEnd;//Within one year
		
		if(inRange){
			var el = document.createElement('link');
			el.setAttribute('rel', 'stylesheet');
			el.setAttribute('type', 'text/css');
			el.setAttribute('href', urlPrefix + holiday.file);
		}
	}
})([{
	'start': [10, 1],
	'end': [10, 31],
	'file': 'halloween.css'
}, {
	'start': [12, 1],
	'end': [1, 7],
	'file': 'firstmas.css'
}]);
