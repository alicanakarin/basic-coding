/* ATM app
bakiye görüntüleme
para çekme
para yatırma
çıkış 
*/
let newLine = "\r\n";
let amount = 1000;

let metin =
  "ATM Uygulamasına Hoşgeldiniz" +
  newLine +
  "Lütfen yapmak istediğiniz işlemi seçiniz:" +
  newLine +
  "1- Bakiye görüntüleme" +
  newLine +
  "2- Para çekme" +
  newLine +
  "3- Para yatırma" +
  newLine +
  "4- Çıkış" +
  newLine;

let secim = prompt(metin);

switch (secim) {
  case "1":
    alert("Bakiyeniz: " + amount + " TL");
    break;

  case "2":
    let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz:"));
    if (cekilecekTutar > amount) {
      alert(
        "Yetersiz Bakiye!" +
          newLine +
          "Bakiyeniz: " +
          amount +
          " TL" +
          newLine +
          "Çekmek istediğiniz tutar: " +
          cekilecekTutar +
          " TL"
      );
    } else {
      amount = amount - cekilecekTutar;
      alert(
        "İşleminiz gerçekleştirildi." +
          newLine +
          "Kalan bakiyeniz: " +
          amount +
          " TL"
      );
    }
    break;

  case "3":
    let yatirilacakTutar = Number(
      prompt("Yatırmak istediğiniz tutarı giriniz:")
    );
    amount = amount + yatirilacakTutar;
    alert(
      "İşleminiz gerçekleştirildi." +
        newLine +
        "Güncel bakiyeniz: " +
        newLine +
        amount +
        " TL"
    );
    break;

  case "4":
    alert("Çıkış yapılıyor. İyi günler dileriz.");
    break;

  default:
    alert("Geçersiz işlem tercihi. Lütfen tekrar deneyiniz.");
}
