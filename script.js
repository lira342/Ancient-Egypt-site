
const BOOKS = [
  {
    id: "b1",
    title: "",
    author: "",
    price: 34.99,
    rating: 4.9,
    category: "",
    coverUrl: "assets/images/egyptian_book_cover_1782238887562.jpg",
    description: "",
    pages: 352,
    year: "1250 BCE",
    tags: [""],
  },
  {
    id: "b2",
    title: "Chronicles of the Pharaohs",
    author: "Dr. Evelyn Sandborn",
    price: 24.5,
    rating: 4.8,
    category: "history",
    coverUrl:
      "https://images.unsplash.com/photo-1608155686393-8fdd966d784d?auto=format&fit=crop&q=80&w=600",
    description: "",
    pages: 280,
    year: "2024 CE",
    tags: ["Dynasties", "Rulers", "Historical"],
  },
  {
    id: "b3",
    title: "Egyptian Mythology & Gods",
    author: "Marcus Aurelius Vance",
    price: 19.99,
    rating: 4.7,
    category: "mythology",
    coverUrl:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=600",
    description: "",
    pages: 310,
    year: "2023 CE",
    tags: ["Deities", "Cosmology", "Mythology"],
  },
  {
    id: "b4",
    title: "Art & Architecture of the Nile",
    author: "Prof. Julian Carter",
    price: 45.0,
    rating: 4.9,
    category: "art",
    coverUrl:
      "https://images.unsplash.com/photo-1503177119275-0aa32b31d468?auto=format&fit=crop&q=80&w=600",
    description: "",
    pages: 420,
    year: "2022 CE",
    tags: ["Temples", "Architecture", "Gold Crafts"],
  },
  {
    id: "b5",
    title: "Sacred Rituals & Magic (Heka)",
    author: "Lady Sophia Vance",
    price: 29.99,
    rating: 4.6,
    category: "rituals",
    coverUrl:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&q=80&w=600",
    description: "",
    pages: 240,
    year: "2021 CE",
    tags: ["Heka", "Amulets", "Incantations"],
  },
  {
    id: "b6",
    title: "Cleopatra: Last Queen of Egypt",
    author: "Dr. Jean-Pierre Dubois",
    price: 22.0,
    rating: 4.8,
    category: "history",
    coverUrl:
      "https://images.unsplash.com/photo-1599140849279-1014532882fe?auto=format&fit=crop&q=80&w=600",
    description: "",
    pages: 330,
    year: "2024 CE",
    tags: ["Cleopatra", "Diplomacy", "Ptolemaic"],
  },
];

const POSTERS = [
  {
    id: "p1",
    title: "Giza Plateau at Sunrise",
    size: '18" x 24"',
    price: 18.99,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&q=80&w=800",
    description: "",
  },
  {
    id: "p2",
    title: "The Royal Bust of Nefertiti",
    size: '18" x 24"',
    price: 19.99,
    rating: 5.0,
    imageUrl: "assets/images/nefertiti_bust_1782238844088.jpg",
    description:
      "Exclusive gallery print featuring the timeless beauty of Queen Nefertiti with a dark royal linen border.",
  },
  {
    id: "p3",
    title: "The Great Sphinx Guarding Giza",
    size: '24" x 36"',
    price: 24.99,
    rating: 4.8,
    imageUrl:
      "https://images.unsplash.com/photo-1503177119275-0aa32b31d468?auto=format&fit=crop&q=80&w=800",
    description:
      "Architectural landscape print capturing the Great Sphinx of Giza, highlighting its weathered stone carvings.",
  },
  {
    id: "p4",
    title: "The Golden Face of Tutankhamun",
    size: '18" x 24"',
    price: 21.99,
    rating: 4.9,
    imageUrl:
      "https://images.unsplash.com/photo-1600577916048-804c9191e36c?auto=format&fit=crop&q=80&w=800",
    description:
      "Studio macro print of the iconic 11kg pure gold death mask of Pharaoh Tutankhamun.",
  },
];

const THRONE_ROOM_1_HOTSPOTS = {
  h1_1: {
    title: "Winged Scarab of Khepri",
    description:
      "A blue-glazed ceramic scarab symbolizing self-creation, rebirth, and the daily rotation of the morning sun across the sky.",
  },
  h1_2: {
    title: "The Golden Throne of the Pharaoh",
    description:
      "The golden seat of ultimate authority, carved from cedar wood, sheeted with pure gold, and inlaid with silver and glass paste.",
  },
  h1_3: {
    title: "The Guardian Anubis",
    description:
      "A life-sized jackal deity statue, serving as protector of the sacred chamber and weighing of souls in the hall of Ma'at.",
  },
  h1_4: {
    title: "Papyrus Pillars of Karnak",
    description:
      "Massive sandstone columns shaped like open papyrus plants, painted in deep red, blue, and gold to represent the primordial swamp of creation.",
  },
};

