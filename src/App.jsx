import React, { useState, useEffect } from 'react';
import './App.css';

const PROFILES = [
  { code: 'US', name: 'Margaret W.', age: 58, country: 'USA', type: 'looking', avatar: '68' },
  { code: 'GB', name: 'Robert H.', age: 62, country: 'UK', type: 'typing', avatar: '59' },
  { code: 'DE', name: 'Helga S.', age: 55, country: 'Germany', type: 'looking', avatar: '44' },
  { code: 'CA', name: 'James M.', age: 49, country: 'Canada', type: 'typing', avatar: '66' },
  { code: 'AU', name: 'Karen P.', age: 51, country: 'Australia', type: 'looking', avatar: '33' },
  { code: 'SE', name: 'Lars E.', age: 60, country: 'Sweden', type: 'looking', avatar: '22' },
  { code: 'NO', name: 'Ingrid O.', age: 57, country: 'Norway', type: 'typing', avatar: '21' },
  { code: 'FR', name: 'Pierre D.', age: 63, country: 'France', type: 'typing', avatar: '19' },
  { code: 'IT', name: 'Sofia R.', age: 54, country: 'Italy', type: 'looking', avatar: '14' },
  { code: 'RW', name: 'Kwizera T.', age: 29, country: 'Rwanda', type: 'looking', avatar: '12' },
  { code: 'US', name: 'William T.', age: 67, country: 'USA', type: 'typing', avatar: '11' },
  { code: 'GB', name: 'Diane K.', age: 59, country: 'UK', type: 'typing', avatar: '5' },
];

const TESTIMONIALS = [
  { initials: 'KO', flag: '🇰🇪', name: 'Kelvin O.', country: 'Kenya', amt: '$1,240 last week', quote: 'I cleared my rent in 9 days. M-Pesa hits in seconds. Truly life-changing.', stars: 5 },
  {
    initials: 'AN', flag: '🇳🇬', name: 'Amaka N.', country: 'Nigeria', amt: '$860 this month', quote: "Best side hustle I've ever had. The foreigners are respectful and kind.", stars: 5
  },
  { initials: 'JM', flag: '🇷🇼', name: 'Jean M.', country: 'Rwanda', amt: 'Rwf 148,000 this week', quote: 'MoMo withdrawal came through in 14 seconds. I was shocked! Zavichat is highly legitimate.', stars: 5 },
  { initials: 'SD', flag: '🇿🇦', name: 'Sipho D.', country: 'South Africa', amt: '$1,510 this month', quote: 'I quit my night job. Zavichat pays me better and I work from my phone.', stars: 5 },
];

