function convertAmountCoins(amt) {
    document.write('<br /><br /><b> Convert an amount to coins..........</b>' + amt);
    var coins = [
            25, 50, 100, 200, 500
        ],
        coinsCount = {};

    var totalPaisa = amt * 100;
    var temp = totalPaisa;

    for (var i = 0; i < coins.length; i++) {
        coinsCount[coins[i]] = 0;
    }

    for (var i = coins.length - 1; i >= 0; i--) {
        if (temp % coins[i] == 0) {
            coinsCount[coins[i]] = coinsCount[coins[i]] + (totalPaisa / coins[i]);
        } else {
            temp = temp % coins[i];
        }
    }

    document.write('<br> 25p---' + coinsCount['25']);
    document.write('<br> 50p---' + coinsCount['50']);
    document.write('<br> 1Rs---' + coinsCount['100']);
    document.write('<br> 2Rs---' + coinsCount['200']);
    document.write('<br> 5Rs---' + coinsCount['500']);
}

convertAmountCoins(250);