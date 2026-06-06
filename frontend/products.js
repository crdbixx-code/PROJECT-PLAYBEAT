/* ═══════════════════════════════════════════════
   PlayBeat — Central Product Data Store
   Edit this file to add / update products.
   All pages pull from window.PB_PRODUCTS.
═══════════════════════════════════════════════ */

window.PB_PRODUCTS = [
  /* ── GAMES ── */
  { id:'g1',  name:'GTA V Premium Edition',     category:'games',         price:4999,  sale:3799, badge:'HOT',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=GTA+V',          desc:'Rockstar Social Club key — instant delivery', stock:100, sold:47,  featured:true,  active:true },
  { id:'g2',  name:'Elden Ring',                category:'games',         price:7999,  sale:6499, badge:'NEW',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Elden+Ring',      desc:'Steam PC key — global',                       stock:50,  sold:12,  featured:true,  active:true },
  { id:'g3',  name:'Red Dead Redemption 2',     category:'games',         price:5499,  sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=RDR2',            desc:'Rockstar key — PC',                           stock:30,  sold:8,   featured:false, active:true },
  { id:'g4',  name:'Cyberpunk 2077',            category:'games',         price:3999,  sale:2999, badge:'SALE',   img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Cyberpunk',       desc:'Steam key — includes Phantom Liberty',         stock:75,  sold:31,  featured:false, active:true },
  { id:'g5',  name:'Baldurs Gate 3',            category:'games',         price:8499,  sale:null, badge:'TOP',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=BG3',             desc:'Steam key — full release',                    stock:20,  sold:19,  featured:true,  active:true },
  { id:'g6',  name:'Call of Duty MW3',          category:'games',         price:9999,  sale:7999, badge:'HOT',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=COD+MW3',         desc:'Battle.net — PC',                             stock:60,  sold:22,  featured:false, active:true },

  /* ── GIFT CARDS ── */
  { id:'gc1', name:'Steam Wallet $10',          category:'gift-cards',    price:2799,  sale:2499, badge:'12% OFF',img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Steam+$10',       desc:'Global Steam credit code',                    stock:200, sold:88,  featured:true,  active:true },
  { id:'gc2', name:'Steam Wallet $25',          category:'gift-cards',    price:6799,  sale:5999, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Steam+$25',       desc:'Global Steam credit code',                    stock:150, sold:41,  featured:false, active:true },
  { id:'gc3', name:'PlayStation Store $20',     category:'gift-cards',    price:5699,  sale:null, badge:'PSN',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=PSN+$20',         desc:'PS4/PS5 wallet top-up',                       stock:80,  sold:27,  featured:false, active:true },
  { id:'gc4', name:'Xbox Game Pass $15',        category:'gift-cards',    price:4199,  sale:3799, badge:'VALUE',  img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Xbox+$15',        desc:'Microsoft Store credit',                      stock:90,  sold:15,  featured:false, active:true },
  { id:'gc5', name:'Google Play $10',           category:'gift-cards',    price:2899,  sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Google+Play',     desc:'Android app & game credit',                   stock:120, sold:33,  featured:false, active:true },
  { id:'gc6', name:'Apple App Store $25',       category:'gift-cards',    price:6999,  sale:6299, badge:'NEW',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Apple+$25',       desc:'iOS & Mac App Store credit',                  stock:70,  sold:9,   featured:true,  active:true },

  /* ── SOFTWARE ── */
  { id:'sw1', name:'Adobe Creative Cloud',      category:'software',      price:14999, sale:11999,badge:'BEST',   img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Adobe+CC',        desc:'All Apps — 1 year subscription',              stock:40,  sold:18,  featured:true,  active:true },
  { id:'sw2', name:'Microsoft Office 2024',     category:'software',      price:12999, sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Office+2024',     desc:'Lifetime license — PC & Mac',                 stock:55,  sold:24,  featured:false, active:true },
  { id:'sw3', name:'Windows 11 Pro Key',        category:'software',      price:4999,  sale:3999, badge:'SALE',   img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Win+11+Pro',      desc:'Genuine digital license',                     stock:100, sold:62,  featured:false, active:true },
  { id:'sw4', name:'Malwarebytes Premium',      category:'software',      price:2999,  sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Malwarebytes',    desc:'1 device — 1 year protection',                stock:5,   sold:3,   featured:false, active:true },

  /* ── AI TOOLS ── */
  { id:'ai1', name:'ChatGPT Plus 1 Month',      category:'ai-tools',      price:5999,  sale:5499, badge:'NEW',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=ChatGPT+Plus',    desc:'GPT-4o + DALL-E access',                      stock:60,  sold:29,  featured:true,  active:true },
  { id:'ai2', name:'Midjourney Basic Plan',     category:'ai-tools',      price:2799,  sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Midjourney',      desc:'~200 image generations/month',                stock:40,  sold:11,  featured:false, active:true },
  { id:'ai3', name:'Claude Pro 1 Month',        category:'ai-tools',      price:5999,  sale:5299, badge:'HOT',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Claude+Pro',       desc:'Priority access + Projects',                  stock:35,  sold:17,  featured:true,  active:true },
  { id:'ai4', name:'Canva Pro Annual',          category:'ai-tools',      price:7999,  sale:5999, badge:'25% OFF',img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Canva+Pro',        desc:'Full design suite + AI tools',                stock:80,  sold:44,  featured:false, active:true },

  /* ── GAME ITEMS ── */
  { id:'gi1', name:'Valorant 1000 VP',          category:'game-items',    price:1599,  sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Val+1000+VP',     desc:'Valorant Points — global',                    stock:999, sold:201, featured:false, active:true },
  { id:'gi2', name:'Valorant Elderflame Bundle',category:'game-items',    price:24999, sale:21999,badge:'RARE',   img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Elderflame',       desc:'Full weapon skin bundle',                     stock:10,  sold:2,   featured:true,  active:true },
  { id:'gi3', name:'Fortnite V-Bucks 2800',     category:'game-items',    price:4299,  sale:3799, badge:'VALUE',  img:'https://placehold.co/400x220/0d1b2a/f5a623?text=VBucks+2800',     desc:'Epic Games — all platforms',                  stock:150, sold:73,  featured:false, active:true },
  { id:'gi4', name:'PUBG UC 660',               category:'game-items',    price:1999,  sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=PUBG+UC+660',     desc:'Unknown Cash — mobile',                       stock:200, sold:89,  featured:false, active:true },

  /* ── ACCOUNTS ── */
  { id:'ac1', name:'Netflix Premium 1M',        category:'accounts',      price:1499,  sale:1199, badge:'HOT',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Netflix+1M',      desc:'4K UHD — shared premium account',             stock:25,  sold:14,  featured:true,  active:true },
  { id:'ac2', name:'Spotify Premium 3M',        category:'accounts',      price:1999,  sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Spotify+3M',      desc:'Individual plan — no ads',                    stock:30,  sold:7,   featured:false, active:true },
  { id:'ac3', name:'YouTube Premium 1M',        category:'accounts',      price:999,   sale:799,  badge:'NEW',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=YouTube+1M',      desc:'Ad-free + background play',                   stock:50,  sold:21,  featured:false, active:true },
  { id:'ac4', name:'Disney+ 1 Month',           category:'accounts',      price:1299,  sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Disney%2B+1M',    desc:'Full library access',                         stock:40,  sold:10,  featured:false, active:true },

  /* ── SUBSCRIPTIONS ── */
  { id:'sb1', name:'PS Plus Essential 1M',      category:'subscriptions', price:1999,  sale:1699, badge:'PS',     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=PS+Plus',         desc:'Free games + online play',                    stock:60,  sold:28,  featured:false, active:true },
  { id:'sb2', name:'Xbox Game Pass Ultimate 1M',category:'subscriptions', price:2499,  sale:2099, badge:'VALUE',  img:'https://placehold.co/400x220/0d1b2a/f5a623?text=GP+Ultimate',     desc:'100+ games + Gold + EA Play',                 stock:75,  sold:36,  featured:true,  active:true },
  { id:'sb3', name:'EA Play 1 Month',           category:'subscriptions', price:999,   sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=EA+Play',         desc:'PC & console access',                         stock:100, sold:19,  featured:false, active:true },
  { id:'sb4', name:'Crunchyroll Premium 1M',    category:'subscriptions', price:1499,  sale:1299, badge:'ANIME',  img:'https://placehold.co/400x220/0d1b2a/f5a623?text=Crunchyroll',     desc:'Ad-free anime streaming',                     stock:45,  sold:13,  featured:false, active:true },

  /* ── TOP UP ── */
  { id:'tu1', name:'Free Fire 520 Diamonds',    category:'top-up',        price:1299,  sale:1099, badge:'FF',     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=FF+520',          desc:'Garena — global top-up',                      stock:500, sold:214, featured:false, active:true },
  { id:'tu2', name:'Mobile Legends 86 Diamonds',category:'top-up',        price:699,   sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=ML+86',           desc:'MLBB — direct top-up',                        stock:500, sold:97,  featured:false, active:true },
  { id:'tu3', name:'PUBG Mobile 325 UC',        category:'top-up',        price:2299,  sale:1999, badge:'HOT',    img:'https://placehold.co/400x220/0d1b2a/f5a623?text=PUBG+325',        desc:'Tencent — mobile UC',                         stock:300, sold:128, featured:true,  active:true },
  { id:'tu4', name:'Clash of Clans 1200 Gems',  category:'top-up',        price:1799,  sale:null, badge:null,     img:'https://placehold.co/400x220/0d1b2a/f5a623?text=CoC+Gems',        desc:'Supercell — iOS & Android',                   stock:200, sold:55,  featured:false, active:true },
];

/* ── ADMIN CONSTANTS ── */
window.PB_LOW_STOCK = 10; // products with stock ≤ this are flagged as low stock

/* Helper — get products by category */
window.PB = {
  byCat: (cat) => window.PB_PRODUCTS.filter(p => p.category === cat && p.active !== false),
  trending: () => window.PB_PRODUCTS.filter(p => ['HOT','TOP','BEST','RARE'].includes(p.badge) && p.active !== false),
  sale: () => window.PB_PRODUCTS.filter(p => p.sale && p.active !== false),
  all: () => window.PB_PRODUCTS.filter(p => p.active !== false),
  featured: () => window.PB_PRODUCTS.filter(p => p.featured && p.active !== false),
  lowStock: () => window.PB_PRODUCTS.filter(p => p.stock != null && p.stock <= window.PB_LOW_STOCK && p.active !== false),
  hidden: () => window.PB_PRODUCTS.filter(p => p.active === false),
  countByCat: (cat) => window.PB_PRODUCTS.filter(p => p.category === cat && p.active !== false).length,
  search: (q) => {
    const lq = q.toLowerCase();
    return window.PB_PRODUCTS.filter(p =>
      p.active !== false && (
        p.name.toLowerCase().includes(lq) ||
        p.category.includes(lq) ||
        (p.desc && p.desc.toLowerCase().includes(lq))
      )
    );
  },
  fmt: (n) => 'Rs ' + Number(n).toLocaleString('en-PK'),
  card: (p) => {
    const outOfStock = p.stock != null && p.stock === 0;
    const lowStock   = p.stock != null && p.stock > 0 && p.stock <= window.PB_LOW_STOCK;
    const stockBadge = outOfStock
      ? `<div class="pcard-stock-badge out">Out of Stock</div>`
      : lowStock
        ? `<div class="pcard-stock-badge low">Only ${p.stock} left!</div>`
        : '';
    return `
    <div class="pcard${outOfStock ? ' pcard-oos' : ''}" data-id="${p.id}">
      ${p.badge ? `<div class="pcard-badge">${p.badge}</div>` : ''}
      ${stockBadge}
      <div class="pcard-img-wrap">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
      </div>
      <div class="pcard-body">
        <h3 class="pcard-name">${p.name}</h3>
        <p class="pcard-desc">${p.desc||''}</p>
        <div class="pcard-price">
          ${p.sale
            ? `<span class="pcard-orig">${window.PB.fmt(p.price)}</span>
               <span class="pcard-sale">${window.PB.fmt(p.sale)}</span>`
            : `<span class="pcard-sale">${window.PB.fmt(p.price)}</span>`}
        </div>
        <div class="pcard-actions">
          <button class="btn-cart" onclick="addToCart('${p.id}')"${outOfStock ? ' disabled' : ''}>Add to Cart</button>
          <button class="btn-buy"  onclick="buyNow('${p.id}')"${outOfStock ? ' disabled' : ''}>Buy Now</button>
        </div>
      </div>
    </div>`;
  }
};
