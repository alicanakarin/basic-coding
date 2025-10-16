let kilo = Number(prompt("Lütfen Kilonuzu giriniz.(kg)"));
let boy = Number(prompt("Lütfen Boyunuzu girinin.(cm)"));

let sonuc = kilo / (boy / 100) ** 2;

if (sonuc < 18.5) {
  console.log(
    "Beden kitle endeksiniz: " +
      Number(sonuc.toFixed(2)) +
      ", İdeal kilonun altındasınız."
  );
} else if (sonuc >= 18.5 && sonuc < 24.9) {
  console.log(
    "Beden kitle endeksiniz: " +
      Number(sonuc.toFixed(2)) +
      ", İdeal kilodasınız."
  );
} else if (sonuc >= 30 && sonuc < 39.9) {
  console.log(
    "Beden kitle endeksiniz: " +
      Number(sonuc.toFixed(2)) +
      ", İdeal kilonuzun üzerindesiniz. (Obez)"
  );
} else if (sonuc >= 40) {
  console.log(
    "Beden kitle endeksiniz: " +
      Number(sonuc.toFixed(2)) +
      ", İdeal kilonuzun çok üzerindesiniz. (Morbid Obez)"
  );
}
