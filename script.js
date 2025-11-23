function toggleTheme() {
  const body = document.body;
  const btn = document.querySelector(".theme-toggle");

  body.classList.toggle("dark");

  // Ubah ikon tombol
  if (body.classList.contains("dark")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}