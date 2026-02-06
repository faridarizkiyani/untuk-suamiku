let pesan = [
  "Ayahhh, Bagi Duit wkwkwkkw 🤍",
];

let index = 0;

function gantiTeks() {
  document.getElementById("text").innerText = pesan[index];
  index = (index + 1) % pesan.length;
}
