let yeniSatir = "\r\n";
let metin = "1-Pazartesi" + yeniSatir
+ "2-Salı" + yeniSatir
+ "3-Çarşamba" + yeniSatir
+ "4-Perşembe" + yeniSatir
+ "5-Cuma" + yeniSatir
+ "6-Cumartesi" + yeniSatir
+ "7-Pazar" + yeniSatir
+ yeniSatir +
"Lütfen bir gün seçiniz";

let gun = prompt(metin);

switch(gun) {
    case "1":
        alert("Pazartesi gününü seçtiniz")
        break;
    case "2":
        alert("Salı gününü seçtiniz")
        break;
    case "3":
        alert("Çarşamba gününü seçtiniz")
        break;
    case "4":
        alert ("Perşembe gününü seçtiniz")
        break;
    case "5":
        alert("Cuma günün seçtiniz")
        break;
    case "6":
        alert("Cumartesi gününü seçtiniz")
        break;
    case "7":
        alert("Pazar gününü seçtiniz")
        break;
    default:
        alert("Lütfen geçerli bir gün seçiniz!")
        let gun = prompt(metin);
        break;
}
