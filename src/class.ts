export class user {
    public namasaya: String;

    // unutk penulisan public bisa di pemudah
    constructor(nama: string, public umur: number) {
        this.namasaya = nama;
        // this berfunsing untk mengambil dari penginndexsiannya
    }

}

let biodata = new user('rian', 19);

console.log(biodata);


// inheritance / class turunan
// super constru
// setter dan getter

class admin extends user {
    baca: boolean = true;
    ngubah: boolean = true;
    phone: string;
    private _email: string = "";

    constructor(phone: string, nama: string, umur: number) {
        super(nama, umur);
        this.phone = phone;
    }

    getall(): { baca: boolean, ngubah: boolean } {
        return {
            baca: this.baca,
            ngubah: this.ngubah
        }
    }

    set email(value: string) {
        if (value.length < 5) {
            this._email = "Email Yang Anda Masukkan Salah"
        } else {
            this._email = value;
        }
    }

    // get email(): string {
    //     return this._email;
    // }
}

let lupa = new admin('0909090909', 'ri', 1);
console.log(3 + 4);


console.log(lupa);



