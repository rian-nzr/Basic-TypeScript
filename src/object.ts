//objec 
// untuk memudahkan kira mengunakan object kita bisa tambah kan type unutk menetukan type data pada object

type data = {
    nama : string,
    kelas : any,
    sekolah : string,
    umur : number
}

// maka jika kita sudah mengunakan type kita harus menugunaka semua isi dari type tersebut jika tika maka akan terjadi error dan
// jika kita salah menuliskan type data yang sudah di tetukan juga akan terjadi error

let siswa : data ={
    nama :'rian',
    kelas: 2,
    sekolah: 'sd negeri dongen',
    umur: 7
}

console.log(siswa);
