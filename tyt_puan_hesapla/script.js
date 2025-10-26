let newLine = "\r\n";
let turkceDogru,
  turkceYanlis,
  matematikDogru,
  matematikYanlis,
  sosyalDogru,
  sosyalYanlis,
  fenDogru,
  fenYanlis = 0;
let puan = 0;
let diplomaPuani = 0;
let okulPuani = diplomaPuani * 0.6;

let metin =
  "TYT Puan Hesaplama Uygulamasına Hoşgeldiniz" +
  newLine +
  "1- Puan Hesapla" +
  newLine +
  "2- Çıkış yap." +
  newLine;

let secim = prompt(metin);

switch (secim) {
  case "1":
    DiplomaPuani = Number(prompt("Lütfen diploma puanınızı giriniz:"));

    turkceDogru = Number(prompt("Türkçe dogru sayınızı giriniz:"));
    turkceYanlis = Number(prompt("Türkçe yanlış sayınızı giriniz:"));

    matematikDogru = Number(prompt("Matematik doğru sayınızı giriniz:"));
    matematikYanlis = Number(prompt("Matematik yanlış sayınızı giriniz:"));

    sosyalDogru = Number(prompt("Sosyal doğru sayınızı giriniz:"));
    sosyalYanlis = Number(prompt("Sosyal yanlış sayınızı giriniz:"));

    fenDogru = Number(prompt("Fen doğru sayınızı giriniz:"));
    fenYanlis = Number(prompt("Fen yanlış sayınızı giriniz:"));

    let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
    let yanlisSayisi =
      turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
    let kalanDogruSayisi = dogruSayisi - yanlisSayisi / 4;
    puan = kalanDogruSayisi * 4 + 100 + okulPuani;
    alert("TYT Puanınız: " + puan);
    break;

  case "2":
    break;

  default:
    alert("Geçersiz seçim");
    break;
}
