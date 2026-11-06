/**
 * AURA COFFEE & ROASTERS — FRONT-END JAVASCRIPT
 * Features:
 * - Live Store Opening Status Calculator
 * - Interactive Menu Rendering & Category Filters & Live Search
 * - Taste Recommender / Interactive Coffee Assistant
 * - Full Cart Drawer State Management & LocalStorage Persistence
 * - Pre-filled WhatsApp Checkout Generator
 * - Table Reservation Modal & Auto Booking Code Generator
 * - Theme Switcher (Clean Light / Deep Midnight Blue)
 * - Toast Notification System & Mobile Navigation
 */

// --- 1. Product Data ---
const MENU_DATA = [
  {
    id: "sig-cold-brew",
    name: "Signature Cold Brew Aura",
    category: "signature",
    price: 38000,
    tags: ["18-hr Slow Drip", "Smooth & Sweet"],
    desc: "Kopi konsentrat seduh dingin selama 18 jam dengan perpaduan biji Toraja & Bali Kintamani.",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80",
    badge: "Best Seller"
  },
  {
    id: "azure-salt-caramel",
    name: "Azure Sea Salt Latte",
    category: "signature",
    price: 44000,
    tags: ["Signature Foam", "Sweet & Savory"],
    desc: "Double espresso, fresh milk, sirup karamel bakar artisan ditutup sea salt cloud cream biru alami.",
    image: "https://images.unsplash.com/photo-1572442388796-11668ba67e53?auto=format&fit=crop&w=600&q=80",
    badge: "Must Try"
  },
  {
    id: "blue-matcha-tonic",
    name: "Aura Butterfly Espresso Tonic",
    category: "signature",
    price: 45000,
    tags: ["Fizzy", "Citrus & Floral"],
    desc: "Gradasi bunga telang biru alami, premium tonic water, dan shot espresso Flores yang menyegarkan.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
    badge: "Refreshing"
  },
  {
    id: "vanilla-oat-latte",
    name: "Vanilla Blue Oat Latte",
    category: "espresso",
    price: 42000,
    tags: ["Plant Based", "Silky Smooth"],
    desc: "Espresso house-blend dipadukan oat milk lembut beraroma vanilla madagaskar alami.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
    badge: "Barista Pick"
  },
  {
    id: "flat-white-silk",
    name: "Velvet Flat White",
    category: "espresso",
    price: 36000,
    tags: ["Balanced", "Micro-foam"],
    desc: "Double ristretto dengan lapisan micro-foam tipis nan lembut untuk rasa kopi yang kaya dan bulat.",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "americano-clean",
    name: "Americano Clean Slate",
    category: "espresso",
    price: 30000,
    tags: ["Pure Arabica", "Crisp Clean"],
    desc: "Shot ganda espresso arabika murni disajikan hangat atau dingin dengan body ringan dan aroma cokelat.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "v60-gayo",
    name: "Manual Brew V60 Gayo Anaerob",
    category: "manual",
    price: 38000,
    tags: ["Peach", "Jasmine", "Sweet Honey"],
    desc: "Single origin Aceh Gayo dengan fermentasi anaerobik 72 jam, menghasilkan acidity buah peach yang manis.",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80",
    badge: "Specialty"
  },
  {
    id: "aeropress-kintamani",
    name: "Aeropress Kintamani Citrus",
    category: "manual",
    price: 36000,
    tags: ["Orange Blossom", "Bright"],
    desc: "Ekstraksi tekanan aeropress yang menghasilkan kejernihan rasa jeruk keprok khas pegunungan Kintamani.",
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "butter-croissant",
    name: "French Butter Croissant",
    category: "pastry",
    price: 28000,
    tags: ["Flaky", "100% French Butter"],
    desc: "Dipanggang setiap pagi. Lapisan renyah beraroma mentega Prancis dengan tekstur dalam yang empuk sarang lebah.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    badge: "Fresh Baked"
  },
  {
    id: "blueberry-scone",
    name: "Wild Blueberry Cream Scone",
    category: "pastry",
    price: 32000,
    tags: ["Berry Glaze", "Buttery"],
    desc: "Scone artisan tradisional Inggris dengan selai buah blueberry liar dan glaze lemon vanila.",
    image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "cinnamon-cardamom",
    name: "Nordic Cardamom Roll",
    category: "pastry",
    price: 34000,
    tags: ["Spiced Warmth", "Swedish Style"],
    desc: "Kudapan roti khas Skandinavia berpadu kayu manis dan biji kapulaga yang cocok disandingkan dengan manual brew.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
  }
];

