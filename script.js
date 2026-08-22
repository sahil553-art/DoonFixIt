// Change these two values before publishing the website.
const CONTACT = {
  phone: "919548662391", // Example: 919876543210 (country code + mobile number)
  whatsapp: "919548662391"
};

const callLink = `tel:+${CONTACT.phone}`;
const whatsappLink = (message = "Hello Doon Fix It, I would like to book a service.") =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

document.querySelectorAll("[data-call]").forEach(link => link.href = callLink);
document.querySelectorAll("[data-whatsapp]").forEach(link => link.href = whatsappLink());
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("booking-form").addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = `Hello Doon Fix It, I would like to request a service.\n\nName: ${form.get("name")}\nPhone: ${form.get("phone")}\nService: ${form.get("service")}\nArea: ${form.get("area")}\nProblem: ${form.get("problem")}\n\nI understand the mandatory visit charge is ₹49 (₹99 after 8 PM).`;
  window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
});
