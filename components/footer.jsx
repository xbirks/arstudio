import Link from 'next/link'

export default function Footer() {

  return (
    <footer className="footer__master">
      <ul className="footer__links">
        <li><Link href="mailto:arstudiospain@gmail.com">Contacto</Link></li>
        <li><Link href="https://calendly.com/ar-studio">Reservar</Link></li>
        <li><Link href="/legal">Aviso legal</Link></li>
        <li><Link href="/privacidad">Política de privacidad</Link></li>
        <li><Link href="/cookies">Política de cookies</Link></li>
      </ul>
      <br></br>
          
            <div style={{ backgroundColor: 'transparent', textAlign: 'center', padding: '5px 0', marginTop: '50px' }}>
            <p style={{ color: '#cbc4be', fontFamily: 'Roboto, sans-serif', fontSize: '12px' }}>Web creada por: <a style={{ color: '#cbc4be', fontFamily: 'Roboto, sans-serif', fontSize: '12px' }} href="https://ermo.es" title="estudio de diseño web y posicionamiento SEO">Ermo Estudio - Andrés Ortega Montoya</a></p></div>

    </footer>



  )
}
