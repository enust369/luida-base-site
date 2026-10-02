if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

const resetInitialScroll = () => {
  if (!window.location.hash) {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }
};

resetInitialScroll();
window.addEventListener("pageshow", resetInitialScroll);

const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

const updateHeader = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
};

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!isOpen));
  toggle.setAttribute("aria-label", isOpen ? "メニューを開く" : "メニューを閉じる");
  nav.classList.toggle("is-open", !isOpen);
  header.classList.toggle("is-open", !isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "メニューを開く");
    nav.classList.remove("is-open");
    header.classList.remove("is-open");
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