const THRONE_ROOM_2_HOTSPOTS = {
  h2_1: {
    title: "Hieroglyphs of eternal life",
    description:
      "Engravings on Gilded Sandstone that document the pharaoh's bloodline, victories, and divine approval from the sun-god Ra.",
  },
  h2_2: {
    title: "Incense Altar",
    description:
      "Burning imported frankincense and myrrh, creating a heavy scented mist that elevates prayers and purification rituals.",
  },
  h2_3: {
    title: "Scepter of Power (Was)",
    description:
      "A straight staff with a forked base, topped with a canine-like head, representing power, dominion, and stability.",
  },
  h2_4: {
    title: "Eye of Horus Ceiling Medallion",
    description:
      "A massive gold relief of the Wedjat eye, representing healing, protection, and the pharaoh's all-seeing wisdom over Upper and Lower Egypt.",
  },
};

const FEATURED_BOOK_PAGES = [
  {
    chapter: "I. The Awakening in Duat",
    text: "“Behold, I am Ra in his rising, I am the great cat who dwells in the garden of the divine sycamore. O you lords of the horizon, clear the way for my soul, let me pass through the gate of the underworld unhindered. I have clothed myself in fine linen, my forehead is anointed with sweet pine oil, and my hands hold the Scepter of Stability.”",
    ritual:
      "The Spell for Coming Forth by Day, to be recited over a golden amulet of the heart.",
  },
  {
    chapter: "II. The Weighing of the Heart",
    text: "“My heart of my mother, my heart of my mother, my heart of my earthly being! Stand not up against me as a witness, oppose me not in the council of the great gods. Let there be no lie spoken against me in the presence of Osiris, the Lord of Eternity, for I have fed the hungry, given water to the thirsty, and clothed the naked on the Nile banks.”",
    ritual:
      "Recited when the heart is placed on the golden scales of Ma'at against the Feather of Truth.",
  },
  {
    chapter: "III. Sailing the Solar Bark",
    text: "“The sky is in labor, the earth brings forth, and Osiris sleeps. The sun bark sails past the serpent Apophis, slain by the spears of the horizon-dwellers. Enter the great river, O traveling light, and shine upon the faces of those who sleep in the tombs. Let their spirits rise to greet the eternal cycle of dawn.”",
    ritual:
      "The spell for navigating the twelve gates of the night hours with the Solar Barque.",
  },
];

// ==========================================================================
// APPLICATION CORE STATE
// ==========================================================================

let cart = [];
let currentParchmentPage = 0;
let currentSearchQuery = "";
let currentCategoryFilter = "all";

// Load cart state from localStorage
function initCartState() {
  const savedCart = localStorage.getItem("egypt_chronicles_cart");
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
  updateCartBadges();
}

function saveCartState() {
  localStorage.setItem("egypt_chronicles_cart", JSON.stringify(cart));
  updateCartBadges();
  renderCartDrawerItems();
}

// ==========================================================================
// INITIALIZATION AND EVENT ATTACHMENTS
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Initialize states
  initCartState();
  initCountdownTimer();

  // Render Dynamic Grids
  renderPostersGrid();
  renderBookstoreGrid();

  // Attach Static Handlers
  setupNavigationHandlers();
  setupThroneHotspotHandlers();
  setupFeaturedActions();
  setupSearchAndFilters();
  setupPromoClipboard();
  setupNewsletterForm();
  setupCartDrawer();
  setupModals();
});

// ==========================================================================
// NAVIGATION HANDLERS (Sticky Nav, Mobile Drawer & Scroll Down)
// ==========================================================================

