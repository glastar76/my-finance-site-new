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

   

      <main className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to EyeOnFinance</h1>
        <p className="text-lg mb-6">See your money clearly. Plan your finances with clarity.</p>

        <div className="space-y-4 mb-6">
          <Link href="/paycheck" legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded block w-60 mx-auto">
              Go to Paycheck Calculator
            </a>
          </Link>
          <Link href="/debt-planner" legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded block w-60 mx-auto">
              Go to Debt Planner
            </a>
          </Link>
          <Link href="/savings-goals" legacyBehavior>
            <a className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded block w-60 mx-auto">
              Go to Savings Goals
            </a>
          </Link>
        </div>

        <p className="text-sm text-gray-300">© 2025 EyeOnFinance by Gregory Starks. All rights reserved.</p>
      </main>

      <Footer />
    </>
  );
}


