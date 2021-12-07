import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import 'tailwindcss/dist/tailwind.min.css'

const Sidebar = () => {
  const router = useRouter()
  //console.log(router.pathname);

  return (
    <aside className="bg-white sm:w-1/3 xl:w-1/5 sm:min-h-screen">
      <div className="flex justify-center">
        <img
          width="150px"
          class="logocandelaria"
          src="./images/candelaria.png"
        />
      </div>
      <nav className="mt-5 list-none">
        <li
          className={
            router.pathname === '/' ? 'bg-blue-800 p-2 text-white' : 'p-2'
          }
        >
          <Link href="/">
            <a className="font-medium my-2 block px-5"> Ciudadano </a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/pedidos'
              ? 'bg-blue-800 p-2 text-white'
              : 'p-2'
          }
        >
          <Link href="/pedidos">
            <a className="font-medium my-2 block px-5"> Entidades </a>
          </Link>
        </li>
        <li
          className={
            router.pathname === '/productos'
              ? 'bg-blue-800 p-2 text-white'
              : 'p-2'
          }
        >
          <Link href="/productos">
            <a className="font-medium my-2 block px-5"> Reportes </a>
          </Link>
        </li>
      </nav>
      <div className="sm:mt-10">
        <p className="text-black text-xl font-black px-5 mx-2 text-gray-500">
          
          Estadisticas
        </p>
      </div>
      <nav className="my-2 list-none">
        {/* <li
          className={
            router.pathname === '/mejores-vendedores'
              ? 'bg-blue-800 p-2 text-white'
              : 'p-2'
          }
        >
          <Link href="/mejores-vendedores">
            <a className="font-medium my-2 block px-5"> Mejores Vendedores </a>
          </Link>
        </li> */}
        <li
          className={
            router.pathname === '/mejores-clientes'
              ? 'bg-blue-800 p-2 text-white'
              : 'p-2'
          }
        >
          <Link href="/mejores-clientes">
            <a className="font-medium my-2 block px-5"> Ciudadanos Ejemplares </a>
          </Link>
        </li>
      </nav>
      <br/>
      <div className="flex justify-center">
        <img
          width="120px"
          class="logocandelaria"
          src="./images/alcaldia.png"
        />
      </div>
    </aside>
  )
}

export default Sidebar
