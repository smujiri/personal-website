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
      className="fixed bottom-0 left-0 right-0 z-50 bg-navy border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-slate-300 text-sm leading-relaxed flex-1">
          {message}{' '}
          <a href={privacyHref} className="text-gold hover:underline">
            Privacy Policy
          </a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 text-sm text-slate-400 hover:text-white border border-white/20 rounded-lg transition-colors"
          >
            {declineText}
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-sm font-semibold bg-gold hover:bg-gold-light text-navy rounded-lg transition-colors"
          >
            {acceptText}
          </button>
        </div>
      </div>
    </div>
  );
}
