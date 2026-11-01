
import Link from "next/link";
import { FaHome, FaGolfBall, FaPhone } from "react-icons/fa";

export default function Sidebar() {
  return (
    <aside className="w-44 bg-[#B7C9B2] p-6">
      <ul className="space-y-10 text-1xl">
        <li>
          <Link href="/" className="flex items-center gap-4">
            <FaHome size={24} />
            Home
          </Link>
        </li>

        <li>
          <Link href="/about" className="flex items-center gap-4">
            <FaGolfBall size={24} />
            About
          </Link>
        </li>

        <li>
          <Link href="/contact" className="flex items-center gap-4">
            <FaPhone size={24} />
            Contact
          </Link>
        </li>
      </ul>
    </aside>
  );
}