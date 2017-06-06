document.write('<br /><br /><b>Write a JavaScript function which will take an array of numbers s' +
        'tored and find the second lowest and second greatest numbers, respectively.</b>')

function greatestNumberArray(arr) {

    var n = arr.length;

    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j <= n - 1; j++) {
            if (arr[j] < arr[i]) {

                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;

                document.write('<br />sorted Array......' + arr.join(', '));
            }
        }
    }

    document.write('<br />1st greatest......' + arr[n - 1]);
    document.write('<br />2nd greatest......' + arr[n - 2]);
}

greatestNumberArray([
    23,
    4,
    2,
    65,
    43,
    12
]);