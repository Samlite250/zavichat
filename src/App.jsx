import React, { useState, useEffect } from 'react';
import './App.css';
import DICT from './translations.js';

const PROFILES = [
  { code: 'US', name: 'Margaret W.', age: 58, country: 'USA', type: 'looking', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
  { code: 'GB', name: 'Robert H.', age: 62, country: 'UK', type: 'typing', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
  { code: 'DE', name: 'Helga S.', age: 55, country: 'Germany', type: 'looking', avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&q=80' },
  { code: 'CA', name: 'James M.', age: 49, country: 'Canada', type: 'typing', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { code: 'AU', name: 'Karen P.', age: 51, country: 'Australia', type: 'looking', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
  { code: 'SE', name: 'Lars E.', age: 60, country: 'Sweden', type: 'looking', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
  { code: 'NO', name: 'Ingrid O.', age: 57, country: 'Norway', type: 'typing', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
  { code: 'FR', name: 'Pierre D.', age: 63, country: 'France', type: 'typing', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
  { code: 'IT', name: 'Sofia R.', age: 54, country: 'Italy', type: 'looking', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80' },
  { code: 'RW', name: 'Kwizera T.', age: 29, country: 'Rwanda', type: 'looking', avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80' },
  { code: 'US', name: 'William T.', age: 67, country: 'USA', type: 'typing', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80' },
  { code: 'GB', name: 'Diane K.', age: 59, country: 'UK', type: 'typing', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80' },
];

const TESTIMONIALS = [
  { initials: 'KO', flag: '🇰🇪', name: 'Kelvin O.', country: 'Kenya', amt: '$1,240 last week', quote: 'I cleared my rent in 9 days. M-Pesa hits in seconds. Truly life-changing.', stars: 5, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
  { initials: 'AN', flag: '🇳🇬', name: 'Amaka N.', country: 'Nigeria', amt: '$860 this month', quote: "Best side hustle I've ever had. The foreigners are respectful and kind.", stars: 5, avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80' },
  { initials: 'JM', flag: '🇷🇼', name: 'Jean M.', country: 'Rwanda', amt: 'Rwf 148,000 this week', quote: 'MoMo withdrawal came through in 14 seconds. I was shocked! Zavichat is highly legitimate.', stars: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
  { initials: 'SD', flag: '🇿🇦', name: 'Sipho D.', country: 'South Africa', amt: '$1,510 this month', quote: 'I quit my night job. Zavichat pays me better and I work from my phone.', stars: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
];

const TOASTS = [
  { flag: '🇰🇪', name: 'Faith W.', country: 'Kenya', method: 'M-Pesa', amount: '$887' },
  { flag: '🇷🇼', name: 'Marie C.', country: 'Rwanda', method: 'MoMo', amount: 'Rwf 32,500' },
  { flag: '🇨🇩', name: 'Patrick K.', country: 'DR Congo', method: 'MoMo', amount: '$872' },
  { flag: '🇹🇿', name: 'Saidi H.', country: 'Tanzania', method: 'Airtel Money', amount: 'Rwf 18,200' },
  { flag: '🇳🇬', name: 'Chidi E.', country: 'Nigeria', method: 'PayPal', amount: '$620' },
];

const TICKER = [
  '💸 Kwame just earned Rwf 3,400',
  '· Sipho just earned $7.90',
  '· Kofi just earned $6.42',
  '· Marie just earned Rwf 15,200',
  '· Kelvin just earned $9.30',
  '· Jean just earned Rwf 5,100',
  '· Chidi just earned $5.20',
  '· Ama just earned $8.10',
];

const PROOF_IMAGES = [
  "proof1.jpeg", "proof2.jpeg", "proof3.jpeg",
  "proof4.jpeg", "proof5.jpeg", "proof6.jpeg",
  "proof7.jpeg", "proof8.jpeg", "proof9.jpeg",
];

export default function App() {
  const [toast, setToast] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [rebaProfile, setRebaProfile] = useState(null);
  const [lang, setLang] = useState('en');
  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const T = DICT[lang];

  useEffect(() => {
    const handleBeforeInstall = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };
    window.addEventListener('beforeinstallprompt', handleBeforeInstall);
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => setDeferredPrompt(null));
    } else {
      alert("Installation is not currently supported in this browser, or the app is already installed.");
    }
  };

  useEffect(() => {
    let i = 0;
    const show = () => {
      setToast(TOASTS[i % TOASTS.length]);
      i++;
      setTimeout(() => setToast(null), 4000);
    };
    const id = setInterval(show, 5500);
    show();
    return () => clearInterval(id);
  }, []);

  return (
    <div className="page">

      {/* ── Top earnings ticker ── */}
      <div className="ticker-bar">
        <div className="ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i}>{t}&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>

      {/* ── Navigation ── */}
      <nav className="nav">
        <a href="#" className="nav-logo">
          <img src="/logo.png" alt="Zavichat Logo" className="nav-logo-img" />
          Zavi<span className="accent">Chat</span>
        </a>

        {/* Desktop nav-right */}
        <div className="nav-right">
          <div className="online-pill">
            <span className="pulse-dot" />
            {T.nav_online}
          </div>
          <select className="lang-switcher" value={lang} onChange={e => setLang(e.target.value)}>
            <option value="en">🇬🇧 EN</option>
            <option value="rw">🇷🇼 RW</option>
            <option value="fr">🇫🇷 FR</option>
          </select>
          <button className="btn-gallery" onClick={() => setGalleryOpen(true)}>{T.nav_gallery}</button>
          <button onClick={handleInstallClick} className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{T.nav_install}</button>
          <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
            {T.nav_start}
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Mobile top-bar right controls */}
        <div className="mobile-nav-right">
          <select className="mobile-header-lang" value={lang} onChange={e => setLang(e.target.value)}>
            <option value="en">🇬🇧 EN</option>
            <option value="rw">🇷🇼 RW</option>
            <option value="fr">🇫🇷 FR</option>
          </select>

          {/* Hamburger — mobile only */}
          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer Backdrop ── */}
      {menuOpen && (
        <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} />
      )}

      {/* ── Mobile Side Drawer ── */}
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        <div className="drawer-header">
          <a href="#" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <img src="/logo.png" alt="Zavichat Logo" className="nav-logo-img" style={{ width: 36, height: 36 }} />
            Zavi<span className="accent">Chat</span>
          </a>
          <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Segmented Language Selector inside Drawer */}
        <div className="drawer-lang-section">
          <div className="drawer-lang-title">{T.dict_lang_title || 'Select Language / Hitamo Ururimi'}</div>
          <div className="lang-segmented-control">
            <button className={`lang-seg-btn ${lang === 'en' ? 'active' : ''}`} onClick={() => setLang('en')}>
              🇬🇧 English
            </button>
            <button className={`lang-seg-btn ${lang === 'rw' ? 'active' : ''}`} onClick={() => setLang('rw')}>
              🇷🇼 Kinyarwanda
            </button>
            <button className={`lang-seg-btn ${lang === 'fr' ? 'active' : ''}`} onClick={() => setLang('fr')}>
              🇫🇷 Français
            </button>
          </div>
        </div>

        <div className="drawer-online">
          <span className="pulse-dot" />
          <span>1,918 {T.drawer_online}</span>
        </div>

        <div className="drawer-divider" />

        <nav className="drawer-nav">
          <a href="#" className="drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="drawer-link-icon"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></span>
            {T.drawer_how}
          </a>
          <a href="#" className="drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="drawer-link-icon"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg></span>
            {T.drawer_earnings}
          </a>
          <a href="#" className="drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="drawer-link-icon"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg></span>
            {T.drawer_testimonials}
          </a>
          <a href="#" className="drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="drawer-link-icon"><svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg></span>
            {T.drawer_faq}
          </a>
        </nav>

        <div className="drawer-divider" />

        <div className="drawer-ctas">
          <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="drawer-btn-primary" onClick={() => setMenuOpen(false)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              {T.drawer_start}
            </div>
          </a>
          <button onClick={() => { setMenuOpen(false); handleInstallClick(); }} className="drawer-btn-ghost" style={{ width: '100%', border: 'none', backgroundColor: 'transparent' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
              {T.drawer_install}
            </div>
          </button>
          <button onClick={() => { setMenuOpen(false); setGalleryOpen(true); }} className="drawer-btn-ghost" style={{ width: '100%', border: 'none', backgroundColor: 'rgba(10,132,255,0.06)', marginTop: '8px', color: '#0A84FF', fontWeight: 700 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              {T.drawer_gallery}
            </div>
          </button>
        </div>

        <div className="drawer-footer-note" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          {T.drawer_trust}
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-trust">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          {T.trust_badge}
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: T.hero_title }}></h1>
        <p className="hero-sub">{T.hero_sub}</p>
        <div className="hero-ctas">
          <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="btn-primary-lg" style={{ textDecoration: 'none' }}>
            {T.start_btn}
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <button onClick={handleInstallClick} className="btn-outline-lg" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{T.install_btn}</button>
        </div>
        <div className="hero-checkmarks">
          <span className="check-item"><span className="chk">✔</span> {T.check_withdraw}</span>
          <span className="check-item"><span className="chk">✔</span> {T.check_skill}</span>
          <span className="check-item"><span className="chk">✔</span> {T.check_support}</span>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        <div className="stat-item"><div className="stat-num">80,000+</div><div className="stat-label">{T.stat_earners}</div></div>
        <div className="stat-item"><div className="stat-num">$1.2M+</div><div className="stat-label">{T.stat_paid}</div></div>
        <div className="stat-item"><div className="stat-num">1,918</div><div className="stat-label">{T.stat_online}</div></div>
        <div className="stat-item"><div className="stat-num">4.9 ⭐</div><div className="stat-label">{T.stat_trust}</div></div>
      </div>

      {/* ── WhatsApp Community Band ── */}
      <div className="wa-band-wrapper">
        <div className="wa-band">
          <div className="wa-band-text">
            <h3>{T.wa_title}</h3>
            <p>{T.wa_sub}</p>
          </div>
          <button className="btn-wa" onClick={() => window.open('https://chat.whatsapp.com/CKYjAanhccELoIaeWdavhX', '_blank')}>{T.wa_btn}</button>
        </div>
      </div>

      {/* ── How It Works Section ── */}
      <section className="how-section">
        <div className="how-intro">
          <h2>{T.how_h2}</h2>
          <p>{T.how_p}</p>
        </div>
        <div className="how-steps-header">
          <h3>{T.how_steps_h3}</h3>
          <p>{T.how_steps_p}</p>
        </div>
        <div className="how-grid">
          <div className="how-card">
            <div className="how-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg></div>
            <h4>{T.step1_h}</h4><p>{T.step1_p}</p>
          </div>
          <div className="how-card">
            <div className="how-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg></div>
            <h4>{T.step2_h}</h4><p>{T.step2_p}</p>
          </div>
          <div className="how-card">
            <div className="how-icon"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg></div>
            <h4>{T.step3_h}</h4><p>{T.step3_p}</p>
          </div>
        </div>
      </section>

      {/* ── Value Section ── */}
      <section className="value-section">
        <div>
          <div className="value-label">{T.value_label}</div>
          <h2>{T.value_h2}</h2>
          <p>{T.value_p}</p>
          <div className="benefit-list">
            {[
              ['💬', T.benefit_1],
              ['💰', T.benefit_2],
              ['⚡', T.benefit_3],
              ['🌍', T.benefit_4],
              ['🔒', T.benefit_5],
            ].map(([icon, text], i) => (
              <div className="benefit-item" key={i}>
                <div className="benefit-icon">{icon}</div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="value-img-wrap">
          <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80" alt="African woman earning on her phone" />
          <div className="value-img-badge">
            <div className="vib-icon">💳</div>
            <div className="vib-text">
              <strong>$1,240 withdrawn</strong>
              <span>via M-Pesa · 14 seconds ago</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live Foreigners ── */}
      <section className="profiles-section">
        <div className="section-header">
          <div className="section-tag">{T.profiles_tag}</div>
          <h2>{T.profiles_h2}</h2>
          <p>{T.profiles_p}</p>
        </div>
        <div className="profiles-grid">
          {PROFILES.map((p, i) => (
            <div className="profile-card" key={i}>
              <div className="pc-top">
                <div className="pc-avatar-wrap">
                  <img src={p.avatar} alt={p.name} className="pc-avatar"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(p.name)}&background=0A84FF&color=fff`; }}
                  />
                  <span className="pc-online" />
                </div>
                <div className="pc-info">
                  <div className="pc-name">{p.name} · {p.age}</div>
                  <div className="pc-meta">
                    <span className="pc-flag">{p.code}</span>
                    <span className="pc-country">{p.country}</span>
                  </div>
                  <div className={`pc-status ${p.type}`}>
                    {p.type === 'typing' ? (
                      <span className="typing-indicator">
                        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
                      </span>
                    ) : '👀 Ashaka kuvugana 💬'}
                  </div>
                </div>
              </div>
              <div className="pc-actions">
                <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="pc-btn-start" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>{T.tangira}</a>
                <button className="pc-btn-watch" onClick={() => setRebaProfile(p)}>{T.reba}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="profiles-more">{T.profiles_more}</div>
      </section>

      {/* ── Real-time earnings ticker ── */}
      <div className="earn-ticker-wrap">
        <div className="earn-ticker-track">
          {[...TOASTS, ...TOASTS, ...TOASTS].map((t, i) => (
            <div className="earn-item" key={i}>
              <img src={PROFILES[i % PROFILES.length].avatar} alt="" className="earn-avatar"
                onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0A84FF&color=fff`; }}
              />
              <span>{t.flag} {t.name} {T.toast_withdrew}</span>
              <strong className="earn-amount">{t.amount}</strong>
              <span style={{ color: '#94a3b8' }}>{T.toast_via} {t.method}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Testimonials ── */}
      <section className="testimonials-section">
        <div className="section-header">
          <div className="section-tag">{T.testi_tag}</div>
          <h2>{T.testi_h2}</h2>
          <p>{T.testi_p}</p>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-top">
                <div className="testi-avatar-wrap">
                  <img src={t.avatar} alt={t.name} className="testi-avatar-img"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=0A84FF&color=fff`; }}
                  />
                  <span className="testi-flag-badge">{t.flag}</span>
                </div>
                <div className="testi-info">
                  <strong>{t.name}</strong>
                  <span>{t.country}</span>
                </div>
              </div>
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <div className="earned-pill">💰 {t.amt}</div>
              <p className="testi-quote">"{t.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="faq-section">
        <div className="section-header">
          <div className="section-tag">{T.faq_tag}</div>
          <h2>{T.faq_h2}</h2>
          <p>{T.faq_p}</p>
        </div>
        <div className="faq-list">
          {T.faqs.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div className={`faq-item ${isOpen ? 'open' : ''}`} key={i} onClick={() => setOpenFaq(isOpen ? null : i)}>
                <div className="faq-q">
                  {f.q}
                  <span className="faq-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="5" x2="12" y2="19"></line>
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                  </span>
                </div>
                <div className="faq-a-wrap" style={{ maxHeight: isOpen ? '200px' : '0' }}>
                  <p className="faq-a">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="cta-section">
        <h2>{T.cta_h2}</h2>
        <p>{T.cta_p}</p>
        <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="btn-cta-white" style={{ textDecoration: 'none' }}>
          {T.cta_btn}
        </a>
        <div className="cta-trust">
          <span>{T.cta_signup}</span>
          <span>{T.cta_payouts}</span>
          <span>{T.cta_trust}</span>
          <span>{T.cta_earners}</span>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="footer-logo">
              <img src="/logo.webp" alt="Zavichat Logo" className="footer-logo-img" />
              Zavi<span className="accent">Chat</span>
            </a>
            <p>{T.footer_about}</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>{T.footer_company}</h4>
              <a href="#">{T.footer_about_link}</a>
              <a href="#">{T.footer_how}</a>
              <a href="#">{T.footer_testimonials}</a>
            </div>
            <div className="footer-col">
              <h4>{T.footer_legal}</h4>
              <a href="#">{T.footer_terms}</a>
              <a href="#">{T.footer_privacy}</a>
              <a href="#">{T.footer_cookies}</a>
            </div>
            <div className="footer-col">
              <h4>{T.footer_support}</h4>
              <a href="#">{T.footer_contact}</a>
              <a href="https://chat.whatsapp.com/CKYjAanhccELoIaeWdavhX" target="_blank" rel="noopener noreferrer">{T.footer_wa}</a>
              <a href="#">{T.footer_faq}</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{T.footer_copy}</span>
          <span>{T.footer_secure}</span>
        </div>
      </footer>

      {/* ── Live Payout Toast ── */}
      {toast && (
        <div className="toast-container">
          <div className="toast">
            <span className="toast-flag">{toast.flag}</span>
            <div className="toast-body">
              <strong>{toast.name}</strong>
              <span>{toast.country} · {T.toast_via} {toast.method} · just now</span>
            </div>
            <span className="toast-amount">{toast.amount}</span>
          </div>
        </div>
      )}

      {/* ── Gallery Modal ── */}
      {galleryOpen && (
        <div className="gallery-overlay" onClick={() => setGalleryOpen(false)}>
          <div className="gallery-modal" onClick={e => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setGalleryOpen(false)} aria-label="Close Gallery">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
            <div className="gallery-header">
              <h2>{T.gallery_h2}</h2>
              <p>{T.gallery_p}</p>
            </div>
            <div className="gallery-grid">
              {PROOF_IMAGES.map((img, i) => (
                <div key={i} className="gallery-img-wrap">
                  <img src={`/withdrwalproofs/${img}`} alt="Payment Proof" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Reba Profile Modal ── */}
      {rebaProfile && (
        <div className="gallery-overlay" onClick={() => setRebaProfile(null)}>
          <div className="profile-detail-modal" onClick={e => e.stopPropagation()}>
            <button className="gallery-modal-close" onClick={() => setRebaProfile(null)}>✕</button>
            <div className="pdm-header">
              <img src={rebaProfile.avatar} alt={rebaProfile.name} className="pdm-avatar" />
              <div className="pdm-status pulse-dot"></div>
            </div>
            <div className="pdm-body">
              <h3>{rebaProfile.name}, {rebaProfile.age}</h3>
              <div className="pdm-location">📍 {rebaProfile.country}</div>
              <div className="pdm-rate">
                <span className="rate-badge">{T.reba_earn}</span>
              </div>
              <p className="pdm-desc">{T.reba_desc_tpl(rebaProfile.name)}</p>
              <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="btn-primary-lg pdm-btn">
                {T.reba_cta_tpl(rebaProfile.name.split(' ')[0])}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
