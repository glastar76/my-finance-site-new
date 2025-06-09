import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow mb-8">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <div className="text-xl font-bold">
          <Link href="/" className="hover:text-gray-300">
            Finance Tools
          </Link>
        </div>
        <div className="space-x-4">
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