function setupNavigationHandlers() {
  const header = document.getElementById("main-nav");
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileDrawer = document.getElementById("mobile-nav-drawer");
  const scrollDownBtn = document.getElementById("scroll-down-button");
  const logoLink = document.getElementById("logo-link");

  // Sticky header class adding
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu burger toggle
  mobileToggle.addEventListener("click", () => {
    mobileDrawer.classList.toggle("open");
  });

  // Close mobile nav drawer when clicking any link
  const mobileLinks = mobileDrawer.querySelectorAll(".mobile-nav-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileDrawer.classList.remove("open");
    });
  });

  // Logo link click (smooth scroll to top)
  logoLink.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Scroll Down Indicator Button
  if (scrollDownBtn) {
    scrollDownBtn.addEventListener("click", () => {
      const mythologySection = document.getElementById("mythology");
      if (mythologySection) {
        mythologySection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Intercept desktop links for smooth scrolling adjustments if desired
  const desktopLinks = document.querySelectorAll(
    ".desktop-nav a, .footer-col a",
  );
  desktopLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });

  // Mythology LEARN MORE button navigate to bookstore
  const mythologyCta = document.getElementById("mythology-cta-learn-more");
  if (mythologyCta) {
    mythologyCta.addEventListener("click", () => {
      const bookstoreSection = document.getElementById("bookstore");
      if (bookstoreSection) {
        bookstoreSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }

  // Hero Section CTA button triggers
  const heroCtaLearnMore = document.getElementById("hero-cta-learn-more");
  if (heroCtaLearnMore) {
    heroCtaLearnMore.addEventListener("click", () => {
      const mythologySection = document.getElementById("mythology");
      if (mythologySection) {
        mythologySection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
}

// ==========================================================================
// INTERACTIVE THRONE ROOM HOTSPOTS
// ==========================================================================

function setupThroneHotspotHandlers() {
  // Throne Room I Hotspots
  const h1Hotspots = document.querySelectorAll("#throne-room-1 .hotspot");
  const relicPanel1 = document.getElementById("relic-panel-1");

  h1Hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
      // Toggle active states on buttons
      h1Hotspots.forEach((h) => h.classList.remove("active"));
      hotspot.classList.add("active");

      const hotspotId = hotspot.getAttribute("data-id");
      const data = THRONE_ROOM_1_HOTSPOTS[hotspotId];

      if (data) {
        relicPanel1.classList.remove("default-state");
        relicPanel1.classList.add("active-state");
        relicPanel1.innerHTML = `
          <h3 class="panel-title">${data.title}</h3>
          <div class="panel-line"></div>
          <p class="panel-desc">${data.description}</p>
          <button class="panel-close-btn" id="close-relic-1">
            <span>Close Details</span>
            <svg class="close-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        `;

        // Attach closer
        document
          .getElementById("close-relic-1")
          .addEventListener("click", () => {
            resetThroneRoomPanel(1);
          });
      }
    });
  });

  // Throne Room II Hotspots
  const h2Hotspots = document.querySelectorAll("#throne-room-2 .hotspot");
  const relicPanel2 = document.getElementById("relic-panel-2");

  h2Hotspots.forEach((hotspot) => {
    hotspot.addEventListener("click", () => {
      // Toggle active states on buttons
      h2Hotspots.forEach((h) => h.classList.remove("active"));
      hotspot.classList.add("active");

      const hotspotId = hotspot.getAttribute("data-id");
      const data = THRONE_ROOM_2_HOTSPOTS[hotspotId];

      if (data) {
        relicPanel2.classList.remove("default-state");
        relicPanel2.classList.add("active-state", "relic-panel-style-2");
        relicPanel2.innerHTML = `
          <h3 class="panel-title">${data.title}</h3>
          <div class="panel-line"></div>
          <p class="panel-desc">${data.description}</p>
          <button class="panel-close-btn" id="close-relic-2">
            <span>Close Details</span>
            <svg class="close-chevron-down" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
        `;

        // Attach closer
        document
          .getElementById("close-relic-2")
          .addEventListener("click", () => {
            resetThroneRoomPanel(2);
          });
      }
    });
  });
}

function resetThroneRoomPanel(roomNumber) {
  if (roomNumber === 1) {
    const relicPanel1 = document.getElementById("relic-panel-1");
    const h1Hotspots = document.querySelectorAll("#throne-room-1 .hotspot");
    h1Hotspots.forEach((h) => h.classList.remove("active"));
    relicPanel1.classList.remove("active-state");
    relicPanel1.classList.add("default-state");
    relicPanel1.innerHTML = `
      <h3 class="panel-title">Chamber of Divine Order</h3>
      <div class="panel-line"></div>
      <p class="panel-desc">
        This illustration recreates Throne Room I, modeled after the Great Hypostyle Halls of the New Kingdom. Here, the pharaoh administered laws under the watch of Anubis and the protective sun disk of Horus (Khepri).
      </p>
      <div class="panel-alert">
        <svg class="alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <p class="alert-text">
          Select any illuminated eye icon on the left viewport to read about the sacred properties and significance of the temple carvings.
        </p>
      </div>
    `;
  } else if (roomNumber === 2) {
    const relicPanel2 = document.getElementById("relic-panel-2");
    const h2Hotspots = document.querySelectorAll("#throne-room-2 .hotspot");
    h2Hotspots.forEach((h) => h.classList.remove("active"));
    relicPanel2.classList.remove("active-state", "relic-panel-style-2");
    relicPanel2.classList.add("default-state");
    relicPanel2.innerHTML = `
      <h3 class="panel-title">The Pharaonic Throne of Ra</h3>
      <div class="panel-line"></div>
      <p class="panel-desc">
        Throne Room II represents the absolute spiritual center of Upper Egypt—the private solar sanctuary where the pharaoh communed directly with the priesthood of Heliopolis.
      </p>
      <div class="panel-alert">
        <svg class="alert-icon text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="12 2 2 22 22 22"></polygon>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <p class="alert-text">
          Tap the gold eye nodules inside the dark sandstone sanctum on the right to read the rituals inscribed on Giza rock.
        </p>
      </div>
    `;
  }
}

// ==========================================================================
// RENDER DYNAMIC POSTERS GRID
// ==========================================================================

function renderPostersGrid() {
  const container = document.getElementById("posters-grid-container");
  if (!container) return;

  container.innerHTML = POSTERS.map(
    (poster) => `
    <article class="poster-card">
      <div class="poster-media-box">
        <img src="${poster.imageUrl}" alt="${poster.title}" class="poster-img">
        <span class="size-stamp">${poster.size}</span>
        <span class="rating-stamp">
          <span class="star-mini">★</span>
          <span>${poster.rating.toFixed(1)}</span>
        </span>
        <div class="poster-hover-layer">
          <button class="btn btn-primary btn-add-chest" data-type="poster" data-id="${poster.id}"></button>
        </div>
      </div>
      <div class="poster-body">
        <div class="poster-meta">
          <h3 class="poster-title">${poster.title}</h3>
          <p class="poster-desc">${poster.description}</p>
        </div>
        <div class="poster-footer">
          <span class="poster-price">$${poster.price.toFixed(2)}</span>
          <button class="poster-buy-btn btn-add-chest" data-type="poster" data-id="${poster.id}">BUY PRINT</button>
        </div>
      </div>
    </article>
  `,
  ).join("");

  // Attach cart triggers
  container.querySelectorAll(".btn-add-chest").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const posterId = btn.getAttribute("data-id");
      const poster = POSTERS.find((p) => p.id === posterId);
      if (poster) {
        addItemToCart({
          id: poster.id,
          title: poster.title,
          price: poster.price,
          coverUrl: poster.imageUrl,
          category: "Fine Art Print",
        });
      }
    });
  });
}

