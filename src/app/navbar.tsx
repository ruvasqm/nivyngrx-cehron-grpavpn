import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="flex items-center gap-10 top-0 w-full h-[72px] lg:h-20 bg-white text-black" >
      <Link href="/" className="inline">
        <Image
          className=""
          src="/logo.svg"
          alt="Next.js Logo"
          width={142}
          height={32}
          priority
        />
      </Link>
      <ul className="hidden grow lg:flex lg:flex-row gap-8 text-tertiary-fg font-semibold text-base">
        <li className="flex flex-row items-center gap-3">
          <Link href="/" className="hover:text-primary-bg">
            Home
          </Link>
        </li>
        <li className="flex flex-row items-center gap-3">
          <Link href="/products" className="hover:text-primary-bg">
            Products
          </Link>
        </li>
        <li className="flex flex-row items-center gap-3">
          <Link href="/resources" className="hover:text-primary-bg">
            Resources
          </Link>
        </li>
        <li className="flex flex-row items-center gap-3">
          <Link href="/pricing" className="hover:text-primary-bg">
            Pricing
          </Link>
        </li>

        <li className="flex gap-3 items-center ml-auto">
          <Link href="/login" className="hover:text-primary-bg">
            Log in
          </Link>
          <Link href="/signup" className="text-primary-fg bg-primary-bg px-4 py-2.5 gap-1.5 rounded-lg border border-primary-fg font-semibold text-base hover:text-primary-bg hover:bg-primary-fg">
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
