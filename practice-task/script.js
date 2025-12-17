// const menuBtn= document.querySelector('#menuBtn');
// const menu= document.querySelector('#menu');

// menuBtn.addEventListener("click", () => {
//     menu.classList.toggle("show");
// })

// -------------------------------------------

// const modal = document.getElementById("modal");
// const openBtn = document.getElementById("openModal");
// const closeBtn = document.getElementById("closeModal");

// openBtn.addEventListener("click", () => {
//   modal.classList.add("show");
// });

// closeBtn.addEventListener("click", () => {
//   modal.classList.remove("show");
// });

// // Close modal when clicking background
// modal.addEventListener("click", (e) => {
//   if (e.target === modal) {
//     modal.classList.remove("show");
//   }
// });

// ---------------------------------------------

// const questions = document.querySelectorAll(".question");

// questions.forEach((q) => {
//   q.addEventListener("click", () => {
//     q.nextElementSibling.classList.toggle("show");
//   });
// });

// -----------------------------------------------

// const themeBtn = document.getElementById("themeToggle");

// themeBtn.addEventListener("click", () => {
//   document.body.classList.toggle("dark");
// });

// -------------------------------------------

const notifyBtn = document.getElementById("notifyBtn");

notifyBtn.addEventListener("click", () => {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = "This is a notification!";

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
});

