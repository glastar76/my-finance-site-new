// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-primary text-white px-6 py-4 shadow">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="text-2xl font-bold">
          EyeOnFinance
        </Link>
        <div className="flex space-x-6">
          <Link href="/paycheck" className="hover:text-primary-light">
            Paycheck
          </Link>
          <Link href="/debt-planner" className="hover:text-primary-light">
            Debt Planner
          </Link>
          <Link href="/savings-goals" className="hover:text-primary-light">
            Savings Goals
          </Link>
        </div>
      </div>
    </nav>
  );
}