// ==========================================================================
// FEATURED BOOK ACTIONS (Parchment & Buy)
// ==========================================================================

function setupFeaturedActions() {
  const addToCartBtn = document.getElementById("featured-add-to-cart");
  const lookInsideBtn = document.getElementById("featured-preview-inside");

  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const bookOfTheDead = BOOKS.find((b) => b.id === "b1");
      if (bookOfTheDead) {
        addItemToCart({
          id: bookOfTheDead.id,
          title: bookOfTheDead.title,
          price: bookOfTheDead.price,
          coverUrl: bookOfTheDead.coverUrl,
          category: "Sacred Codex",
        });
      }
    });
  }

  if (lookInsideBtn) {
    lookInsideBtn.addEventListener("click", () => {
      openParchmentModal();
    });
  }
}

// ==========================================================================
// PROMOTIONAL COUNTDOWN TIMER & CLIPBOARD
// ==========================================================================

function initCountdownTimer() {
  let secondsLeft = 43200; // 12 hours total

  const hElem = document.getElementById("hours-left");
  const mElem = document.getElementById("minutes-left");
  const sElem = document.getElementById("seconds-left");

  if (!hElem || !mElem || !sElem) return;

  const timer = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(timer);
      hElem.textContent = "00";
      mElem.textContent = "00";
      sElem.textContent = "00";
      return;
    }

    const hours = Math.floor(secondsLeft / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    hElem.textContent = String(hours).padStart(2, "0");
    mElem.textContent = String(minutes).padStart(2, "0");
    sElem.textContent = String(seconds).padStart(2, "0");
  }, 1000);
}

function setupPromoClipboard() {
  const btn = document.getElementById("promo-copy-code-button");
  const copyIconState = document.getElementById("copy-icon-state");
  const copyBtnText = document.getElementById("copy-btn-text");

  if (!btn) return;

  btn.addEventListener("click", () => {
    // Standard clipboard copy API
    navigator.clipboard
      .writeText("PHARAOH25")
      .then(() => {
        btn.style.backgroundColor = "#d4af37";
        btn.style.color = "#0c0a09";
        copyBtnText.textContent = "COPIED SPELL!";

        // Update icon to checkmark
        if (copyIconState) {
          copyIconState.innerHTML = `
          <polyline points="20 6 9 17 4 12"></polyline>
        `;
        }

        setTimeout(() => {
          btn.style.backgroundColor = "";
          btn.style.color = "";
          copyBtnText.textContent = "SECURE DECREE";
          if (copyIconState) {
            copyIconState.innerHTML = `
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          `;
          }
        }, 3000);
      })
      .catch((err) => {
        console.error("Failed to copy text", err);
      });
  });
}

// ==========================================================================
// SCROLLS LIBRARY BOOKSTORE (Filters & Search)
// ==========================================================================

