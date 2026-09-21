/* ===========================================================
   Yennenga Mode — script principal
   Toute la config à personnaliser (téléphone, Formspree, etc.)
   est regroupée dans l'objet CONFIG ci-dessous.
   =========================================================== */

const CONFIG = {
  // Numéro WhatsApp de la boutique, format international SANS le "+" ni espaces.
  // Exemple pour +226 70 00 00 00 -> "22670000000"
  whatsappNumber: "22670000000",

  // Message pré-rempli envoyé quand un visiteur clique sur un lien WhatsApp générique
  // (hors bouton "Commander" d'un produit, qui a son propre message).
  whatsappDefaultMessage: "Bonjour, je souhaite avoir plus d'informations sur vos sacs.",

  // Compte Instagram de la boutique (juste le nom d'utilisateur, sans @).
  instagramHandle: "yennenga.mode",

  // Identifiant du formulaire Formspree — à créer gratuitement sur https://formspree.io
  // Une fois le formulaire créé, remplace "VOTRE_ID_FORMSPREE" par l'identifiant fourni
  // (visible dans l'URL d'action, ex: https://formspree.io/f/abcdwxyz -> "abcdwxyz").
  // Tant que cet identifiant n'est pas renseigné, le formulaire retombe sur un envoi
  // WhatsApp pré-rempli pour ne jamais bloquer une demande client.
  formspreeFormId: "VOTRE_ID_FORMSPREE",
};

document.addEventListener("DOMContentLoaded", () => {
  initBurgerMenu();
  initWhatsappLinks();
  initInstagramLinks();
  initProductOrderButtons();
  initContactForm();
});

/* ---------- Menu mobile ---------- */
function initBurgerMenu() {
  const burger = document.querySelector(".burger");
  const links = document.querySelector(".nav-links");
  if (!burger || !links) return;

  burger.addEventListener("click", () => {
    const isOpen = links.classList.toggle("nav-links--open");
    burger.setAttribute("aria-expanded", String(isOpen));
    links.style.display = isOpen ? "flex" : "";
    links.style.flexDirection = isOpen ? "column" : "";
    links.style.position = isOpen ? "absolute" : "";
    links.style.top = isOpen ? "100%" : "";
    links.style.left = isOpen ? "0" : "";
    links.style.right = isOpen ? "0" : "";
    links.style.background = isOpen ? "rgba(31,42,56,0.98)" : "";
    links.style.padding = isOpen ? "24px" : "";
    links.style.gap = isOpen ? "20px" : "";
  });
}

/* ---------- Liens WhatsApp génériques (header, hero, section contact) ---------- */
function buildWhatsappUrl(message) {
  const text = encodeURIComponent(message || CONFIG.whatsappDefaultMessage);
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

function initWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    el.href = buildWhatsappUrl(CONFIG.whatsappDefaultMessage);
    el.target = "_blank";
    el.rel = "noopener";
  });

  const phoneLinks = document.querySelectorAll("[data-whatsapp-phone]");
  phoneLinks.forEach((el) => {
    el.href = `tel:+${CONFIG.whatsappNumber}`;
  });
}

/* ---------- Lien Instagram ---------- */
function initInstagramLinks() {
  document.querySelectorAll("[data-instagram-link]").forEach((el) => {
    el.href = `https://instagram.com/${CONFIG.instagramHandle}`;
    el.target = "_blank";
    el.rel = "noopener";
  });
}

/* ---------- Boutons "Commander" des produits ---------- */
function initProductOrderButtons() {
  const select = document.getElementById("cf-modele");

  document.querySelectorAll("[data-order-product]").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      const productName = btn.getAttribute("data-order-product");
      if (select && productName) {
        const optionExists = Array.from(select.options).some(
          (opt) => opt.value === productName
        );
        if (optionExists) {
          select.value = productName;
        }
      }
      // Le lien pointe déjà vers #suivez ; le scroll fluide est géré par le CSS
      // (scroll-behavior:smooth). On laisse le comportement par défaut du <a>.
    });
  });
}

/* ---------- Formulaire de contact ---------- */
function initContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (!form || !status) return;

  const isConfigured =
    CONFIG.formspreeFormId && CONFIG.formspreeFormId !== "VOTRE_ID_FORMSPREE";

  if (isConfigured) {
    form.action = `https://formspree.io/f/${CONFIG.formspreeFormId}`;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nom = document.getElementById("cf-nom").value.trim();
    const tel = document.getElementById("cf-tel").value.trim();
    const modele = document.getElementById("cf-modele").value;
    const message = document.getElementById("cf-msg").value.trim();

    if (!isConfigured) {
      // Formspree n'est pas encore configuré : on bascule sur WhatsApp
      // pour que la demande du client ne soit jamais perdue.
      const texte = [
        `Nom : ${nom}`,
        `Téléphone : ${tel}`,
        `Modèle souhaité : ${modele}`,
        message ? `Message : ${message}` : null,
      ]
        .filter(Boolean)
        .join("\n");
      window.open(buildWhatsappUrl(texte), "_blank", "noopener");
      showStatus(
        status,
        "success",
        "Formulaire non configuré pour l'instant — votre demande a été ouverte dans WhatsApp."
      );
      return;
    }

    const submitBtn = form.querySelector(".contact-submit");
    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi en cours…";

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        form.reset();
        showStatus(
          status,
          "success",
          "Merci ! Votre demande a bien été envoyée, nous revenons vers vous rapidement."
        );
      } else {
        throw new Error("Réponse Formspree non valide");
      }
    } catch (error) {
      showStatus(
        status,
        "error",
        "L'envoi a échoué. Écrivez-nous directement sur WhatsApp, c'est plus sûr."
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Envoyer la demande";
    }
  });
}

function showStatus(el, type, text) {
  el.textContent = text;
  el.className = `form-status visible ${type}`;
}
