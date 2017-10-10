/**
 * Reverse a String.
 * String Replace with Multiple Characters list.
 * 
 * String contains SunString « https://stackoverflow.com/a/1789952/5081877
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
String.prototype.allReplace = function(obj) {
	var retStr = this;
	for (var x in obj) {
		// http://wiki.tcl.tk/989
		retStr = retStr.replace(new RegExp(x, 'g'), obj[x]);
	}
	return retStr;
};

var strReplace = '#this #is__ __#a test###__';
strReplace = strReplace.allReplace({'#': '', '_': ''});
console.log( strReplace );

var caseSensitiveSTR = "Is this all there is?";
caseSensitiveSTR = caseSensitiveSTR.replace(/\?/g, 'II');
// "Is this all there isII"