// components/Navbar.jsx
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const linkClass = (path) =>
    `text-white hover:text-teal-300 px-3 py-2 ${
      router.pathname === path ? 'border-b-2 border-teal-300 font-bold' : ''
    }`;

  return (
    <nav className="bg-gray-900 text-white py-4 mb-6 shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-teal-400">
          EyeOnFinance
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className={linkClass('/')}>
            Home
          </Link>
          <Link href="/paycheck" className={linkClass('/paycheck')}>
            Paycheck Calculator
          </Link>
          <Link href="/debt-planner" className={linkClass('/debt-planner')}>
            Debt Planner
          </Link>
          <Link href="/savings-goals" className={linkClass('/savings-goals')}>
            Savings Goals
          </Link>
        </div>
      </div>
    </nav>
  );
}