const FAQS = [
  { q: 'How much can I actually make?', a: 'It fully depends on your hustle. Active chatters pull in a solid side income weekly. The longer you keep the conversation going, the more money drops into your account.' },
  { q: 'Is this a scam?', a: 'No. Zavichat is a registered platform that has paid out over $1.2 Million. You don’t pay us anything — we pay you for your chatting time. Cash out your balance anytime.' },
  { q: 'Do I need special skills?', a: 'Not at all. If you know how to text on WhatsApp and keep a guy entertained, you’re good to go. Just be fun and friendly.' },
  { q: 'How long do withdrawals take?', a: 'Seconds. Once you hit withdraw, the money hits your M-Pesa, MoMo, or bank account almost instantly.' },
  { q: 'Is my identity protected?', a: '100%. You use a chat alias (fake name) and your real details are never shared with anyone you talk to.' },
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

export default function App() {
  const [toast, setToast] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

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
          <img src="/logo.webp" alt="Zavichat Logo" className="nav-logo-img" />
          Zavi<span className="accent">Chat</span>
        </a>

        {/* Desktop nav-right */}
        <div className="nav-right">
          <div className="online-pill">
            <span className="pulse-dot" />
            1,918 online
          </div>
          <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Install App</a>
          <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ textDecoration: 'none' }}>
            Start Earning
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Mobile Drawer Backdrop ── */}
      {menuOpen && (
        <div className="drawer-backdrop" onClick={() => setMenuOpen(false)} />
      )}

      {/* ── Mobile Side Drawer ── */}
      <div className={`mobile-drawer${menuOpen ? ' open' : ''}`}>
        {/* Drawer header */}
        <div className="drawer-header">
          <a href="#" className="nav-logo" onClick={() => setMenuOpen(false)}>
            <img src="/logo.webp" alt="Zavichat Logo" className="nav-logo-img" style={{ width: 36, height: 36 }} />
            Zavi<span className="accent">Chat</span>
          </a>
          <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Online Status */}
        <div className="drawer-online">
          <span className="pulse-dot" />
          <span>1,918 users online right now</span>
        </div>

        <div className="drawer-divider" />

        {/* Nav Links */}
        <nav className="drawer-nav">
          <a href="#" className="drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="drawer-link-icon">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </span> How It Works
          </a>
          <a href="#" className="drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="drawer-link-icon">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            </span> Earnings
          </a>
          <a href="#" className="drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="drawer-link-icon">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </span> Testimonials
          </a>
          <a href="#" className="drawer-link" onClick={() => setMenuOpen(false)}>
            <span className="drawer-link-icon">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </span> FAQ
          </a>
        </nav>

        <div className="drawer-divider" />

        {/* CTA Buttons */}
        <div className="drawer-ctas">
          <a
            href="https://mulaearn.com/register.php?ref=Cynthia"
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-btn-primary"
            onClick={() => setMenuOpen(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>
              Start Earning Now
            </div>
          </a>
          <a
            href="https://mulaearn.com/register.php?ref=Cynthia"
            target="_blank"
            rel="noopener noreferrer"
            className="drawer-btn-ghost"
            onClick={() => setMenuOpen(false)}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
              Install Zavichat App
            </div>
          </a>
        </div>

        <div className="drawer-footer-note" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', flexWrap: 'wrap' }}>
          <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          Free signup · Instant payouts · 4.9
          <svg width="12" height="12" fill="currentColor" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
        </div>
      </div>

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-trust">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
          Trusted by 80,000+ Africans
        </div>
        <h1>
          Get Paid to Chat with<br />
          <span className="highlight">Lonely Foreigners</span>
        </h1>
        <p className="hero-sub">
          Over 80,000 Africans are already earning daily. Cash out your earnings instantly to M-Pesa, MoMo, or your local bank — straight from your phone.
        </p>
        <div className="hero-ctas">
          <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="btn-primary-lg" style={{ textDecoration: 'none' }}>
            Start Chat &amp; Earn
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
          <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="btn-outline-lg" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Install Zavichat App</a>
        </div>
        <div className="hero-checkmarks">
          <span className="check-item"><span className="chk">✔</span> Instant withdrawals</span>
          <span className="check-item"><span className="chk">✔</span> No experience needed</span>
          <span className="check-item"><span className="chk">✔</span> 24/7 support</span>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="stats-bar">
        <div className="stat-item"><div className="stat-num">80,000+</div><div className="stat-label">Active Earners</div></div>
        <div className="stat-item"><div className="stat-num">$1.2M+</div><div className="stat-label">Total Paid Out</div></div>
        <div className="stat-item"><div className="stat-num">1,918</div><div className="stat-label">Online Right Now</div></div>
        <div className="stat-item"><div className="stat-num">4.9 ⭐</div><div className="stat-label">Trust Score</div></div>
      </div>

      {/* ── WhatsApp Community Band ── */}
      <div style={{ padding: '32px 40px 0' }}>
        <div className="wa-band">
          <div className="wa-band-text">
            <h3>📱 Join Our Training WhatsApp Channel</h3>
            <p>Get training updates &amp; connect with 80,000+ earners across Africa.</p>
          </div>
          <button className="btn-wa" onClick={() => window.open('https://mulaearn.com/register.php?ref=Cynthia', '_blank')}>Join Now →</button>
        </div>
      </div>

      {/* ── How It Works Section ── */}
      <section className="how-section">
        <div className="how-intro">
          <h2>How Zavichat Works – Simple &amp; Transparent</h2>
          <p>
            Getting started on Zavichat takes less than 30 seconds. Sign up for free, get matched with real people from the USA, UK, Germany, Canada, and other countries who are willing to pay for friendly chats. Every message you send can earn you money. Our system ensures fair matching and secure payments worldwide. Users across the globe are earning strong weekly incomes—whether cashing out $50 to $500+, or Rwf 50,000 to Rwf 150,000+—depending entirely on how active they are.
          </p>
        </div>

        <div className="how-steps-header">
          <h3>How it works</h3>
          <p>Three simple steps to start earning today.</p>
        </div>

        <div className="how-grid">
          <div className="how-card">
            <div className="how-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
            </div>
            <h4>1. Sign up</h4>
            <p>Create your free chatting account in 30 seconds.</p>
          </div>
          <div className="how-card">
            <div className="how-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
            </div>
            <h4>2. Chat</h4>
            <p>Get matched with lonely foreigners and earn per message.</p>
          </div>
          <div className="how-card">
            <div className="how-icon">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" /><path d="M3 5v14a2 2 0 0 0 2 2h16v-5" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
            </div>
            <h4>3. Withdraw</h4>
            <p>Cash out instantly to M-Pesa, MoMo, bank, or PayPal.</p>
          </div>
        </div>
      </section>

      {/* ── Value Section ── */}
      <section className="value-section">
        <div>
          <div className="value-label">Why Zavichat?</div>
          <h2>Turn Your Free Time Into Real Cash</h2>
          <p>
            Zavichat hooks you up with guys overseas looking for fun, casual chats. No complicated setups. Jump on, reply to messages, and watch your balance grow instantly.
          </p>
          <div className="benefit-list">
            {[
              ['💬', 'Chat at your own pace, anytime you want'],
              ['💰', 'Get paid per message — every reply counts'],
              ['⚡', 'Withdraw instantly to M-Pesa, MoMo, PayPal or bank'],
              ['🌍', 'Genuine foreigners from USA, UK, Germany &amp; more'],
              ['🔒', 'Your privacy is protected at all times'],
            ].map(([icon, text], i) => (
              <div className="benefit-item" key={i}>
                <div className="benefit-icon">{icon}</div>
                <span dangerouslySetInnerHTML={{ __html: text }} />
              </div>
            ))}
          </div>
        </div>
        <div className="value-img-wrap">
          <img
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
            alt="African woman earning on her phone"
          />
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
          <div className="section-tag">Live Now</div>
          <h2>💬 Foreigners Online Right Now</h2>
          <p>Tap any profile to start a paid chat instantly.</p>
        </div>
        <div className="profiles-grid">
          {PROFILES.map((p, i) => (
            <div className="profile-card" key={i}>
              <div className="pc-top">
                <div className="pc-avatar-wrap">
                  <img src={`https://i.pravatar.cc/150?img=${p.avatar}`} alt={p.name} className="pc-avatar" />
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
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </span>
                    ) : (
                      '👀 Ashaka kuvugana 💬'
                    )}
                  </div>
                </div>
              </div>
              <div className="pc-actions">
                <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="pc-btn-start" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>Tangira</a>
                <button className="pc-btn-watch">Reba</button>
              </div>
            </div>
          ))}
        </div>
        <div className="profiles-more">👉 +48 more active foreigners — join to chat</div>
      </section>

      {/* ── Real-time earnings ticker ── */}
      <div className="earn-ticker-wrap">
        <div className="earn-ticker-track">
          {[...TOASTS, ...TOASTS, ...TOASTS].map((t, i) => (
            <div className="earn-item" key={i}>
              <img src={`https://i.pravatar.cc/60?img=${(i % 12) + 1}`} alt="" className="earn-avatar" />
              <span>{t.flag} {t.name} just withdrew</span>
              <strong className="earn-amount">{t.amount}</strong>
              <span style={{ color: '#94a3b8' }}>via {t.method}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Testimonials ── */}
      <section className="testimonials-section">
        <div className="section-header">
          <div className="section-tag">Success Stories</div>
          <h2>Real Earnings from Real African Users</h2>
          <p>Zavichat has paid out over $1.2 Million. Here's what our community is saying.</p>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-top">
                <div className="testi-avatar">{t.initials} {t.flag}</div>
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
          <div className="section-tag">FAQ</div>
          <h2>Frequently Asked Questions</h2>
          <p>Got questions? We've got straight answers.</p>
        </div>
        <div className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                className={`faq-item ${isOpen ? 'open' : ''}`}
                key={i}
                onClick={() => setOpenFaq(isOpen ? null : i)}
              >
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
        <h2>Ready to Start Earning?</h2>
        <p>Set up your account in 30 seconds and start texting guys who are online right now.</p>
        <a href="https://mulaearn.com/register.php?ref=Cynthia" target="_blank" rel="noopener noreferrer" className="btn-cta-white" style={{ textDecoration: 'none' }}>
          CREATE YOUR ACCOUNT →
        </a>
        <div className="cta-trust">
          <span>🔒 Free signup</span>
          <span>⚡ Instant payouts</span>
          <span>⭐ 4.9 trust score</span>
          <span>🌍 80,000+ earners</span>
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
            <p>Africa's leading platform for chatting and earning. Trusted by 80,000+ people across Kenya, Nigeria, Ghana, Rwanda and more.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">How it Works</a>
              <a href="#">Testimonials</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookie Policy</a>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <a href="#">Contact Us</a>
              <a href="#">WhatsApp Channel</a>
              <a href="#">FAQ</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Zavichat. All rights reserved.</span>
          <span>🔒 Secure &amp; Encrypted Platform</span>
        </div>
      </footer>

      {/* ── Live Payout Toast ── */}
      {toast && (
        <div className="toast-container">
          <div className="toast">
            <span className="toast-flag">{toast.flag}</span>
            <div className="toast-body">
              <strong>{toast.name}</strong>
              <span>{toast.country} · via {toast.method} · just now</span>
            </div>
            <span className="toast-amount">{toast.amount}</span>
          </div>
        </div>
      )}
    </div>
  );
}
