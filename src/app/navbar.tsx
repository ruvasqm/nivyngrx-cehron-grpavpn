import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="top-0 flex h-[72px] w-full items-center gap-10 bg-white text-black lg:h-20">
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
      <ul className="hidden grow gap-8 text-base font-semibold text-tertiary-fg lg:flex lg:flex-row">
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

        <li className="ml-auto flex items-center gap-3">
          <Link href="/login" className="hover:text-primary-bg">
            Log in
          </Link>
          <Link
            href="/signup"
            className="gap-1.5 rounded-lg border border-primary-fg bg-primary-bg px-4 py-2.5 text-base font-semibold text-primary-fg hover:bg-primary-fg hover:text-primary-bg"
          >
            Sign up
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
