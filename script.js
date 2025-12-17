// 🌙 Dark Mode
document.getElementById("themeToggle").onclick = () =>
  document.body.classList.toggle("dark");

// ☰ Menu
document.getElementById("menuBtn").onclick = () =>
  document.getElementById("menu").classList.toggle("show");

// 🪟 Modal
const modal = document.getElementById("modal");

document.getElementById("openModal").onclick = () =>
  modal.classList.add("show");

document.getElementById("closeModal").onclick = () =>
  modal.classList.remove("show");

modal.onclick = (e) => {
  if (e.target === modal) modal.classList.remove("show");
};

// ❓ Accordion
document.querySelectorAll(".question").forEach((q) => {
  q.onclick = () => q.nextElementSibling.classList.toggle("show");
});

// 🔔 Toast
document.getElementById("notifyBtn").onclick = () => {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = "Action completed successfully";

  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
};
