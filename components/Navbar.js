import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold">EyeOnFinance</div>
      <div className="flex space-x-8">
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
    </nav>
  );
}