function setupSearchAndFilters() {
  const tabs = document.querySelectorAll("#category-filter-tabs .tab-btn");
  const searchInput = document.getElementById("bazaar-search-input");
  const clearBtn = document.getElementById("search-clear-btn");
  const resetBtn = document.getElementById("empty-reset-btn");

  // Category selection click
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategoryFilter = tab.getAttribute("data-category");
      applyFiltering();
    });
  });

  // Search input change
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchQuery = e.target.value.toLowerCase().trim();
      if (currentSearchQuery) {
        clearBtn.classList.remove("hidden");
      } else {
        clearBtn.classList.add("hidden");
      }
      applyFiltering();
    });
  }

  // Clear search button clicked
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      currentSearchQuery = "";
      clearBtn.classList.add("hidden");
      applyFiltering();
    });
  }

  // Reset empty state button clicked
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tabs[0].classList.add("active"); // Set to 'All'
      if (searchInput) {
        searchInput.value = "";
      }
      if (clearBtn) {
        clearBtn.classList.add("hidden");
      }
      currentCategoryFilter = "all";
      currentSearchQuery = "";
      applyFiltering();
    });
  }
}

function applyFiltering() {
  const filtered = BOOKS.filter((book) => {
    // 1. Filter Category
    const matchesCategory =
      currentCategoryFilter === "all" ||
      book.category === currentCategoryFilter;

    // 2. Filter Search Query
    const query = currentSearchQuery;
    const matchesSearch =
      !query ||
      book.title.toLowerCase().includes(query) ||
      book.author.toLowerCase().includes(query) ||
      book.tags.some((t) => t.toLowerCase().includes(query)) ||
      book.description.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  renderBookstoreGrid(filtered);
}

function renderBookstoreGrid(booksToRender = BOOKS) {
  const container = document.getElementById("bookstore-grid-container");
  const emptyState = document.getElementById("books-empty-state");

  if (!container) return;

  // Clear or Show Empty state
  if (booksToRender.length === 0) {
    container.classList.add("hidden");
    emptyState.classList.remove("hidden");
    return;
  } else {
    container.classList.remove("hidden");
    emptyState.classList.add("hidden");
  }

  container.innerHTML = booksToRender
    .map(
      (book) => `
    <article class="book-card">
      <div class="book-media-box">
        <img src="${book.coverUrl}" alt="${book.title}" class="book-img">
        <span class="category-stamp">${book.category}</span>
        <div class="book-hover-layer">
          <button class="btn btn-outline btn-qv" data-id="${book.id}"></button>
          <button class="btn btn-primary btn-add-chest" data-type="book" data-id="${book.id}"></button>
        </div>
      </div>
      <div class="book-body">
        <div class="book-meta-top">
          <h3 class="book-card-title">${book.title}</h3>
          <span class="book-author-meta">by ${book.author}</span>
        </div>
        <p class="book-card-desc">${book.description}</p>
        
        <div class="book-tags-list">
          ${book.tags.map((t) => `<span class="tag-badge">#${t}</span>`).join("")}
        </div>

        <div class="book-footer">
          <span class="book-price-val">$${book.price.toFixed(2)}</span>
          <button class="book-acquire-action btn-add-chest" data-type="book" data-id="${book.id}">ACQUIRE</button>
        </div>
      </div>
    </article>
  `,
    )
    .join("");

  // Attach dynamic event triggers (Add To Chest & Quick View)
  container.querySelectorAll(".btn-add-chest").forEach((btn) => {
    btn.addEventListener("click", () => {
      const bookId = btn.getAttribute("data-id");
      const book = BOOKS.find((b) => b.id === bookId);
      if (book) {
        addItemToCart({
          id: book.id,
          title: book.title,
          price: book.price,
          coverUrl: book.coverUrl,
          category:
            book.category === "rituals" ? "Sacred Codex" : "Papyrus Scroll",
        });
      }
    });
  });

  container.querySelectorAll(".btn-qv").forEach((btn) => {
    btn.addEventListener("click", () => {
      const bookId = btn.getAttribute("data-id");
      const book = BOOKS.find((b) => b.id === bookId);
      if (book) {
        openQuickViewModal(book);
      }
    });
  });
}

// ==========================================================================
// NEWSLETTER FORM HANDLER
// ==========================================================================

function setupNewsletterForm() {
  const form = document.getElementById("subscribe-form");
  const successBox = document.getElementById("subscription-success-box");
  const emailInput = document.getElementById("subscriber-email");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailInput && emailInput.value) {
      // Hide form, show beautiful gilded message box
      form.classList.add("hidden");
      successBox.classList.remove("hidden");

      // Auto-reset form after 5 seconds
      setTimeout(() => {
        emailInput.value = "";
        form.classList.remove("hidden");
        successBox.classList.add("hidden");
      }, 5000);
    }
  });
}

// ==========================================================================
// SHOPPING CART DRAWER SYSTEM (LocalState & Checkout protocols)
// ==========================================================================

function setupCartDrawer() {
  const cartBtn = document.getElementById("cart-trigger-button");
  const overlay = document.getElementById("cart-drawer-overlay");
  const drawer = document.getElementById("cart-drawer");
  const closeBtn = document.getElementById("cart-close-btn");
  const checkoutBtn = document.getElementById("drawer-checkout-btn");
  const editCartBtn = document.getElementById("checkout-back-btn");

  // Open Cart
  cartBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    overlay.classList.remove("hidden");
    drawer.classList.add("open");
    drawer.classList.remove("hidden");
    renderCartDrawerItems();
  });

  // Close Cart (Overlay click or close button)
  const closeCartDrawer = () => {
    overlay.classList.remove("active");
    drawer.classList.remove("open");
    setTimeout(() => {
      overlay.classList.add("hidden");
      drawer.classList.add("hidden");
    }, 300);
  };

  overlay.addEventListener("click", closeCartDrawer);
  closeBtn.addEventListener("click", closeCartDrawer);

  // Checkout flows toggle (Procedural Steps)
  const stepCart = document.getElementById("cart-step-view");
  const stepCheckout = document.getElementById("checkout-step-view");
  const stepSuccess = document.getElementById("success-step-view");
  const stickySummary = document.getElementById("drawer-summary-footer");
  const drawerTitle = document.getElementById("drawer-title");

  checkoutBtn.addEventListener("click", () => {
    stepCart.classList.add("hidden");
    stickySummary.classList.add("hidden");
    stepCheckout.classList.remove("hidden");
    drawerTitle.textContent = "SCRIBE REGISTRATION";
  });

  editCartBtn.addEventListener("click", () => {
    stepCheckout.classList.add("hidden");
    stepCart.classList.remove("hidden");
    stickySummary.classList.remove("hidden");
    drawerTitle.textContent = "THE GOLDEN TREASURY";
  });

  // Success Step finish button (done back to kingdom)
  const doneBtn = document.getElementById("success-done-btn");
  doneBtn.addEventListener("click", () => {
    stepSuccess.classList.add("hidden");
    stepCart.classList.remove("hidden");
    stickySummary.classList.remove("hidden");
    drawerTitle.textContent = "THE GOLDEN TREASURY";
    closeCartDrawer();
  });

  // Form Submit Checkout Process
  const checkoutForm = document.getElementById("checkout-form");
  checkoutForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("recipient-name").value;
    const receiptName = document.getElementById("receipt-recipient-name");

    if (receiptName) {
      receiptName.textContent = nameInput || "Noble Scribe";
    }

    // Switch step
    stepCheckout.classList.add("hidden");
    stepSuccess.classList.remove("hidden");
    drawerTitle.textContent = "SACRED ORDER COMMITTED";

    // Clear cart entirely
    cart = [];
    saveCartState();
    checkoutForm.reset();
  });
}

// Add item wrapper
function addItemToCart(item) {
  const existing = cart.find((x) => x.id === item.id);
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      id: item.id,
      title: item.title,
      price: item.price,
      coverUrl: item.coverUrl,
      category: item.category,
      quantity: 1,
    });
  }

  // Save, calculate totals
  saveCartState();

  // Highlight cart button with a quick bounce scale animation
  const cartBtn = document.getElementById("cart-trigger-button");
  cartBtn.style.transform = "scale(1.25)";
  setTimeout(() => {
    cartBtn.style.transform = "";
  }, 300);

  // Auto slide-open drawer to show feedback!
  const overlay = document.getElementById("cart-drawer-overlay");
  const drawer = document.getElementById("cart-drawer");
  if (drawer.classList.contains("hidden")) {
    overlay.classList.add("active");
    overlay.classList.remove("hidden");
    drawer.classList.add("open");
    drawer.classList.remove("hidden");
    renderCartDrawerItems();
  }
}

// Update badges counts in header nav
function updateCartBadges() {
  const badge = document.getElementById("cart-count-badge");
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.textContent = totalCount;
  }
}

// Render cart contents inside Drawer
function renderCartDrawerItems() {
  const container = document.getElementById("cart-step-view");
  const stickySummary = document.getElementById("drawer-summary-footer");
  const totalValElem = document.getElementById("drawer-cart-total");

  // Reset steps views to default when opened
  document.getElementById("checkout-step-view").classList.add("hidden");
  document.getElementById("success-step-view").classList.add("hidden");
  document.getElementById("cart-step-view").classList.remove("hidden");
  document.getElementById("drawer-title").textContent = "THE GOLDEN TREASURY";

  if (!container) return;

  if (cart.length === 0) {
    stickySummary.classList.add("hidden");
    container.innerHTML = `
      <div class="cart-empty-box">
        <div class="cart-empty-icon">🏜️</div>
        <h4 class="cart-empty-title">Your chest is completely empty</h4>
        <p class="cart-empty-desc">Equip yourself with Giza papyrus prints, sacred scriptures and legendary leather codices.</p>
        <a href="#bookstore" class="btn btn-primary" id="cart-empty-bazaar-link">GO TO BAZAAR</a>
      </div>
    `;

    // Click event to close cart and scroll to bazaar
    const emptyLink = document.getElementById("cart-empty-bazaar-link");
    if (emptyLink) {
      emptyLink.addEventListener("click", (e) => {
        e.preventDefault();

        // Close drawer
        document
          .getElementById("cart-drawer-overlay")
          .classList.remove("active");
        document.getElementById("cart-drawer").classList.remove("open");
        setTimeout(() => {
          document
            .getElementById("cart-drawer-overlay")
            .classList.add("hidden");
          document.getElementById("cart-drawer").classList.add("hidden");
        }, 300);

        // Scroll
        const bookstoreSection = document.getElementById("bookstore");
        if (bookstoreSection) {
          bookstoreSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
    return;
  }

  // If there are items, compute and render
  stickySummary.classList.remove("hidden");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  totalValElem.textContent = `$${subtotal.toFixed(2)}`;

  container.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item-row">
      <img src="${item.coverUrl}" alt="${item.title}" class="cart-item-img">
      <div class="cart-item-details">
        <div class="item-meta-top">
          <span class="item-type">${item.category}</span>
          <h4 class="item-title">${item.title}</h4>
          <span class="item-price">$${item.price.toFixed(2)}</span>
        </div>

        <div class="item-actions-row">
          <!-- quantity plus/minus -->
          <div class="qty-control">
            <button class="qty-btn btn-qty-minus" data-id="${item.id}">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn btn-qty-plus" data-id="${item.id}">+</button>
          </div>

          <!-- remove button -->
          <button class="trash-btn btn-trash" data-id="${item.id}" aria-label="Remove item">
            <svg class="trash-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="10" y1="11" x2="10" y2="17"></line>
              <line x1="14" y1="11" x2="14" y2="17"></line>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `,
    )
    .join("");

  // Attach controls listeners
  container.querySelectorAll(".btn-qty-minus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const itemId = btn.getAttribute("data-id");
      const item = cart.find((x) => x.id === itemId);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          // Remove if it drops to 0
          cart = cart.filter((x) => x.id !== itemId);
        }
        saveCartState();
      }
    });
  });

  container.querySelectorAll(".btn-qty-plus").forEach((btn) => {
    btn.addEventListener("click", () => {
      const itemId = btn.getAttribute("data-id");
      const item = cart.find((x) => x.id === itemId);
      if (item) {
        item.quantity++;
        saveCartState();
      }
    });
  });

  container.querySelectorAll(".btn-trash").forEach((btn) => {
    btn.addEventListener("click", () => {
      const itemId = btn.getAttribute("data-id");
      cart = cart.filter((x) => x.id !== itemId);
      saveCartState();
    });
  });
}