// --- 2. Flavor Recommendations Mapping ---
const TASTE_RECOMMENDATIONS = {
  creamy: {
    title: "Sangat Cocok untuk Anda: Vanilla Blue Oat Latte",
    desc: "Rasa lembut susu gandum dengan sirup vanilla alami dan balance espresso yang nyaman di lambung.",
    price: 42000,
    badge: "Rekomendasi Manis & Creamy",
    id: "vanilla-oat-latte",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=400&q=80"
  },
  bold: {
    title: "Sangat Cocok untuk Anda: Americano Clean Slate",
    desc: "Ekstraksi espresso murni tanpa gula yang menonjolkan aroma dark cocoa, roasted almond, dan body padat.",
    price: 30000,
    badge: "Rekomendasi Bold & Kuat",
    id: "americano-clean",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80"
  },
  fruity: {
    title: "Sangat Cocok untuk Anda: V60 Gayo Anaerob",
    desc: "Diseduh manual dengan kertas filter V60, menghadirkan aroma jasmine floral dan kesegaran buah peach alami.",
    price: 38000,
    badge: "Rekomendasi Fruity Specialty",
    id: "v60-gayo",
    img: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=400&q=80"
  },
  refreshing: {
    title: "Sangat Cocok untuk Anda: Signature Cold Brew Aura",
    desc: "Ekstraksi es 18 jam yang menghasilkan profil rasa dingin luar biasa halus, ringan, dan zero astringency.",
    price: 38000,
    badge: "Rekomendasi Dingin Segar",
    id: "sig-cold-brew",
    img: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=400&q=80"
  }
};

// --- 3. State Management ---
let currentCategory = "all";
let searchQuery = "";
let cart = [];

// Try loading existing cart from localStorage
try {
  const savedCart = localStorage.getItem("aura_cart_v1");
  if (savedCart) {
    cart = JSON.parse(savedCart);
  }
} catch (e) {
  console.warn("Storage access restricted:", e);
}

// Utility: Format Currency to Indonesian Rupiah
function formatIDR(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

// --- 4. Store Operational Hours Check ---
function updateLiveStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 is Sunday
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeVal = hour + minute / 60;

  // Mon-Fri: 08:00 - 22:00
  // Sat-Sun: 07:30 - 23:30
  let isOpen = false;
  if (day >= 1 && day <= 5) {
    isOpen = timeVal >= 8.0 && timeVal < 22.0;
  } else {
    isOpen = timeVal >= 7.5 && timeVal < 23.5;
  }

  const dot = document.getElementById("liveDot");
  const text = document.getElementById("liveStatusText");
  const badge = document.getElementById("scheduleStatusBadge");

  if (isOpen) {
    if (dot) dot.className = "pulse-dot";
    if (text) text.innerHTML = "Kedai Buka Sekarang • Barista Siap Menyeduh";
    if (badge) {
      badge.textContent = "Buka Sekarang (Dine-in & Takeaway)";
      badge.className = "badge-status-pill open";
    }
  } else {
    if (dot) dot.className = "pulse-dot closed";
    if (text) text.innerHTML = "Sedang Tutup • Buka Pukul 08.00 WIB";
    if (badge) {
      badge.textContent = "Tutup • Buka Kembali Besok Pagi";
      badge.className = "badge-status-pill closed";
    }
  }
}

