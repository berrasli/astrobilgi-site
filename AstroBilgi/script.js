document.addEventListener("DOMContentLoaded", () => {
  setupZodiacCalc();
  setupContactForm();
  setupAuthMessages();
});

/* ========== BURÇ HESAPLAMA ========== */

const zodiacData = [
  { name: "Koç", start: "03-21", end: "04-19", element: "Ateş" },
  { name: "Boğa", start: "04-20", end: "05-20", element: "Toprak" },
  { name: "İkizler", start: "05-21", end: "06-21", element: "Hava" },
  { name: "Yengeç", start: "06-22", end: "07-22", element: "Su" },
  { name: "Aslan", start: "07-23", end: "08-22", element: "Ateş" },
  { name: "Başak", start: "08-23", end: "09-22", element: "Toprak" },
  { name: "Terazi", start: "09-23", end: "10-22", element: "Hava" },
  { name: "Akrep", start: "10-23", end: "11-21", element: "Su" },
  { name: "Yay", start: "11-22", end: "12-21", element: "Ateş" },
  { name: "Oğlak", start: "12-22", end: "01-19", element: "Toprak" },
  { name: "Kova", start: "01-20", end: "02-18", element: "Hava" },
  { name: "Balık", start: "02-19", end: "03-20", element: "Su" }
];

function setupZodiacCalc() {
  const form = document.getElementById("calcForm");
  const result = document.getElementById("calc-result");
  if (!form || !result) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const day = parseInt(document.getElementById("day")?.value, 10);
    const month = parseInt(document.getElementById("month")?.value, 10);

    if (!day || !month) {
      result.textContent = "Lütfen geçerli bir gün ve ay gir.";
      return;
    }

    const zodiac = findZodiac(day, month);
    if (zodiac) {
      result.innerHTML = `Senin burcun: <span>${zodiac.name}</span> (${zodiac.element} elementi)`;
    } else {
      result.textContent = "Girdiğin tarih hatalı görünüyor. Lütfen tekrar kontrol et.";
    }
  });
}

function findZodiac(day, month) {
  const mm = String(month).padStart(2, "0");
  const dd = String(day).padStart(2, "0");
  const current = `${mm}-${dd}`;

  for (const z of zodiacData) {
    // Oğlak gibi yıl döngüsünü aşan burçlar
    if (z.start > z.end) {
      if (current >= z.start || current <= z.end) return z;
    } else {
      if (current >= z.start && current <= z.end) return z;
    }
  }
  return null;
}

/* ========== İLETİŞİM FORMU ========== */

function setupContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mesajınız gönderildi. Yıldızların rehberliği sizinle olsun 🌟");
    form.reset();
  });
}

/* ========== LOGIN / REGISTER DEMO MESAJLARI ========== */

function setupAuthMessages() {
  const registerForm = document.getElementById("registerForm");
  const registerMsg = document.getElementById("registerMsg");

  if (registerForm && registerMsg) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      registerMsg.textContent = "Üye olundu.";
      registerMsg.classList.add("show");
    });
  }

  const loginForm = document.getElementById("loginForm");
  const loginMsg = document.getElementById("loginMsg");

  if (loginForm && loginMsg) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      loginMsg.textContent = "Oturum açıldı.";
      loginMsg.classList.add("show");
    });
  }
}

/* ========== GALERİ ========== */


function changeImage(clickedSrc) {
  const mainImage = document.getElementById("mainImage");
  if (!mainImage) return;

  // Thumblar sabit kalır, sadece büyük görsel değişir
  mainImage.src = clickedSrc;
}
