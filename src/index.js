module.exports = function getZerosCount(number, base) {
   var thisBase, thisNum, newNum, rez, a;
    thisNum = number;
    thisBase = base;
    for(var i = 2; i <= base; i++){
		if(thisBase % i == 0){
			a = 0;
			lastBase = i;
			while(thisBase % i == 0){
				thisBase = thisBase/i;
			}
		}
		
	}	
	rez = 0;
	newNum = number;
	startNum = number;
	x = 1;
	while (newNum/lastBase > 0){
		rez+=Math.floor(startNum/Math.pow(lastBase,x++));
		newNum = Math.floor(newNum/lastBase);
	}
	return Math.floor(rez);
}