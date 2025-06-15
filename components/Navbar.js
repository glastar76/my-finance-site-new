import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold">EyeOnFinance</div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/paycheck" className="hover:text-blue-400"> Paycheck </Link>
          <Link href="/debt-planner" className="hover:text-blue-400"> Debt Planner </Link>
          <Link href="/savings-goals" className="hover:text-blue-400"> Savings Goals </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Links */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-2">
          <Link href="/paycheck" className="block px-2 py-1 hover:bg-gray-800 rounded">Paycheck</Link>
          <Link href="/debt-planner" className="block px-2 py-1 hover:bg-gray-800 rounded">Debt Planner</Link>
          <Link href="/savings-goals" className="block px-2 py-1 hover:bg-gray-800 rounded">Savings Goals</Link>
        </div>
      )}
    </nav>
  );
}

