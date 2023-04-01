// function
// di typescript function harus di deklarasikan type data nya dan harus ada return yang berisi type data yang sudah di tentukan

function apam(): string {
    return 'ini adalah function apam';
}

console.log(apam());

function lemang(): number {
    return 87;
}

console.log(lemang());


// void bertujuan untuk mendeklarasikan bahwa function ini tidak ada return
function thimpan(): void {
    console.log('ini adalah function tanpa return');
}

thimpan();

// function argunments 

// function yang memilik argument juga harus kita deklarasikan

function jumlah(jum1 : number, jum2 : number) : number{
    return jum1 * jum2;
}

let hasil = jumlah(2, 9);
console.log(hasil);

// maka jika kita salah menulis type data maka akan terjadi error

// function as type

type tambah = (num1: number, num2 : string) => any;

let sejarah :tambah = (jum1 : number, jum2 :string ) =>{
    return `nama saya ${jum2} umur saya ${jum1}`
}


console.log(sejarah(1, 'siapa'));
