/*
* chinese number to decimal number
*/
exports.ch2dec = function (chNumber) {
    if (null === chNumber || "string" != typeof(chNumber)) {
        return '';
    }

    var numMaps = {
        '��': 0,
        'һ': 1,
        '��': 2, 
        '��': 3,
        '��': 4,
        '��': 5,
        '��': 6,
        '��': 7,
        '��': 8,
        '��': 9,
        'ʮ': 10,
        '��': 100,
        'ǧ': 1000,
        '��': 10000
    };

    var result = 0; 

    var prefix = 0;
    for (var nIndex = 0; nIndex < chNumber.length; ++nIndex) {
        var key = chNumber[nIndex];

        if (null == numMaps[key]) {
            continue;
        }

        var val = numMaps[key];
        if (val > 9) {
            result += (val * prefix);
            prefix = null;
        } else {
            prefix = val;
        }
    }

    if (null != prefix) {
        result += prefix;
    }

    return result;
}