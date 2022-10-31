let sebelum = document.getElementById("sebelum")
let upperTeks = document.getElementById("upperTeks")
let lowerTeks = document.getElementById("lowerTeks")
let ubahKata = document.getElementById("ubahKata")
let panjangTeks = document.getElementById("panjangTeks")

//Menampilkan teks Merah Putih
let teks = "Merah Putih"
sebelum.innerText = "Sebelum diubah : "+ teks

//Menampilkan teks Uppercase
let uppercase = teks.toUpperCase()
upperTeks.innerText = "Diubah menjadi Uppercase : " + uppercase

//Menampilkan teks Lowercase
let lowercase = teks.toLowerCase()
lowerTeks.innerText = "Diubah menjadi Lowercase : " + lowercase

//Mengubah kata "Putih" menjadi "Muda"
let replace = teks.replace("Putih", "Muda")
ubahKata.innerText = "Mengubah kata menjadi : " + replace

//Menampilkan panjang string
let length = replace.length;
panjangTeks.innerText = "Panjang stringnya adalah : " + length