function setupModals() {
  const parchmentOverlay = document.getElementById("parchment-modal-overlay");
  const parchmentClose = document.getElementById("parchment-close-btn");

  const qvOverlay = document.getElementById("quickview-modal-overlay");
  const qvClose = document.getElementById("quickview-close-btn");

  // Closers Parchment
  const closeParchment = () => {
    parchmentOverlay.classList.remove("active");
    document.getElementById("parchment-modal").classList.remove("active");
    setTimeout(() => {
      parchmentOverlay.classList.add("hidden");
      document.getElementById("parchment-modal").classList.add("hidden");
    }, 300);
  };
  parchmentOverlay.addEventListener("click", closeParchment);
  parchmentClose.addEventListener("click", closeParchment);

  // Closers Quick View
  const closeQuickView = () => {
    qvOverlay.classList.remove("active");
    document.getElementById("quickview-modal").classList.remove("active");
    setTimeout(() => {
      qvOverlay.classList.add("hidden");
      document.getElementById("quickview-modal").classList.add("hidden");
    }, 300);
  };
  qvOverlay.addEventListener("click", closeQuickView);
  qvClose.addEventListener("click", closeQuickView);

  // Pagination page hooks for Parchment inside
  document
    .getElementById("parchment-prev-btn")
    .addEventListener("click", () => {
      if (currentParchmentPage > 0) {
        currentParchmentPage--;
        renderParchmentPage();
      }
    });

  document
    .getElementById("parchment-next-btn")
    .addEventListener("click", () => {
      if (currentParchmentPage < FEATURED_BOOK_PAGES.length - 1) {
        currentParchmentPage++;
        renderParchmentPage();
      }
    });
}

