"use strict";
// function
// di typescript function harus di deklarasikan type data nya dan harus ada return yang berisi type data yang sudah di tentukan
function apam() {
    return 'ini adalah function apam';
}
console.log(apam());
function lemang() {
    return 87;
}
console.log(lemang());
// void bertujuan untuk mendeklarasikan bahwa function ini tidak ada return
function thimpan() {
    console.log('ini adalah function tanpa return');
}
thimpan();
// function argunments 
// function yang memilik argument juga harus kita deklarasikan
function jumlah(jum1, jum2) {
    return jum1 * jum2;
}
let hasil = jumlah(2, 9);
console.log(hasil);
let sejarah = (jum1, jum2) => {
    return `nama saya ${jum2} umur saya ${jum1}`;
};
console.log(sejarah(1, 'siapa'));
