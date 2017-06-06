document.write('<br /><br /><b>*****************************SOTRING PROBLEMS*********************</b><br />');


var BubbleSort = function (list) {
    var list = [
        12,
        23,
        45,
        4,
        5,
        8,
        15,
        33
    ];

    for (var i = 0; i < list.length; i++) {
        for (var j = i + 1; j < list.length; j++) {
            if (list[i] > list[j]) {
                var temp = list[i];
                list[i] = list[j];
                list[j] = temp;
                document.write('<br />swaping........(' + list[j] + ',' + list[i] + ')');
                document.write('&nbsp;&nbsp;&nbsp;&nbsp;........' + list.join(' , '));
            }
        }
        document.write('<br />');
    }
}

BubbleSort();
//BubbleSort2();

var selectionSort = function () {
    var list = [
        12,
        2,
        45,
        4,
        77,
        8,
        15,
        23
    ];
    document.write('<br /><br /><b>selectionSort steps........' + list.join(' , ') + '</b><br />');

    for (var i = 0; i < list.length; i++) {
        var min = i;
        for (var j = i + 1; j < list.length; j++) {
            if (list[j] < list[i]) { //23 < 12, 45<12, 4<12
                min = j; // 3
                var temp = list[i]; //  temp = 12
                list[i] = list[min]; // list = 4
                list[min] = temp; // list[min] = 12
                document.write('<br />swaping........(' + list[min] + ',' + list[i] + ')');
                document.write('&nbsp;&nbsp;&nbsp;&nbsp;........' + list.join(' , '));
            }
        }
        document.write('<br />');
    }
}
selectionSort();

var insertionSort = function () {
    var list = [
        12,
        2,
        45,
        4,
        77,
        8,
        15,
        23
    ];
    document.write('<b>insertionSort steps........' + list.join(' , ') + '</b>');

    for (var i = 1; i < list.length; i++) {
        var index = list[i];
        var j = i;
        while (j > 0 && list[j - 1] > index) {
            list[j] = list[j - 1];

            document.write('<br />swaping........(' + list[j] + ',' + index + ')');
            document.write('&nbsp;&nbsp;&nbsp;&nbsp;........' + list.join(' , '));

            j--;
        }
        list[j] = index;

        document.write('<br />');
    }
}

insertionSort();

function mergeSort(arr) {
    if (arr.length < 2)
        return arr;

    var middle = parseInt(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle, arr.length);   

    document.write('<br />' + left.join(', ') + ' <b> &nbsp;|&nbsp; </b> ' + right.join(', '));
   
    var leftSort = mergeSort(left); 
    var rightSort = mergeSort(right);      

    return merge(leftSort,rightSort);
}

function merge(left, right) {
    var result = [];    

    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }

        //document.write('&nbsp;&nbsp;&nbsp;' + result.join(', '));
    }


    while (left.length) {
        result.push(left.shift());
        //document.write('' + left.join(', '));
    }

    while (right.length) {
        result.push(right.shift());
        //document.write('&nbsp;' + right.join(', '));
    }

    document.write('<br /><b>' + result.join(' , ') + '</b>');

    return result;
}

var arr = [
    34,
    203,
    3,
    746,
    200,
    984,
    198,
    764,
    9
];

document.write('<br / ><b>Merge Sort........<br /><br />' + arr.join(', ') + '</b>');

document.write('<br / ><br / ><b>sorted........' + mergeSort(arr).join(' , ') + '</b>');