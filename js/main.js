/* ===========================================================
   Yennenga Mode — script principal
   Toute la config à personnaliser (téléphone, Formspree, etc.)
   est regroupée dans l'objet CONFIG ci-dessous.
   =========================================================== */

const CONFIG = {
  // Numéro WhatsApp de la boutique, format international SANS le "+" ni espaces.
  // Exemple pour +226 70 00 00 00 -> "22670000000"
  whatsappNumber: "22670000000",

  // Compte Instagram de la boutique (juste le nom d'utilisateur, sans @).
  instagramHandle: "yennenga.mode",

  // Identifiant du formulaire Formspree — à créer gratuitement sur https://formspree.io
  // Une fois le formulaire créé, remplace "VOTRE_ID_FORMSPREE" par l'identifiant fourni
  // (visible dans l'URL d'action, ex: https://formspree.io/f/abcdwxyz -> "abcdwxyz").
  // Tant que cet identifiant n'est pas renseigné, le formulaire retombe sur un envoi
  // WhatsApp pré-rempli pour ne jamais bloquer une demande client.
  formspreeFormId: "VOTRE_ID_FORMSPREE",
};

/* ===========================================================
   TRADUCTIONS FR / EN
   Les données propres (noms de produits, prix, adresse, téléphone)
   ne sont PAS traduites : seuls les libellés et textes le sont.
   Le français est la langue par défaut à l'ouverture du site.
   =========================================================== */