/* Parchment Look Inside Modal Open */
function openParchmentModal() {
  currentParchmentPage = 0;

  const overlay = document.getElementById("parchment-modal-overlay");
  const modal = document.getElementById("parchment-modal");

  overlay.classList.remove("hidden");
  overlay.classList.add("active");
  modal.classList.remove("hidden");
  modal.classList.add("active");

  renderParchmentPage();
}

function renderParchmentPage() {
  const pageContainer = document.getElementById("parchment-page-content");
  const prevBtn = document.getElementById("parchment-prev-btn");
  const nextBtn = document.getElementById("parchment-next-btn");

  const data = FEATURED_BOOK_PAGES[currentParchmentPage];
  if (!data) return;

  pageContainer.innerHTML = `
    <span class="page-index">Hymn ${currentParchmentPage + 1} of ${FEATURED_BOOK_PAGES.length}</span>
    <h4 class="page-chapter">${data.chapter}</h4>
    <p class="page-text">${data.text}</p>
    <div class="page-ritual-block">
      <span class="ritual-label">Scribe Ritual Inscription</span>
      <p class="ritual-text">${data.ritual}</p>
    </div>
  `;

  // Update button disabled state
  prevBtn.disabled = currentParchmentPage === 0;
  nextBtn.disabled = currentParchmentPage === FEATURED_BOOK_PAGES.length - 1;
}

