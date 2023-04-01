// type data enum

// enum numeric
enum month {
    JAN,
    FEB,
    MAR,
    APR,
    MAI
}
console.log(month); // maka yang akan di keluarkan adalah isi dari month di ikuti dengan index
console.log(month.APR); // maka yang akan di keluarkan adalah index dari apr


// enum string
enum bulan {
    JAN = 'januari',
    FEB = 'ferbuari',
    MAR = 'maret',
    APR = 'april',
    MAI = 'mey'
}

console.log(bulan); // maka halis nya sama seperti enum numeric hanya index di ganti mengjadi string yang kita tentukan
console.log(bulan.FEB);// ferbuari