const translations = {
  fr: {
    "meta.title": "Yennenga Mode — Sacs & parfums importés de France, Ouagadougou",
    "meta.description": "Sacs en cuir et simili-cuir, parfums importés de Paris, vendus à Ouagadougou. Commande sur WhatsApp, paiement Orange Money, Moov Money ou espèces en boutique.",
    "skip.link": "Aller au contenu principal",
    "burger.ariaLabel": "Ouvrir le menu",
    "lang.groupLabel": "Choix de la langue",
    "nav.collections": "Collections",
    "nav.import": "L'import",
    "nav.boutique": "Boutique",
    "nav.contact": "Contact",
    "nav.cta": "Commander sur WhatsApp",
    "hero.title": "Le cuir parisien, choisi pour Ouaga.",
    "hero.lede": "Nous sélectionnons chaque sac dans les ateliers et boutiques de Paris, et le rapportons nous-mêmes à Ouagadougou — pièce authentifiée, prix affiché en FCFA.",
    "hero.btn1": "Voir la collection",
    "hero.btn2": "Nous écrire sur WhatsApp",
    "hero.credo": "Un nouveau lot importé chaque mois — quantités limitées, pas de réassort garanti.",
    "trajet.h2": "De Paris à Ouagadougou",
    "trajet.p": "Pas d'intermédiaire ni de grossiste — chaque pièce est choisie par nous, en France.",
    "trajet.parisTag": "Sélection en boutique et chez l'artisan",
    "trajet.ouagaTag": "Vente en boutique, Zone du Bois",
    "trajet.step1h": "1. La sélection",
    "trajet.step1p": "Chaque modèle est examiné à la main avant l'achat : cuir, coutures, fermoirs.",
    "trajet.step2h": "2. Le transport",
    "trajet.step2p": "Les sacs voyagent avec nous, pas par fret anonyme — nous savons ce qui arrive et dans quel état.",
    "trajet.step3h": "3. La mise en boutique",
    "trajet.step3p": "Prix affiché en FCFA dès l'arrivée, sans marge cachée ajoutée en cours de route.",
    "coll.h2": "Le lot actuel",
    "coll.p": "Sacs en cuir véritable, sacs en simili-cuir haute qualité et parfums — une sélection resserrée, une fois vendue elle ne revient pas forcément.",
    "coll.tabAll": "Tout voir",
    "coll.tabBags": "Sacs",
    "coll.tabPerfumes": "Parfums",
    "mat.cuir": "Cuir véritable",
    "mat.simili": "Simili-cuir premium",
    "mat.parfum": "Eau de parfum",
    "p.order": "Commander",
    "p.cabas.desc": "Format quotidien, doublure intérieure renforcée. Cuir pleine fleur sélectionné à Paris.",
    "p.besace.desc": "Bandoulière ajustable, portée épaule ou croisée. Une seule pièce disponible.",
    "p.mini.desc": "Format compact, présence maximale. Simili-cuir haute qualité, aussi résistant qu'élégant.",
    "p.pochette.desc": "Idéale pour les cérémonies et soirées. Fermoir doré, intérieur satiné.",
    "p.seau.desc": "Volume rond, fermeture coulissante, ligne épurée. Cuir grainé bordeaux.",
    "p.ambre.desc": "Eau de parfum boisée et ambrée, importée directement des parfumeries parisiennes. 50 ml.",
    "p.fleur.desc": "Eau de parfum florale et légère, notes de pivoine et de musc blanc. 50 ml.",
    "quote.text": "J'ai commandé sur WhatsApp un jeudi, le sac était en boutique le samedi. La qualité n'a rien à voir avec ce qu'on trouve d'habitude ici.",
    "quote.cite": "Awa, cliente à Ouaga 2000",
    "shop.h2": "Notre boutique",
    "shop.address": "Adresse",
    "shop.hours": "Horaires",
    "shop.hoursVal": "Lundi à samedi, 9h – 19h",
    "shop.phone": "Téléphone / WhatsApp",
    "shop.delivery": "Livraison",
    "shop.deliveryVal": "Gratuite à Ouagadougou · sur devis pour Bobo-Dioulasso et les autres villes",
    "shop.cash": "Espèces en boutique",
    "contact.h2": "Restons en contact",
    "contact.p": "Les nouveaux lots sont annoncés en premier sur WhatsApp et Instagram.",
    "contact.linkWhatsapp": "Rejoindre la liste WhatsApp",
    "contact.linkInsta": "Suivre sur Instagram",
    "contact.linkCall": "Appeler la boutique",
    "form.h3": "Envoyer une demande",
    "form.sub": "Précisez le modèle qui vous intéresse, nous revenons vers vous rapidement.",
    "form.name": "Nom",
    "form.namePh": "Votre nom",
    "form.phone": "Téléphone / WhatsApp",
    "form.model": "Modèle souhaité",
    "form.grpBags": "Sacs",
    "form.grpPerfumes": "Parfums",
    "form.other": "Autre / je ne sais pas encore",
    "form.message": "Message (facultatif)",
    "form.messagePh": "Une question, une couleur souhaitée…",
    "form.submit": "Envoyer la demande",
    "form.submitting": "Envoi en cours…",
    "form.statusFallback": "Formulaire non configuré pour l'instant — votre demande a été ouverte dans WhatsApp.",
    "form.statusSuccess": "Merci ! Votre demande a bien été envoyée, nous revenons vers vous rapidement.",
    "form.statusError": "L'envoi a échoué. Écrivez-nous directement sur WhatsApp, c'est plus sûr.",
    "footer.line1": "© 2026 Yennenga Mode — Sacs & parfums importés de France",
    "whatsapp.defaultMessage": "Bonjour, je souhaite avoir plus d'informations sur vos sacs et parfums.",
  },
  en: {
    "meta.title": "Yennenga Mode — Bags & perfumes imported from France, Ouagadougou",
    "meta.description": "Leather and vegan-leather bags, perfumes imported from Paris, sold in Ouagadougou. Order on WhatsApp, pay with Orange Money, Moov Money or cash in store.",
    "skip.link": "Skip to main content",
    "burger.ariaLabel": "Open menu",
    "lang.groupLabel": "Language switcher",
    "nav.collections": "Collections",
    "nav.import": "The import",
    "nav.boutique": "Store",
    "nav.contact": "Contact",
    "nav.cta": "Order on WhatsApp",
    "hero.title": "Parisian leather, chosen for Ouaga.",
    "hero.lede": "We select every bag in Paris' workshops and boutiques, and bring it back to Ouagadougou ourselves — authenticated piece, price shown in FCFA.",
    "hero.btn1": "View the collection",
    "hero.btn2": "Message us on WhatsApp",
    "hero.credo": "A new batch imported every month — limited quantities, restocking not guaranteed.",
    "trajet.h2": "From Paris to Ouagadougou",
    "trajet.p": "No middleman, no wholesaler — every piece is chosen by us, in France.",
    "trajet.parisTag": "Selected in boutiques and from artisans",
    "trajet.ouagaTag": "Sold in-store, Zone du Bois",
    "trajet.step1h": "1. Selection",
    "trajet.step1p": "Every model is examined by hand before purchase: leather, stitching, clasps.",
    "trajet.step2h": "2. Transport",
    "trajet.step2p": "The bags travel with us, not through anonymous freight — we know exactly what arrives and in what state.",
    "trajet.step3h": "3. In store",
    "trajet.step3p": "Price shown in FCFA as soon as it arrives, with no hidden margin added along the way.",
    "coll.h2": "Current batch",
    "coll.p": "Genuine leather bags, premium vegan-leather bags, and perfumes — a tight selection, and once sold it may not come back.",
    "coll.tabAll": "View all",
    "coll.tabBags": "Bags",
    "coll.tabPerfumes": "Perfumes",
    "mat.cuir": "Genuine leather",
    "mat.simili": "Premium vegan leather",
    "mat.parfum": "Eau de parfum",
    "p.order": "Order",
    "p.cabas.desc": "Everyday size, reinforced inner lining. Full-grain leather selected in Paris.",
    "p.besace.desc": "Adjustable strap, worn on the shoulder or across the body. Only one piece available.",
    "p.mini.desc": "Compact size, striking presence. Premium vegan leather, as sturdy as it is elegant.",
    "p.pochette.desc": "Ideal for ceremonies and evenings out. Gold clasp, satin lining.",
    "p.seau.desc": "Round volume, drawstring closure, clean silhouette. Grained burgundy leather.",
    "p.ambre.desc": "Woody, amber eau de parfum, imported directly from Parisian perfumeries. 50 ml.",
    "p.fleur.desc": "Light, floral eau de parfum with peony and white musk notes. 50 ml.",
    "quote.text": "I ordered on WhatsApp on a Thursday, the bag was in store by Saturday. The quality is nothing like what you usually find here.",
    "quote.cite": "Awa, customer in Ouaga 2000",
    "shop.h2": "Our store",
    "shop.address": "Address",
    "shop.hours": "Hours",
    "shop.hoursVal": "Monday to Saturday, 9am – 7pm",
    "shop.phone": "Phone / WhatsApp",
    "shop.delivery": "Delivery",
    "shop.deliveryVal": "Free within Ouagadougou · quoted on request for Bobo-Dioulasso and other cities",
    "shop.cash": "Cash in store",
    "contact.h2": "Stay in touch",
    "contact.p": "New batches are announced first on WhatsApp and Instagram.",
    "contact.linkWhatsapp": "Join the WhatsApp list",
    "contact.linkInsta": "Follow on Instagram",
    "contact.linkCall": "Call the store",
    "form.h3": "Send a request",
    "form.sub": "Tell us which model interests you, we'll get back to you quickly.",
    "form.name": "Name",
    "form.namePh": "Your name",
    "form.phone": "Phone / WhatsApp",
    "form.model": "Model of interest",
    "form.grpBags": "Bags",
    "form.grpPerfumes": "Perfumes",
    "form.other": "Other / not sure yet",
    "form.message": "Message (optional)",
    "form.messagePh": "A question, a colour you'd like…",
    "form.submit": "Send request",
    "form.submitting": "Sending…",
    "form.statusFallback": "The form isn't configured yet — your request was opened in WhatsApp instead.",
    "form.statusSuccess": "Thank you! Your request has been sent, we'll get back to you shortly.",
    "form.statusError": "Something went wrong. Message us directly on WhatsApp, it's more reliable.",
    "footer.line1": "© 2026 Yennenga Mode — Bags & perfumes imported from France",
    "whatsapp.defaultMessage": "Hello, I'd like more information about your bags and perfumes.",
  },
};

