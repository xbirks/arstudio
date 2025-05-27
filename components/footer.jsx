import Link from 'next/link'

export default function Footer() {

  return (
    <footer className="footer__master">
      <ul className="footer__links">
        <li><Link href="/contacto">Contacto</Link></li>
        <li><Link href="https://calendly.com/ar-studio">Reservar</Link></li>
        <li><Link href="/aviso-legal">Aviso legal</Link></li>
        <li><Link href="/politica-privacidad">Política de privacidad</Link></li>
        <li><Link href="/cookies">Política de cookies</Link></li>
      </ul>
    </footer>

  )
}
