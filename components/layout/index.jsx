import Link from "next/link"

const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-stone-100 p-8">
        <nav className="container">
          <ul className="flex gap-4">
            <li>
              <Link
                 href="/"
                 className="text-sm font-medium uppercase"
              >
              Home
              </Link>
            </li>
            <li>
              <Link
                  href="/"
                  className="text-sm font-medium uppercase"
              >
              Posts
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container p-8">{children}</main>

      <footer className="bg-stone-100 text-sm font-medium uppercase">
         <div className="container">
          <p>Footer</p>
         </div>
      </footer>
    </>
  )
}