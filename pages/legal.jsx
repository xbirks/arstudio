import ButtonArrow from "../components/button"

export default function AvisoLegal() {
  return (
    <main>
      <section className="legal__master">
        <h1>Aviso legal</h1>
        <h2>Información general en cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE).</h2>

        <h2>1. Titular del sitio web</h2>
        <ul className="legal__lista">
          <li><strong>Nombre:</strong> Arianny Rivas</li>
          <li><strong>Email de contacto:</strong> <a href="mailto:arstudiospain@gmail.com">arstudiospain@gmail.com</a></li>
          <li><strong>Teléfono:</strong> 661 85 56 12</li>
          <li><strong>Actividad:</strong> Alquiler de estudio fotográfico y servicios relacionados.</li>
        </ul>

        <h2>2. Condiciones de uso</h2>
        <ul className="legal__lista">
          <li>El uso de este sitio web implica la aceptación plena de los términos y condiciones aquí descritos.</li>
          <li>El usuario se compromete a hacer un uso adecuado del sitio y a no emplearlo para realizar actividades ilícitas o contrarias a la buena fe y el orden público.</li>
          <li>Nos reservamos el derecho de modificar cualquier información contenida en el sitio web sin previo aviso.</li>
        </ul>

        <h2>3. Propiedad intelectual e industrial</h2>
        <ul className="legal__lista">
          <li>Todos los contenidos del sitio (textos, imágenes, logotipos, vídeos, etc.) son propiedad de AR Studio o de terceros con licencia, y están protegidos por derechos de propiedad intelectual.</li>
          <li>Queda prohibida su reproducción, distribución o transformación sin autorización expresa del titular.</li>
        </ul>

        <h2>4. Enlaces externos</h2>
        <ul className="legal__lista">
          <li>Este sitio puede contener enlaces a páginas externas. No nos responsabilizamos del contenido ni de las políticas de privacidad de dichos sitios.</li>
          <li>El uso de enlaces a sitios de terceros no implica una relación comercial ni la aprobación de sus contenidos.</li>
        </ul>

        <h2>5. Responsabilidad</h2>
        <ul className="legal__lista">
          <li>No nos hacemos responsables de los daños o perjuicios derivados del uso de este sitio web.</li>
          <li>Nos reservamos el derecho a interrumpir el acceso al sitio web sin previo aviso por razones técnicas, de seguridad o mantenimiento.</li>
        </ul>

        <h2>6. Legislación aplicable</h2>
        <ul className="legal__lista">
          <li>Este aviso legal se rige por la legislación española.</li>
          <li>En caso de conflicto, las partes se someterán a los juzgados y tribunales de Valencia, salvo que la normativa establezca otra jurisdicción obligatoria.</li>
        </ul>

        <div className="button__cierre">
          <ButtonArrow texto="VOLVER AL INICIO" href="/" />
        </div>
      </section>
    </main>
  )
}
