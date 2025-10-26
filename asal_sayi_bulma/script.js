let sayi = Number(prompt("Bir sayı giriniz:"));
let sonuc = true;
let sonuc1 = "asdsad";

if (sayi === 0 || sayi === 1) {
  sonuc = false;
} else {
  for (let i = 2; i <= Math.floor(sayi / 2); i++) {
    if (sayi % i === 0) {
      sonuc = false;
      break;
    }
  }
}
if (sonuc) {
  alert(sayi + " asaldır.");
} else {
  alert(sayi + " asal değildir.");
}