/* Bookstore Quick View Modal Open */
function openQuickViewModal(book) {
  const overlay = document.getElementById("quickview-modal-overlay");
  const modal = document.getElementById("quickview-modal");

  // Populate dynamic data
  document.getElementById("qv-book-cover").src = book.coverUrl;
  document.getElementById("qv-book-cover").alt = book.title;
  document.getElementById("qv-book-category").textContent =
    `${book.category} codex`;
  document.getElementById("qv-book-title").textContent = book.title;
  document.getElementById("qv-book-author").textContent = `by ${book.author}`;
  document.getElementById("qv-book-desc").textContent = book.description;
  document.getElementById("qv-book-year").textContent = `Era: ${book.year}`;
  document.getElementById("qv-book-pages").textContent =
    `Length: ${book.pages} pg`;
  document.getElementById("qv-book-price").textContent =
    `$${book.price.toFixed(2)}`;

  // Attach button trigger action to Quick View Acquire button
  const acquireBtn = document.getElementById("qv-acquire-btn");
  // Recreate button to wipe old listeners cleanly
  const newAcquireBtn = acquireBtn.cloneNode(true);
  acquireBtn.parentNode.replaceChild(newAcquireBtn, acquireBtn);

  newAcquireBtn.addEventListener("click", () => {
    addItemToCart({
      id: book.id,
      title: book.title,
      price: book.price,
      coverUrl: book.coverUrl,
      category: book.category === "rituals" ? "Sacred Codex" : "Papyrus Scroll",
    });

    // Auto close quickview modal
    overlay.classList.remove("active");
    modal.classList.remove("active");
    setTimeout(() => {
      overlay.classList.add("hidden");
      modal.classList.add("hidden");
    }, 300);
  });

  overlay.classList.remove("hidden");
  overlay.classList.add("active");
  modal.classList.remove("hidden");
  modal.classList.add("active");
}

// Character One's triptych (3 unique images)
const triptychData = {
    one: {
        left:   '/assets/Ramesses-Character-Design-LEFT.jpg',   // Character 1 left
        center: '/assets/Ramesses-Character-Design-CENTER.jpg',  // Character 1 center
        right:  '/assets/Ramesses-Character-Design-RIGHT.jpg'   // Character 1 right
    },
    two: {
        left:   '/assets/ramesis phenyo left.png',   // Character 2 left
        center: '/assets/RAMESIS3-01.jpg',  // Character 2 center
        right:  '/assets/ramesis phenyo right.png'
    }
};

function openTriptych(character) {
    const data = triptychData[character];
    if (!data) return;

    document.getElementById('triptych-left-img').src   = data.left;
    document.getElementById('triptych-center-img').src = data.center;
    document.getElementById('triptych-right-img').src  = data.right;

    document.getElementById('triptych-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeTriptych(event) {
    if (event.target.classList.contains('triptych-modal') || 
        event.target.classList.contains('triptych-close')) {
        document.getElementById('triptych-modal').classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('triptych-modal').classList.remove('active');
        document.body.style.overflow = '';
    }
});

const cards = document.querySelectorAll('.card-image');
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const modalCaption = document.getElementById('modalCaption');
        const closeBtn = modal.querySelector('.modal-close');

        cards.forEach(card => {
            card.addEventListener('click', () => {
                const img = card.querySelector('img');
                modalImg.src = img.src;
                modalCaption.textContent = img.alt;
                modal.classList.add('active');
            });
        });

        function closeModal() {
            modal.classList.remove('active');
        }

        closeBtn.addEventListener('click', closeModal);

        //modal.addEventListener('click', (e) => {
         //   if (e.target === modal) closeModal();
       // });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
