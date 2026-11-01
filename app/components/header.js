import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#B7C9B2] flex justify-between items-center px-10 py-5">
      <h1
        className="text-5xl"
        style={{ fontFamily: "Imperial Script" }}
        >
        Agave Shooters
      </h1>

      <nav
        className="flex gap-16 text-lg"
         style={{ fontFamily: "Roboto" }}
          >
        <Link
        href="/"
         className="hover:text-gray-200 transition-colors duration-300"
        >
         Home
        </Link>

        <Link
        href="/about"
        className="hover:text-gray-200 transition-colors duration-300"
        >
          About
        </Link>

        <Link
        href="/contact"
        className="hover:text-gray-200 transition-colors duration-300"
        >
          Contact
        </Link>
      </nav>
    </header>
      );
    }

