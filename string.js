document.write('<br /><br /><b>*****************************STRING PROBLEMS*********************' +
        '</b><br />');

document.write('<br /><br /><b>Extract unique characters from a string.....</b>');

function extractUniqueChar(str) {

    document.write('<br /><br /><b>Given string.....</b>' + str);

    var temp = str.split(''),
        dupArr = [];

    for (var i = 0; i < temp.length; i++) {
        var charCount = 0;
        for (var j = 1; j < temp.length - 1; j++) {
            if (temp[i] == temp[j]) {
                charCount++;
            }
        }

        if (charCount == 1) {
            dupArr.push(temp[i]);
        }
    }

    document.write('<br /><br /><b>Unique characters from a string.....</b>' + dupArr.join(', '));
}

extractUniqueChar('sfjsldkalsdfasfalskcmxmcvncxvwereu43843nmxcvxm');

function unique_char(str1) {
    var str = str1;
    var uniql = "";

    document.write('<br /><br /><b>Given string.....</b>' + str1);

    for (var x = 0; x < str.length; x++) {
        if (uniql.indexOf(str.charAt(x)) == -1) {
            uniql += str[x];
        }
    }

    document.write('<br />Unique characters ---' + uniql);
}

unique_char("thequickbrownfoxjumpsoverthelazydog");

document.write('<br /><br /><b>Number of occurrences of each letter in specified string.....</b>');

function occurrencesInString(str1) {
    var str = str1;
    var uniql = "";
    document.write('<br /><br /><b>Given string.....</b>' + str1);

    for (var x = 0; x < str.length; x++) {
        var count = 0;

        for (var y = 0; y < str.length; y++) {
            if (str.charAt(x) == str.charAt(y)) {
                count++;
            }
        }

        if (uniql.indexOf(str.charAt(x)) == -1) {
            uniql += str[x];
            document.write(('<br />occurrences..{0}....{1}</b>').replace('{0}', str[x]).replace('{1}', count));
        }
    }
}

occurrencesInString('sfjs');

function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function (l) {
        uchars[l] = (isNaN(uchars[l])
            ? 1
            : uchars[l] + 1);
    });
    return uchars;
}
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));

//Write a JavaScript function that generates all combinations of a string.
document.write('<br /><br /><b>Write a JavaScript function that Reverse Number.....</b>');

function reverseNum(number) {
    var result = 0;
    document.writeln('<br /><br /><b>Reverse Number.......' + number + '</b><br />');

    while (number >= 10) {
        result = result * 10 + number % 10;
        number = Math.floor(number / 10);

        document.writeln('<br />' + result);
    }

    result = result * 10 + number % 10; // to add last digit

    document.write('<br /><br />Revesed Number - ' + result);
}

reverseNum(1003034);

//Write a JavaScript function that generates all combinations of a string.
document.write('<br /><br /><b>Write a JavaScript function that Generates all combinations of a ' +
        'string.....</b>');

function substrings(str1) {
    var array1 = [];
    document.write('<br /><b>Sample string.....</b>' + str1);
    array1 = str1
        .trim()
        .replace(' ', '')
        .split("");

    document.write('<br />' + array1.join(', '));

    var combi = [];
    var slent = Math.pow(2, array1.length);
    for (var i = 0; i < slent; i++) {
        var temp = "";
        for (var j = 0; j < array1.length; j++) {
            if ((i & Math.pow(2, j))) {
                temp += array1[j];
            }
        }
        if (temp !== "") {
            combi.push(temp);
        }
    }

    document.write('<br /><br />substrings - ' + combi.join("\n"));
}

substrings("dog");
substrings("my name");
substrings("a b");

document.write('<br /><br /><b>Write a JavaScript function that returns a passed string with let' +
        'ters in alphabetical order.</b><br />');

function alphabet_order(str) {
    // return str     .split('')     .sort()     .join('');
    document.write('<br />Original string----' + str);

    var temp,
        arr = [],
        n,
        i,
        j;

    n = str.length;
    arr = str.split("");

    for (var i = 0; i < n - 1; i++) {
        for (var j = i + 1; j < n; j++) {
            var s = arr[i].charCodeAt(0) - arr[j].charCodeAt(0);

            if (s == 0) {
                arr[i] = arr[j];
            }

            if (s > 0) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    document.write('<br />Sorted string----' + arr.join(''));
}

alphabet_order("webmaster");

// Write a JavaScript function that accepts a string as a parameter and converts
// the first letter of each word of the string in upper case.

document.write('<br /><br /><b>Write a JavaScript function that accepts a string as a parameter ' +
        'and converts the first letter of each word of the string in upper case.</b><br /' +
        '>')

function ConvertUpperCase(str) {

    document.write('<br />string with first lower case letter----' + str + '<br />');

    var len = str.length,
        temp,
        arr = str.split(' ');

    for (var i = 0; i < arr.length; i++) {
        var c = arr[i].charCodeAt(0);

        arr[i] = arr[i].replace(arr[i].charAt(0), String.fromCharCode(c - 32));

        document.write('<br />' + arr[i]);
    }

    document.write('<br /><br />string with first upper case letter----' + arr.join(' '));

}

ConvertUpperCase('my name is ramesh');

//

document.write('<br /><br /><b>Write a JavaScript function that accepts a string as a parameter ' +
        'and find the longest word within the string.</b><br />');

function longestWord(str) {

    document.write('<br />string----' + str + '<br />');

    var len = str.length,
        index = 0,
        maxLen = 0,
        arr = str.split(' ');

    for (var i = 0; i < arr.length; i++) {
        var n = arr[i].length;

        if (n > maxLen) {
            maxLen = n;
            index = i;
        }

        document.write('<br />' + arr[i] + '-' + n);
    }

    document.write('<br /><br />longest----' + arr[index]);
}

longestWord('my name is ramesh');

document.write('<br /><br /><b>Write a JavaScript function that accepts a string as a parameter ' +
        'and counts the number of vowels within the string. <b/>')

function CountVowelWord(str) {

    document.write('<br /><br />string----' + str + '<br />');

    var len = str.length,
        v = 0,
        arr = str
            .toLowerCase()
            .split('');

    for (var i = 0; i < arr.length; i++) {
        var c = arr[i].charAt(0);

        if (c == 'a' || c == 'e' || c == 'o' || c == 'u' || c == 'i') {
            v++;
        }
    }

    document.write('<br /><br />Vowels COunt----' + v);
}

CountVowelWord('my nAme Is ramesh');