import Link from "next/link"
import { FaInstagramSquare, FaBehanceSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';


const Layout = ({ children }) => {
  return (
    <>
      <header className="bg-zinc-900 p-8">
        <nav className="container">
          <ul className="flex gap-6 items-end justify-end">
          <li>
              <Link
                 href="/"
                 className="text-md text-zinc-300"
              >
              ALEXA KYLER
              </Link>
            </li>  
            <li>
              <Link
                 href="/"
                 className="text-sm text-zinc-300"
              >
              UX / UI Portfolio 
              </Link>
            </li>
            <li>
              <Link
                 href="/"
                 className="text-sm text-zinc-300"
              >
              Front-End Portfolio 
              </Link>
            </li>
            <li>
              <Link
                 href="/services"
                 className="text-sm text-zinc-300"
              >
              Services
              </Link>
            </li>
            <li>
              <Link
                  href="/posts"
                  className="text-sm text-zinc-300"
              >
              Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="container p-8">{children}</main>

  
<footer class="bg-zinc-900">



    <div class="mx-auto w-full container p-4 sm:p-6">

        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="" class="flex items-center">
                  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ALE<span class="text-2xl text-orange-700">X</span>A K<span class="text-2xl text-orange-700">Y</span>LER</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mt-12 text-sm dark:text-white">UX / UI Portfolio</h2>
              </div>
              <div>
                  <h2 class="mt-12 text-sm dark:text-white">Front-End Portfolio</h2>
              </div>
              <div>
                  <h2 class="mt-12 text-sm dark:text-white">Services</h2>
              </div>
              <div>
                  <h2 class="mt-12 text-sm dark:text-white">Blog</h2>
              </div>
          </div>
      </div>
</div>

<div class="w-screen bg-orange-600 flex space-x-12 sm:justify-center sm:mt-8 sm:mb-8">
              <a href="#" class="text-stone-200 mt-4 mb-4">
                 <FaLinkedin size={40} />
              </a>
              <a href="#" class="text-stone-200 mt-4 mb-4 dark:hover:text-white">
                 <FaBehanceSquare size={40} />
              </a>
              <a href="#" class="text-stone-200 mt-4 mb-4">
                 <FaGithubSquare size={40} />
              </a>
              <a href="#" class="text-stone-200 mt-4 mb-4 dark:hover:text-white">
                 <FaInstagramSquare size={40} />
              </a>
          </div> 
      
      <div class="text-center mt-4 mb-8">
        <span class="text-sm text-center text-zinc-300">© 2023 <a href="" class="hover:underline">ALEXA KYLER</a>. All Rights Reserved.</span>
      </div>

</footer>

    </>
  )
}

export default Layout


/**
 * 
 * 
 *  <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Alexa Kyler Logo" />
 */