// Langue active. Mémorisée d'une visite à l'autre via localStorage,
// mais reste "fr" par défaut à la toute première visite.
let currentLang = "fr";

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguage();
  initBurgerMenu();
  initWhatsappLinks();
  initInstagramLinks();
  initCategoryFilter();
  initProductOrderButtons();
  initContactForm();
});

/* ---------- Langue FR / EN ---------- */
function initLanguage() {
  let saved = null;
  try {
    saved = localStorage.getItem("ym-lang");
  } catch (e) {
    // localStorage indisponible (navigation privée, etc.) : on ignore, le français reste par défaut.
  }
  applyLanguage(saved === "en" ? "en" : "fr");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
}

function applyLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t("meta.description"));

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value) el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.setAttribute("placeholder", t(el.dataset.i18nPlaceholder));
  });
  document.querySelectorAll("[data-i18n-label]").forEach((el) => {
    el.setAttribute("label", t(el.dataset.i18nLabel));
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
    el.setAttribute("aria-label", t(el.dataset.i18nAriaLabel));
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("ym-lang", lang);
  } catch (e) {
    // pas grave si on ne peut pas mémoriser la préférence
  }
}

/* ---------- Filtre de la collection (Tout voir / Sacs / Parfums) ---------- */
function initCategoryFilter() {
  const tabs = document.querySelectorAll(".cat-tab[data-filter]");
  const cards = document.querySelectorAll(".product-card");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const filter = tab.dataset.filter;
      cards.forEach((card) => {
        const match = filter === "tous" || card.dataset.category === filter;
        card.style.display = match ? "" : "none";
      });
    });
  });
}

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
  const text = encodeURIComponent(message || t("whatsapp.defaultMessage"));
  return `https://wa.me/${CONFIG.whatsappNumber}?text=${text}`;
}

function initWhatsappLinks() {
  document.querySelectorAll("[data-whatsapp-link]").forEach((el) => {
    el.href = buildWhatsappUrl(t("whatsapp.defaultMessage"));
    el.target = "_blank";
    el.rel = "noopener";
  });

  document.querySelectorAll("[data-whatsapp-phone]").forEach((el) => {
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
    btn.addEventListener("click", () => {
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
      showStatus(status, "success", t("form.statusFallback"));
      return;
    }

    const submitBtn = form.querySelector(".contact-submit");
    submitBtn.disabled = true;
    submitBtn.textContent = t("form.submitting");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });

      if (response.ok) {
        form.reset();
        showStatus(status, "success", t("form.statusSuccess"));
      } else {
        throw new Error("Réponse Formspree non valide");
      }
    } catch (error) {
      showStatus(status, "error", t("form.statusError"));
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t("form.submit");
    }
  });
}

function showStatus(el, type, text) {
  el.textContent = text;
  el.className = `form-status visible ${type}`;
}
