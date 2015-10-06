/*
* chinese number to decimal number
*/
exports.ch2dec = function (chNumber) {
    if (null === chNumber || "string" != typeof(chNumber)) {
        return '';
    }

    var numMaps = {
        '零': 0,
        '一': 1,
        '二': 2, 
        '三': 3,
        '四': 4,
        '五': 5,
        '六': 6,
        '七': 7,
        '八': 8,
        '九': 9,
        '十': 10,
        '百': 100,
        '千': 1000,
        '万': 10000
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