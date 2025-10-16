let isim = prompt("Lütfen isminizi girin:");
let tckn = prompt("Lütfen TCKN'nizi girin:");

kontrolEt(isim, tckn);

function kontrolEt(isim, tckn) {
  if (isim == "") {
    console.log("Lütfen isim alanını boş bırakmayınız.");
    return;
  }
  if (tckn.length != 11) {
    console.log("TCKN 11 haneli olmalıdır.");
    return;
  }
  console.log("Sisteme Hoşgeldin " + isim);
}

function kontrolEt2(isim, tckn) {
  if (isim != "") {
    if (tckn.length == 11) {
      console.log("İsim ve tckn doğru.");
    } else {
      console.log("TCKN 11 haneli olmalıdır.");
    }
  } else {
    console.log("Lütfen isim alanını boş bırakmayınız");
  }
}
