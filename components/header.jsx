import Link from 'next/link';

export default function Header() {

  

  const abrirCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/ar-studio?hide_gdpr_banner=1&text_color=4b3828&primary_color=4b3828'
      })
    }
  }


  
  return (
    <header className="header__master">
      <img className="header__logo" src="/assets/AR_Studio.svg" alt="AR Studio" />

      <nav className="header__nav">
        <Link href="#espacio">ESPACIO</Link>
        <a href="https://www.instagram.com/studioar.es/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
        <a href="#" onClick={abrirCalendly}>RESERVAR</a>
      </nav>

      <div className="header__mobile">
        <Link
          href="https://www.instagram.com/studioar.es/"
          target="_blank"
          rel="noopener noreferrer"
          className="header__instagram"
          aria-label="Instagram"
        >
          <img className="header__instagram" src="/assets/instagram.svg" alt="AR Studio" />
        </Link>

        <a
            href="https://calendly.com/ar-studio"
            className="header__menu"
            aria-label="Menú"
          >
            <svg width="29" height="24" viewBox="0 0 100 80" fill="#4b3828">
              <rect width="100" height="4" />
              <rect y="70" width="100" height="4" />
            </svg>
          </a>

      </div>
    </header>
  );
}
