// pages/index.js
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="p-5 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Finance Tools</h1>
        <p className="text-lg mb-8">
          Use the tools below to plan your finances, manage debt, and achieve your savings goals.
        </p>
        <div className="flex flex-col space-y-4">
          <Link href="/paycheck">
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Go to Paycheck Calculator
            </a>
          </Link>
          <Link href="/debt-planner">
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Go to Debt Planner
            </a>
          </Link>
          <Link href="/savings-goals">
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Go to Savings Goals
            </a>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
