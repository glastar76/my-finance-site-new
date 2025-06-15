import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold">EyeOnFinance</div>
        <div className="flex space-x-4">
          <Link href="/paycheck">
            <span className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white cursor-pointer text-sm font-medium">
               Paycheck 
            </span>
          </Link>
          <Link href="/debt-planner">
            <span className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white cursor-pointer text-sm font-medium">
               Debt Planner 
            </span>
          </Link>
          <Link href="/savings-goals">
            <span className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-white cursor-pointer text-sm font-medium">
               Savings Goals 
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
