import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}>HOME</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>BIKE RENTAL</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>BIKE TUOR</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>ATTRACTIONS</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>PACKAGES</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>MEMBERSHIP</a>
      </Link>

      <Link href="/about">
        <a style={linkStyle}>GIFTS</a>
      </Link>

      <Link href="/about">
        <a style={linkStyle}>LOCATIONS</a>
      </Link>

      <Link href="/about">
        <a style={linkStyle}>TESTIMONIAL</a>
      </Link>

      <Link href="/about">
        <a style={linkStyle}>CONTACTS</a>
      </Link>


    </div>
  )
}
