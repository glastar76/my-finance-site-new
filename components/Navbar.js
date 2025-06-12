// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-xl font-bold">EyeOnFinance</div>
        <div className="space-x-4">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="/paycheck" className="hover:text-gray-300">
            Paycheck Calculator
          </Link>
          <Link href="/debt-planner" className="hover:text-gray-300">
            Debt Planner
          </Link>
          <Link href="/savings-goals" className="hover:text-gray-300">
            Savings Goals
          </Link>
        </div>
      </div>
    </nav>
  );
}
