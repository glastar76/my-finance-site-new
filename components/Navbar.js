// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#111827] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">EyeOnFinance</Link>
        </div>
        <div className="space-x-6 text-lg">
          <Link href="/paycheck" legacyBehavior>
            <a className="hover:text-blue-400">Paycheck</a>
          </Link>
          <Link href="/debt-planner" legacyBehavior>
            <a className="hover:text-blue-400">Debt Planner</a>
          </Link>
          <Link href="/savings-goals" legacyBehavior>
            <a className="hover:text-blue-400">Savings Goals</a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
