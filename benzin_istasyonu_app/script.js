/* 
    Yakıtları obje olarak tanımlayarak kod tekrarını önledim.
*/

const fuel = {
  1: { ad: "Benzin", fiyat: 52.02 },
  2: { ad: "Dizel", fiyat: 53.13 },
  3: { ad: "LPG", fiyat: 40.78 },
};

const newLine = "\r\n";

const fuelText =
  "1: " + fuel[1].ad + " - " + fuel[1].fiyat + " ₺" + newLine +
  "2: " + fuel[2].ad + " - " + fuel[2].fiyat + " ₺" + newLine +
  "3: " + fuel[3].ad + " - " + fuel[3].fiyat + " ₺" + newLine +
  newLine + "Yakıt türünüzü seçiniz";

const fuelType = prompt(fuelText);
const selectedFuel = fuel[fuelType];

if (selectedFuel) {
  const fuelLiters = Number(prompt("Yakıt litresini giriniz"));
  const balance = Number(prompt("Bakiyenizi giriniz"));

  const totalPrice = selectedFuel.fiyat *  ers;

  if (totalPrice <= balance) {
    const remainingBalance = balance - totalPrice;
    alert(
      "Yakıt alma işlemi başarılı!" + newLine +
      "Kalan bakiye: " + remainingBalance.toFixed(2) + " ₺"
    ); //.toFixed(2) ile kuruşları göster
  } else {
    alert(
      "Bakiyeniz yeterli değildir." + newLine +
      "Ödenecek Tutar: " + totalPrice.toFixed(2) + " ₺" + newLine +
      "Mevcut Bakiye: " + balance.toFixed(2) + " ₺" + newLine +
      "Eksik Tutar: " + (totalPrice - balance).toFixed(2) + " ₺"
    );
  }
} else {
  alert("Lütfen geçerli bir yakıt türü seçiniz!");
}
