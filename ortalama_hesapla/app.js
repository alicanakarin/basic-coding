// Ortalama hesaplama fonksiyonu

// vize %30, quiz %20, final %50

let vize = Number(prompt("Vize notunuzu giriniz:"));
let quiz = Number(prompt("Quiz notunuzu giriniz:"));
let final = Number(prompt("Final notunuzu giriniz:"));

let ortalama = vize * 0.3 + quiz * 0.2 + final * 0.5;

if (ortalama >= 55) {
  alert("Tebrikler, dersi geçtiniz! ortalamanız: " + ortalama);
  console.log("Tebrikler, dersi geçtiniz! ortalamanız: " + ortalama);
} else {
  alert("Üzgünüm, dersten kaldınız. ortalamanız: " + ortalama);
  console.log("Üzgünüm, dersten kaldınız. ortalamanız: " + ortalama);
}
