// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">EyeOnFinance</Link>
      </div>
      <div className="flex space-x-6 text-lg">
        <Link href="/paycheck">Paycheck</Link>
        <Link href="/debt-planner">Debt Planner</Link>
        <Link href="/savings-goals">Savings Goals</Link>
      </div>
    </nav>
  );
}
