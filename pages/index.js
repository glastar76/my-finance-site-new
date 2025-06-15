// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>EyeOnFinance - Home</title>
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to EyeOnFinance</h1>
        <p className="text-lg mb-10">See your money clearly. Plan your finances with clarity.</p>

        {/* ✅ Vertical Button List with Spacing */}
        <div className="flex flex-col items-center space-y-4 mb-10">
          <Link href="/paycheck" legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-64 text-center">
              Go to Paycheck Calculator
            </a>
          </Link>
          <Link href="/debt-planner" legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-64 text-center">
              Go to Debt Planner
            </a>
          </Link>
          <Link href="/savings-goals" legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-64 text-center">
              Go to Savings Goals
            </a>
          </Link>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          © 2025 EyeOnFinance by Gregory Starks. All rights reserved.
        </p>
      </main>

      <Footer />
    </>
  );
}
