"use strict";
// type data enum
// enum numeric
var month;
(function (month) {
    month[month["JAN"] = 0] = "JAN";
    month[month["FEB"] = 1] = "FEB";
    month[month["MAR"] = 2] = "MAR";
    month[month["APR"] = 3] = "APR";
    month[month["MAI"] = 4] = "MAI";
})(month || (month = {}));
console.log(month); // maka yang akan di keluarkan adalah isi dari month di ikuti dengan index
console.log(month.APR); // maka yang akan di keluarkan adalah index dari apr
// enum string
var bulan;
(function (bulan) {
    bulan["JAN"] = "januari";
    bulan["FEB"] = "ferbuari";
    bulan["MAR"] = "maret";
    bulan["APR"] = "april";
    bulan["MAI"] = "mey";
})(bulan || (bulan = {}));
console.log(bulan); // maka halis nya sama seperti enum numeric hanya index di ganti mengjadi string yang kita tentukan
console.log(bulan.FEB); // ferbuari
