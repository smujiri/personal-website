import { useState, useEffect } from 'react';

interface Props {
  message: string;
  acceptText: string;
  declineText: string;
  privacyHref?: string;
}

export default function CookieBanner({ message, acceptText, declineText, privacyHref = '/en/privacy' }: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('cookie-consent');
      if (!consent) setVisible(true);
    } catch {
      // localStorage unavailable
    }
  }, []);

  const handleAccept = () => {
    try { localStorage.setItem('cookie-consent', 'accepted'); } catch { /* */ }
    setVisible(false);
  };

  const handleDecline = () => {
    try { localStorage.setItem('cookie-consent', 'declined'); } catch { /* */ }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-charcoal border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-5">
        <p className="font-display text-white/50 text-xs leading-relaxed tracking-wide flex-1">
          {message}{' '}
          <a href={privacyHref} className="text-white/70 underline underline-offset-4 hover:text-white transition-colors">
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="font-display text-xs uppercase tracking-widest text-white/35 hover:text-white border border-white/15 hover:border-white/35 px-5 py-2.5 transition-colors"
          >
            {declineText}
          </button>
          <button
            onClick={handleAccept}
            className="font-display text-xs uppercase tracking-widest font-semibold text-charcoal bg-cream hover:bg-cream-light px-5 py-2.5 transition-colors"
          >
            {acceptText}
          </button>
        </div>
      </div>
    </div>
  );
}
