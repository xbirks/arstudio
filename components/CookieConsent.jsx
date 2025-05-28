import { useEffect, useState } from 'react'
import Script from 'next/script'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)
  const [accepted, setAccepted] = useState(false)

  useEffect(() => {
    const status = localStorage.getItem('cookieAccepted')
    if (status === 'true') setAccepted(true)
    if (status !== 'true' && status !== 'false') setVisible(true)
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true')
    setAccepted(true)
    setVisible(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookieAccepted', 'false')
    setAccepted(false)
    setVisible(false)
  }

  return (
    <>
      {accepted && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `}
          </Script>
        </>
      )}

      {visible && (
        <div className="cookie-consent">
          <div className="cookie-consent__content">
            <p>
              Utilizamos <strong>cookies</strong> propias y de terceros para analizar el tráfico y mejorar tu experiencia.
              No se cargarán hasta que aceptes su uso. Puedes leer nuestra{' '}
              <a href="/cookies" target="_blank" rel="noopener noreferrer"><strong>política de cookies</strong></a>.
            </p>
            <div className="cookie-consent__actions">
              <button onClick={acceptCookies} className="cookie-consent__button--accept">
                Aceptar cookies
              </button>
              <button onClick={rejectCookies} className="cookie-consent__button--reject">
                Rechazar cookies
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
