import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-[#111827] text-white px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Site Name */}
        <div className="text-2xl font-bold">
          <Link href="/">EyeOnFinance</Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6 text-lg">
          <Link href="/paycheck" className="hover:text-blue-400">
            Paycheck
          </Link>
          <Link href="/debt-planner" className="hover:text-blue-400">
            Debt Planner
          </Link>
          <Link href="/savings-goals" className="hover:text-blue-400">
            Savings Goals
          </Link>
        </div>
      </div>
    </nav>
  );
}
