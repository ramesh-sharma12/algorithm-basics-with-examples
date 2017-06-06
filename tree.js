document.write('<br/><br />JavaScript: Search JavaScript arrays with a binary search');

function binarySearch(narray, delement) {

    var mposition = Math.floor(narray.length / 2);

    if (narray[mposition] === delement) {
        return mposition;
    } else if (narray.length === 1) {
        return null;
    } else if (narray[mposition] < delement) {
        var arr = narray.slice(mposition + 1);
        var res = binarySearch(arr, delement);
        if (res === null) {
            return null;
        } else {
            return mposition + 1 + res;
        }
    } else {
        var arr1 = narray.slice(0, mposition);
        return binarySearch(arr1, delement);
    }
}

binarySearch([
    23,
    4,
    52,
    56,
    21,
    87,
    34
], 34);
