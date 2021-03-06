/**
 * Reverse a String.
 * String Replace with Multiple Characters list.
 * 
 * String contains SubString « https://stackoverflow.com/a/1789952/5081877
 * 
 * == and === « https://stackoverflow.com/a/359509/5081877
 */

/* ===== Using map to reverse a string ===== 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map#Using_map_to_reverse_a_string
 * 
 * ===== Reversing a String using split() =====
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split#Reversing_a_String_using_split()
 * 
 * ===== ***** Easier way would be using Array.from() method. ***** =====
 * https://stackoverflow.com/a/36525647/5081877
 */

var str = '12321';
var reverse = Array.prototype.map.call(str, function(x) {
  return x;
}).reverse().join(''); 

var strReverse = str.split('').reverse().join('');
// split() returns an array on which reverse() and join() can be applied

var reverseStr = Array.from(str).reverse().join('');

console.log('Array.map.call « Str:', str, '\t Reverse:', reverse);
if( str == reverse ) console.log('Array.map.call « Both Strings are equal');
if( str === reverse ) console.log('Array.map.call « Palindrome String');

console.log('split « Str:', str, '\t Reverse:', strReverse );
if( str == strReverse ) console.log('split « Both Strings are equal');
if( str === strReverse ) console.log('split « Palindrome String');

console.log('Array.from « Str:', str, '\t Reverse:', reverseStr );
if( str == reverseStr ) console.log('Array.from « Both Strings are equal');
if( str === reverseStr ) console.log('Array.from « Palindrome String');

/* ===== String Replace with Multiple Characters list
 * https://stackoverflow.com/a/16577007/5081877
 * https://www.w3schools.com/jsref/jsref_regexp_g.asp
 *  ===== */
// To replace all matches, use a regular expression with a `/g` flag (global match):
// Note that regular expressions are written without quotes.
String.prototype.replaceAllMatches = function(obj) { // Obj format: { 'matchkey' : 'replaceStr' }
	var retStr = this;
	for (var x in obj) {
		var matchArray = retStr.match(new RegExp(x, 'ig'));
		for (var i = 0; i < matchArray.length; i++) {
			retStr = retStr.replaceMatch(x, obj[x], 0);
		}
	}
	return retStr;
};
String.prototype.replaceMatch = function(matchkey, replaceStr, matchIndex) {
	var retStr = this, repeatedIndex = 0;
	var matchArray = retStr.match(new RegExp(matchkey, 'ig'));
	for (var x = 0; x < matchArray.length; x++) {
		if (repeatedIndex == 0) {
			repeatedIndex = retStr.indexOf(matchkey);
		} else {
			repeatedIndex = retStr.indexOf(matchkey, repeatedIndex + 1);
		}
		if (x == matchIndex) {
			retStr = retStr.substring(0, repeatedIndex) + replaceStr + retStr.substring(repeatedIndex + (matchkey.length));
		}
	}
	return retStr;
};

String.prototype.replaceAllRegexMatches = function(obj) { // Obj format: { 'matchkey' : 'replaceStr' }
	var retStr = this;
	for (var x in obj) {
		retStr = retStr.replace(new RegExp(x, 'ig'), obj[x]);
	}
	return retStr;
};

var str = "yash yas $dfdas.";
console.log('String : ', str);
// No need to escape any special Character
console.log('All Matched replace : ', str.replaceAllMatches({'as' : '**', 'y':'Y', '$':'-'}));
console.log('Index Matched replace : ', str.replaceMatch('as', '*', 2) );

var caseSensitiveSTR = "Is this all there is?";
caseSensitiveSTR = caseSensitiveSTR.replace(/\?/g, 'II');
// "Is this all there isII"

// ===== Split, start with, index of =====
var objTarget = '//window[1]//iframe[4]//body//iframe[0]///select[1]';
objTarget = objTarget.substring(11, objTarget.length);
	if(objTarget.startsWith("]")) {
		objTarget = objTarget.substring(1, objTarget.length);
		console.log('window`s value is greater than 10 ',objTarget);
	}
console.log('Removed Window Part : ', objTarget ); // //iframe[4]//body//iframe[0]///select[1]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
if( objTarget.startsWith("//iframe") ) {
	var iframeNumber = objTarget.charAt(9);
	console.log('Find IFrame Number to post message : ', iframeNumber); // 4
	
	var checkInner = objTarget.substring(10, objTarget.length);
	
	// https://stackoverflow.com/a/1789952/5081877
	var expr = /iframe/;  // no quotes here
	if( expr.test( checkInner ) ) {
		console.log('XPath contains inner Frames...');
	}
} else {
	var frameNumber = objTarget.charAt(8);
	console.log('Find Frame Number to post message : ', frameNumber);
}

var str = '//body//iframe[0]//td[3]/div[1]/button[1]/table[1]/tbody[1]/tr[1]/td[2]';
var index = str.indexOf('//iframe');
console.log( index );

var innerFramePath = str.substring(index, str.length);
console.log( innerFramePath );