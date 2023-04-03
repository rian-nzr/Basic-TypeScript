"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user = void 0;
class user {
    // unutk penulisan public bisa di pemudah
    constructor(nama, umur) {
        this.umur = umur;
        this.namasaya = nama;
        // this berfunsing untk mengambil dari penginndexsiannya
    }
}
exports.user = user;
let biodata = new user('rian', 19);
console.log(biodata);
// inheritance / class turunan
// super constru
// setter dan getter
class admin extends user {
    constructor(phone, nama, umur) {
        super(nama, umur);
        this.baca = true;
        this.ngubah = true;
        this._email = "";
        this.phone = phone;
    }
    getall() {
        return {
            baca: this.baca,
            ngubah: this.ngubah
        };
    }
    set email(value) {
        if (value.length < 5) {
            this._email = "Email Yang Anda Masukkan Salah";
        }
        else {
            this._email = value;
        }
    }
}
let lupa = new admin('0909090909', 'ri', 1);
console.log(3 + 4);
console.log(lupa);
