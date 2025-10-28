// faktöriyel hesaplama

// 5! = 5 x 4 x 3 x 2 x 1 = 120

let sayi = Number(
  prompt("Faktöriyelini hesaplamak istediğiniz sayıyı giriniz:")
);
let carpim = 1;

for (let i = 1; i <= sayi; i++) {
  carpim = carpim * i;
}
alert("Sonuç: " + carpim);
