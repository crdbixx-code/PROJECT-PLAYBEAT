/* ═══════════════════════════════════════════════
   PlayBeat — Shared Cart + UI Logic
   Included by every page.
═══════════════════════════════════════════════ */

/* ── CART STATE ── */
let cart = JSON.parse(localStorage.getItem('pb_cart') || '[]');

function saveCart() {
  localStorage.setItem('pb_cart', JSON.stringify(cart));
  updateCartUI();
}

function addToCart(id) {
  const p = window.PB_PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const exists = cart.find(x => x.id === id);
  if (exists) {
    exists.qty = (exists.qty || 1) + 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  showToast('✓ Added to cart — ' + p.name);
}

function removeFromCart(id) {
  cart = cart.filter(x => x.id !== id);
  saveCart();
  renderCartItems();
}

function clearCart() {
  cart = [];
  saveCart();
  renderCartItems();
}

function buyNow(id) {
  addToCart(id);
  openCart();
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const p = window.PB_PRODUCTS.find(x => x.id === item.id);
    if (!p) return sum;
    return sum + (p.sale || p.price) * (item.qty || 1);
  }, 0);
}

function cartCount() {
  return cart.reduce((s, x) => s + (x.qty || 1), 0);
}

function updateCartUI() {
  const cnt = cartCount();
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = cnt;
    el.style.display = cnt > 0 ? 'block' : 'none';
  });
}

function renderCartItems() {
  const el = document.getElementById('cart-items');
  if (!el) return;
  if (cart.length === 0) {
    el.innerHTML = '<div class="cart-empty">🛒<br><br>Your cart is empty.<br>Add some products to get started.</div>';
  } else {
    el.innerHTML = cart.map(item => {
      const p = window.PB_PRODUCTS.find(x => x.id === item.id);
      if (!p) return '';
      return `<div class="cart-item">
        <div class="ci-info">
          <div class="ci-name">${p.name}</div>
          <div class="ci-price">${window.PB.fmt(p.sale || p.price)} × ${item.qty || 1}</div>
        </div>
        <button class="ci-remove" onclick="removeFromCart('${p.id}')">✕</button>
      </div>`;
    }).join('');
  }
  const totalEl = document.getElementById('cart-total-val');
  if (totalEl) totalEl.textContent = window.PB.fmt(cartTotal());
  updateCartUI();
}

function openCart() {
  document.getElementById('cart-overlay')?.classList.add('open');
  document.getElementById('cart-drawer')?.classList.add('open');
  renderCartItems();
}

function closeCart() {
  document.getElementById('cart-overlay')?.classList.remove('open');
  document.getElementById('cart-drawer')?.classList.remove('open');
}

/* ── TOAST ── */
let toastTimer;
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { t.className = ''; }, 2800);
}

/* ── SEARCH ── */
function initSearch(inputId, resultsId) {
  const input = document.getElementById(inputId);
  const results = document.getElementById(resultsId);
  if (!input || !results) return;

  input.addEventListener('input', () => {
    const q = input.value.trim();
    if (q.length < 2) { results.classList.remove('open'); return; }
    const found = window.PB.search(q).slice(0, 8);
    if (found.length === 0) {
      results.innerHTML = '<div class="sr-empty">No results found</div>';
    } else {
      results.innerHTML = found.map(p => `
        <div class="sr-item" onclick="addToCart('${p.id}'); this.closest('.search-results').classList.remove('open');">
          <span class="sr-name">${p.name}</span>
          <span class="sr-price">${window.PB.fmt(p.sale || p.price)}</span>
        </div>`).join('');
    }
    results.classList.add('open');
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove('open');
    }
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Escape') results.classList.remove('open');
    if (e.key === 'Enter' && input.value.trim()) {
      results.classList.remove('open');
      // navigate to search results (could redirect to shop page with ?q=)
    }
  });
}

/* ── MOBILE NAV ── */
function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const closeBtn  = document.querySelector('.mobile-nav-close');
  hamburger?.addEventListener('click', () => mobileNav?.classList.add('open'));
  closeBtn?.addEventListener('click',  () => mobileNav?.classList.remove('open'));
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  initSearch('topbar-search', 'topbar-results');
  initSearch('hero-search-input', 'hero-search-results');
  initMobileNav();

  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('cart-btn')?.addEventListener('click', openCart);
  document.getElementById('cart-close')?.addEventListener('click', closeCart);
  document.getElementById('cart-clear-btn')?.addEventListener('click', clearCart);
  document.getElementById('cart-checkout-btn')?.addEventListener('click', () => {
    if (cart.length === 0) { showToast('Cart is empty!', 'err'); return; }
    showToast('✓ Order placed! Check your email.', 'ok');
    clearCart();
    closeCart();
  });
});
