import Link from 'next/link'

function isActive(pathname) {
  return (
    typeof document !== 'undefined' && document.location.pathname === pathname
  )
}

const Header = () => (
  <nav>
    <div className="left">
      <Link href="/">
        <a data-active={isActive('/')}>Blog</a>
      </Link>
      <Link href="/drafts">
        <a data-active={isActive('/drafts')}>Drafts</a>
      </Link>
    </div>
    <div className="right">
      <Link href="/signup">
        <a data-active={isActive('/signup')}>Signup</a>
      </Link>
      <Link href="/login">
        <a data-active={isActive('/login')}>Login</a>
      </Link>
      <Link href="/create">
        <a data-active={isActive('/create')}>+ Create draft</a>
      </Link>
    </div>
    <style jsx>{`
      nav {
        display: flex;
        padding: 2rem;
        align-items: center;
      }

      .bold {
        font-weight: bold;
      }

      a {
        text-decoration: none;
        color: gray;
        font-weight: regular;
        display: inline-block;
      }

      .left a[data-active='true'] {
        color: #000;
        font-weight: bold;
      }

      a + a {
        margin-left: 1rem;
      }

      .right {
        margin-left: auto;
      }

      .right a {
        border: 1px solid #797979;
        padding: 0.5rem 1rem;
        border-radius: 5px;
        background: hsla(0, 50%, 58%, 0.79);
        color: white;
        font-weight: 500;
      }

      .right a:hover {
        background: hsla(0, 50%, 58%);
      }
    `}</style>
  </nav>
)

export default Header
