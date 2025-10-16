let secilenYon = prompt(
  "Lütfen gitmek istediğiniz yönü seçin: sağ, sol, ileri veya geri"
).toLowerCase();

if (secilenYon === "sağ") {
  alert(secilenYon + " tarafa döndünüz");
} else if (secilenYon === "sol") {
  alert(secilenYon + " tarafa döndünüz");
} else if (secilenYon === "ileri") {
  alert(secilenYon + " gitmeyi tercih ettiniz.");
} else if (secilenYon === "geri") {
  alert(secilenYon + " gitmeyi tercih ettiniz.");
} else {
  alert("Lütfen geçerli bir yön seçin.");
}
