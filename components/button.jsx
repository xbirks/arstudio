import Image from 'next/image';
import Arrow from '../public/assets/arrow.svg';



export default function ButtonArrow({ href, texto, onClick }) {
  const isClick = typeof onClick === 'function'
  const isExternal = href?.startsWith('http')

  if (isClick) {
    return (
      <button onClick={onClick} className="button">
        <span>{texto}</span>
        <Image
          src={Arrow}
          alt="flecha del botón"
          width={24}
          height={24}
          className="button__arrow"
          priority
        />
      </button>
    )
  }

  return (
    <a
      href={href}
      className="button"
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span>{texto}</span>
      <Image
        src={Arrow}
        alt="flecha del botón"
        width={24}
        height={24}
        className="button__arrow"
        priority
      />
    </a>
  )
}