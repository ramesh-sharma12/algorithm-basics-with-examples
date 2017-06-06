document.write('<br /><br /><b>*****************************PALINDROME PROBLEMS*********************</b><br />');

function findPalindrome(n) {
    var originalInteger = n,
        reversedInteger = 0;
    document.writeln('<br /><br /><b>findPalindrome.......' + originalInteger + '</b><br /><br />');

    // reversed integer is stored in variable
    while (n != 0) {
        reversedInteger = reversedInteger * 10 + (n % 10);
        n /= 10;
    }

    // palindrome if orignalInteger and reversedInteger are equal
    if (originalInteger == reversedInteger) 
        document.writeln(originalInteger + "---is a palindrome.");
    else 
        document.writeln(originalInteger + "---is not a palindrome.");
    }

function isWordPalindrome(word) {

    document.writeln('<br /><br /><b>findPalindrome.......' + word + '</b><br /><br />');

    if (word == null || word.length == 0) {
        // up to you if you want true or false here, don't comment saying you would put
        // true, I put this check here because of the following i <
        // Math.ceil(word.length/2) && i< word.length
        return false;
    }
    var lastIndex = Math.ceil(word.length / 2);
    var isPalindrome = true;

    for (var i = 0; i < lastIndex && i < word.length; i++) {
        document.write(word[i] + ',' + word[word.length - 1 - i] + '<br />');
        if (word[i] != word[word.length - 1 - i]) {
            isPalindrome = false;
        }
    }

    if (isPalindrome) 
        document.writeln(word + "---is a palindrome.");
    else 
        document.writeln(word + "---is not a palindrome.");
    }

findPalindrome(100001);
findPalindrome(1034001);
isWordPalindrome('aaabbbbaaa');
isWordPalindrome('aaabbdbaaa');

//-------------------------------------------------

function longestPalSubstr1(str) {
    var maxLength = 1; // The result (length of LPS)

    var start = 0;
    var len = str.length;

    var low,
        high;

    document.writeln("<br /><br /><b>Give palindrome substring is: </b>" + str);
    // One by one consider every character as center point of even and length
    // palindromes
    for (var i = 1; i < len; ++i) {
        // Find the longest even length palindrome with center points as i-1 and i.
        low = i - 1;
        high = i;
        while (low >= 0 && high < len && str[low] == str[high]) {
            //document.write('<br />' + str[low] + ' , ' + str[high]);

            if (high - low + 1 > maxLength) {
                start = low;
                maxLength = high - low + 1;

                document.writeln('<br /><b>' + str[low] + ' , ' + str[high] + '</b>');
            }
            --low;
            ++high;
        }

        // Find the longest odd length palindrome with center point as i
        low = i - 1;
        high = i + 1;
        while (low >= 0 && high < len && str[low] == str[high]) {
            //document.write('<br />' + str[low] + ' , ' + str[high]);

            if (high - low + 1 > maxLength) {
                start = low;
                maxLength = high - low + 1;

                document.writeln('<br /><b>' + str[low] + ' , ' + str[high] + '</b>');
            }
            --low;
            ++high;
        }
    }

    document.writeln("<br /><br /><b>Longest palindrome substring is: </b>");
    printSubStr(str, start, start + maxLength - 1);

    document.writeln('<br />maxLength--' + maxLength);
}

function printSubStr(str, low, high) {
    for (var i = low; i <= high; ++i) {
        document.writeln(str[i]);
    }
}

longestPalSubstr1('abccddddccsc');

function is_Palindrome(str1) {
    var rev = str1
        .split("")
        .reverse()
        .join("");

    return str1 == rev;
}

function longest_palindrome(str1) {

    var max_length = 0,
        maxp = '';

    document.writeln('<br /><b>sample string ---</b>' + str1 + '<br/>');

    for (var i = 0; i < str1.length; i++) {
        var subs = str1.substr(i, str1.length);
        document.writeln('<br />'+ subs);

        for (var j = subs.length; j >= 0; j--) {
            var sub_subs_str = subs.substr(0, j);
            if (sub_subs_str.length <= 1) 
                continue;
            
            if (is_Palindrome(sub_subs_str)) {
                if (sub_subs_str.length > max_length) {
                    max_length = sub_subs_str.length;
                    maxp = sub_subs_str;
                    document.writeln('<br /><b>'+ sub_subs_str + '</b>');
                }
            }
        }
    }

    document.writeln('<br />longest_palindrome----' + maxp);
}

longest_palindrome("abracadabra");

longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE");


function check_Palindrome(str_entry){

   var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
   var ccount = 0;

    document.writeln("<br /><br /><b>Sample palindrome-----" + str_entry + '</b>');

	if(cstr==="") {
		document.writeln("<br />Nothing found!");
		return false;
	}

	if ((cstr.length) % 2 === 0) {
		ccount = (cstr.length) / 2;
	} else {
		if (cstr.length === 1) {
			document.writeln("<br />Entry is a palindrome.");
			return true;
		} else {
			ccount = (cstr.length - 1) / 2;
		}
	}
	for (var x = 0; x < ccount; x++) {
        // Compare characters and drop them if they do not match
     	if (cstr[x] != cstr.slice(-1-x)[0]) {
			document.writeln("<br />Entry is not a palindrome.");
			return false;
		}
	}
	document.writeln("<br />The entry is a palindrome.");
	return true;
}
check_Palindrome('madam');
check_Palindrome('nurses run');
check_Palindrome('fox');