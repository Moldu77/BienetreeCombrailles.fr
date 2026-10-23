document.addEventListener("DOMContentLoaded", function () {
  /* ---- Menu mobile ---- */
  var toggle = document.getElementById("nav-toggle");
  var navbar = document.getElementById("navbar");

  if (toggle && navbar) {
    toggle.addEventListener("click", function () {
      var isOpen = navbar.classList.toggle("show");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute(
        "aria-label",
        isOpen ? "Fermer le menu" : "Ouvrir le menu",
      );
    });

    navbar.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navbar.classList.remove("show");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Ouvrir le menu");
      });
    });
  }

  /* ---- Année courante dans le pied de page ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- Lien de navigation actif au défilement (page d'accueil) ---- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll('#navbar a[href^="#"]');

  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          navLinks.forEach(function (link) {
            link.classList.toggle(
              "is-active",
              link.getAttribute("href") === "#" + entry.target.id,
            );
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  /* ---- Formulaire de contact : envoi sans rechargement (Formspree) ---- */
  var form = document.getElementById("contactForm");
  var responseMessage = document.getElementById("responseMessage");

  if (form && responseMessage && window.fetch) {
    var submitBtn = form.querySelector('button[type="submit"]');
    var submitHtml = submitBtn.innerHTML;

    var showMessage = function (text, type) {
      responseMessage.textContent = text;
      responseMessage.className = "message is-" + type;
    };

    form.addEventListener("submit", function (event) {
      // Le navigateur a déjà vérifié les champs obligatoires avant d'arriver ici.
      event.preventDefault();

      submitBtn.disabled = true;
      submitBtn.textContent = "Envoi en cours…";
      responseMessage.className = "message";
      responseMessage.textContent = "";

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            showMessage(
              "Merci, votre message a bien été envoyé ! Je vous réponds sous 48 h.",
              "success",
            );
            return;
          }
          return response.json().then(function (data) {
            var detail =
              data && data.errors
                ? data.errors
                    .map(function (e) {
                      return e.message;
                    })
                    .join(", ")
                : "";
            throw new Error(detail);
          });
        })
        .catch(function (error) {
          showMessage(
            "Le message n'a pas pu être envoyé" +
              (error.message ? " (" + error.message + ")" : "") +
              ". Réessayez ou appelez le 06 19 92 03 58.",
            "error",
          );
        })
        .finally(function () {
          submitBtn.disabled = false;
          submitBtn.innerHTML = submitHtml;
        });
    });
  }

  /* ---- Carte Google Maps chargée uniquement au clic (pas de cookie sans action) ---- */
  document.querySelectorAll("[data-map-src]").forEach(function (button) {
    button.addEventListener("click", function () {
      var iframe = document.createElement("iframe");
      iframe.src = button.getAttribute("data-map-src");
      iframe.title = "Carte - Bien-être en Combrailles, Montfermy (63)";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;
      button.closest(".map-consent").replaceWith(iframe);
    });
  });
});
