import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">EyeOnFinance</div>
      <div className="space-x-6">
        <Link href="/" legacyBehavior>
          <a className="hover:text-blue-400">Home</a>
        </Link>
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
    </nav>
  );
}