// --- 5. Menu Rendering ---
function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const emptyState = document.getElementById("emptyMenuState");
  if (!grid) return;

  const filtered = MENU_DATA.filter(item => {
    const matchCat = currentCategory === "all" || item.category === currentCategory;
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchCat && matchSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  grid.innerHTML = filtered
    .map(item => {
      const tagsHtml = item.tags
        .map(t => `<span class="flavor-tag">${t}</span>`)
        .join("");
      const badgeHtml = item.badge
        ? `<div class="badge-menu-tag">${item.badge}</div>`
        : "";

      return `
        <article class="menu-card" data-id="${item.id}">
          <div class="menu-card-thumb">
            <img src="${item.image}" alt="${item.name}" loading="lazy">
            ${badgeHtml}
          </div>
          <div class="menu-card-content">
            <div class="menu-flavor-tags">${tagsHtml}</div>
            <h3 class="menu-card-name">${item.name}</h3>
            <p class="menu-card-desc">${item.desc}</p>
            <div class="menu-card-footer">
              <span class="menu-price">${formatIDR(item.price)}</span>
              <button class="btn-add-cart" onclick="addToCartById('${item.id}')">
                <span>+ Pesan</span>
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

// --- 6. Taste Recommender Rendering ---
function renderTasteRecommendation(flavorKey) {
  const resultContainer = document.getElementById("tasteResultBox");
  const data = TASTE_RECOMMENDATIONS[flavorKey] || TASTE_RECOMMENDATIONS.creamy;

  if (!resultContainer) return;

  resultContainer.innerHTML = `
    <img src="${data.img}" alt="${data.title}" class="recom-img">
    <div class="recom-details">
      <span class="recom-badge">${data.badge}</span>
      <h3 class="recom-name">${data.title}</h3>
      <p class="recom-notes">${data.desc}</p>
      <div class="recom-bottom">
        <span class="recom-price">${formatIDR(data.price)}</span>
        <button class="btn btn-primary btn-sm" onclick="addToCartById('${data.id}')">
          + Tambahkan ke Pesanan
        </button>
      </div>
    </div>
  `;
}

// --- 7. Cart Logic & Persistence ---
function saveCart() {
  try {
    localStorage.setItem("aura_cart_v1", JSON.stringify(cart));
  } catch (e) {
    console.warn("Storage save skipped:", e);
  }
}

function updateCartUI() {
  const countBadges = [
    document.getElementById("cartCountBadge"),
    document.getElementById("drawerCartCount")
  ];
  const listContainer = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotal");
  const taxEl = document.getElementById("cartTax");
  const grandTotalEl = document.getElementById("cartGrandTotal");

  const totalItemsCount = cart.reduce((sum, item) => sum + item.qty, 0);

  // Update badge count
  countBadges.forEach(b => {
    if (b) {
      b.textContent = totalItemsCount;
      b.classList.remove("bump");
      void b.offsetWidth; // trigger reflow
      b.classList.add("bump");
    }
  });

  if (!listContainer) return;

  if (cart.length === 0) {
    listContainer.innerHTML = `
      <div class="cart-empty-state">
        <div class="empty-cup">☕</div>
        <h4>Keranjang Anda Kosong</h4>
        <p>Pilih racikan kopi atau kudapan favorit Anda dari menu.</p>
      </div>
    `;
    if (subtotalEl) subtotalEl.textContent = formatIDR(0);
    if (taxEl) taxEl.textContent = formatIDR(0);
    if (grandTotalEl) grandTotalEl.textContent = formatIDR(0);
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.1);
  const grandTotal = subtotal + tax;

  listContainer.innerHTML = cart
    .map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <span class="cart-item-price">${formatIDR(item.price)}</span>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeCartQty('${item.id}', -1)" aria-label="Kurang satu">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeCartQty('${item.id}', 1)" aria-label="Tambah satu">+</button>
        </div>
      </div>
    `)
    .join("");

  if (subtotalEl) subtotalEl.textContent = formatIDR(subtotal);
  if (taxEl) taxEl.textContent = formatIDR(tax);
  if (grandTotalEl) grandTotalEl.textContent = formatIDR(grandTotal);
}

function addToCartById(itemId) {
  const product = MENU_DATA.find(p => p.id === itemId);
  if (!product) return;

  const existing = cart.find(p => p.id === itemId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart();
  updateCartUI();
  showToast(`"${product.name}" ditambahkan ke pesanan.`);
}

function changeCartQty(itemId, delta) {
  const index = cart.findIndex(p => p.id === itemId);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function clearCart() {
  if (cart.length === 0) return;
  cart = [];
  saveCart();
  updateCartUI();
  showToast("Keranjang berhasil dikosongkan.");
}

// Drawer Open/Close
function openCart() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    drawer.classList.add("open");
    backdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeCart() {
  const drawer = document.getElementById("cartDrawer");
  const backdrop = document.getElementById("cartBackdrop");
  if (drawer && backdrop) {
    drawer.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// WhatsApp Order Generator
function checkoutWhatsApp() {
  if (cart.length === 0) {
    showToast("Keranjang Anda masih kosong.");
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;

  let message = "Halo Barista Aura Coffee Roasters, saya ingin memesan menu berikut:\n\n";
  cart.forEach((item, idx) => {
    message += `${idx + 1}. *${item.name}* (x${item.qty}) - ${formatIDR(item.price * item.qty)}\n`;
  });

  message += `\n*Subtotal:* ${formatIDR(subtotal)}`;
  message += `\n*Pajak (10%):* ${formatIDR(tax)}`;
  message += `\n*Total Pembayaran:* ${formatIDR(total)}`;
  message += `\n\n_Mohon konfirmasi ketersediaan dan estimasi waktu penyiapannya. Terima kasih!_`;

  const phone = "628123456789"; // Coffee shop official WA
  const waUrl = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
  window.open(waUrl, "_blank");
}

// --- 8. Modals: Reservation & Feedback ---
function openReserveModal() {
  const modal = document.getElementById("reserveModalBackdrop");
  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeReserveModal() {
  const modal = document.getElementById("reserveModalBackdrop");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

function openSuccessModal(code, name, guests, time) {
  const modal = document.getElementById("successModalBackdrop");
  const codeEl = document.getElementById("bookingCodeDisplay");
  const msgEl = document.getElementById("successModalMsg");

  if (codeEl) codeEl.textContent = code;
  if (msgEl) {
    msgEl.textContent = `Terima kasih, ${name}! Meja untuk ${guests} orang telah disiapkan pada jam ${time} WIB.`;
  }

  if (modal) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

function closeSuccessModal() {
  const modal = document.getElementById("successModalBackdrop");
  if (modal) {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
}

// --- 9. Toast Notification System ---
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast-icon">☕</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("toast-fadeout");
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 2800);
}

// --- 10. Theme Toggle (Light / Dark) ---
function initTheme() {
  const savedTheme = localStorage.getItem("aura_theme_mode") || "light";
  document.documentElement.setAttribute("data-theme", savedTheme);

  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("aura_theme_mode", next);
      showToast(`Tema beralih ke mode ${next === "dark" ? "Gelap (Navy)" : "Terang (Clean)"}`);
    });
  }
}

// --- 11. Event Listeners & Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Theme
  initTheme();

  // Initialize Store Status
  updateLiveStatus();
  setInterval(updateLiveStatus, 60000); // Check every minute

  // Render initial menu & cart
  renderMenu();
  updateCartUI();
  renderTasteRecommendation("creamy");

  // Filter Tabs click
  const tabButtons = document.querySelectorAll(".tab-btn");
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-category");
      renderMenu();
    });
  });

  // Search input live filter
  const searchInput = document.getElementById("menuSearchInput");
  const clearSearchBtn = document.getElementById("clearSearchBtn");
  if (searchInput) {
    searchInput.addEventListener("input", e => {
      searchQuery = e.target.value.trim();
      if (clearSearchBtn) {
        clearSearchBtn.style.display = searchQuery ? "block" : "none";
      }
      renderMenu();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchQuery = "";
        clearSearchBtn.style.display = "none";
        renderMenu();
      }
    });
  }

  // Reset filter empty state
  const resetBtn = document.getElementById("resetFilterBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      currentCategory = "all";
      searchQuery = "";
      if (searchInput) searchInput.value = "";
      if (clearSearchBtn) clearSearchBtn.style.display = "none";
      tabButtons.forEach(b => {
        b.classList.toggle("active", b.getAttribute("data-category") === "all");
      });
      renderMenu();
    });
  }

  // Taste Recommender Buttons
  const tasteBtns = document.querySelectorAll(".taste-btn");
  tasteBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      tasteBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const flavor = btn.getAttribute("data-flavor");
      renderTasteRecommendation(flavor);
    });
  });

  // Cart Drawer triggers
  const openCartBtn = document.getElementById("openCartBtn");
  const closeCartBtn = document.getElementById("closeCartBtn");
  const cartBackdrop = document.getElementById("cartBackdrop");
  const clearCartBtn = document.getElementById("clearCartBtn");
  const checkoutBtn = document.getElementById("whatsappCheckoutBtn");

  if (openCartBtn) openCartBtn.addEventListener("click", openCart);
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCart);
  if (cartBackdrop) cartBackdrop.addEventListener("click", closeCart);
  if (clearCartBtn) clearCartBtn.addEventListener("click", clearCart);
  if (checkoutBtn) checkoutBtn.addEventListener("click", checkoutWhatsApp);

  // Reservation Modals
  const reserveButtons = [
    document.getElementById("openReserveBtn"),
    document.getElementById("heroReserveBtn"),
    document.getElementById("openReserveBtn2"),
    document.getElementById("openReserveBtn3")
  ];
  reserveButtons.forEach(btn => {
    if (btn) btn.addEventListener("click", openReserveModal);
  });

  const closeReserveBtn = document.getElementById("closeReserveModalBtn");
  const reserveModalBackdrop = document.getElementById("reserveModalBackdrop");
  if (closeReserveBtn) closeReserveBtn.addEventListener("click", closeReserveModal);
  if (reserveModalBackdrop) {
    reserveModalBackdrop.addEventListener("click", e => {
      if (e.target === reserveModalBackdrop) closeReserveModal();
    });
  }

  const closeSuccessBtn = document.getElementById("closeSuccessModalBtn");
  const successModalBackdrop = document.getElementById("successModalBackdrop");
  if (closeSuccessBtn) closeSuccessBtn.addEventListener("click", closeSuccessModal);
  if (successModalBackdrop) {
    successModalBackdrop.addEventListener("click", e => {
      if (e.target === successModalBackdrop) closeSuccessModal();
    });
  }

  // Set today as min date for reservation
  const dateInput = document.getElementById("reserveDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.min = today;
    dateInput.value = today;
  }

  // Reservation Form submit
  const reserveForm = document.getElementById("reservationForm");
  if (reserveForm) {
    reserveForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("reserveName").value;
      const guests = document.getElementById("reserveGuests").value;
      const time = document.getElementById("reserveTime").value;

      // Generate random booking code e.g. AUR-9482
      const randomCode = "AUR-" + Math.floor(1000 + Math.random() * 9000);

      closeReserveModal();
      openSuccessModal(randomCode, name, guests, time);
      reserveForm.reset();
      if (dateInput) dateInput.value = new Date().toISOString().split("T")[0];
    });
  }

  // Newsletter Form submit
  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", e => {
      e.preventDefault();
      const emailInput = document.getElementById("newsletterEmail");
      if (emailInput && emailInput.value) {
        showToast("Terima kasih! Voucher diskon telah dikirim ke email Anda.");
        newsletterForm.reset();
      }
    });
  }

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenuBtn.classList.toggle("open");
      navMenu.classList.toggle("open");
    });

    // Close menu when nav link clicked
    navMenu.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        mobileMenuBtn.classList.remove("open");
        navMenu.classList.remove("open");
      });
    });
  }

  // Scroll spy & Navbar shadow on scroll
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  window.addEventListener("scroll", () => {
    if (navbar) {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    let currentSectionId = "";
    sections.forEach(sec => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentSectionId = sec.getAttribute("id");
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.toggle(
          "active",
          link.getAttribute("href") === `#${currentSectionId}`
        );
      });
    }
  });

  // Global ESC key listener to close modals/drawers
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      closeCart();
      closeReserveModal();
      closeSuccessModal();
    }
  });
});

// Explicit global exposure for inline onclick handlers
window.addToCartById = addToCartById;
window.changeCartQty = changeCartQty;
window.openCart = openCart;
window.closeCart = closeCart;
window.openReserveModal = openReserveModal;
window.closeReserveModal = closeReserveModal;

