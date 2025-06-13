// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>EyeOnFinance - Home</title>
      </Head>
      <Navbar />
      <main className="bg-gray-900 text-white min-h-screen p-6">
        <h1 className="text-4xl font-bold mb-6">Welcome to EyeOnFinance</h1>
        <p className="text-lg mb-8">See your money clearly. Plan your finances with clarity.</p>

        <div className="flex flex-col space-y-4">
          <Link href="/paycheck" legacyBehavior>
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-center">
              Go to Paycheck Calculator
            </a>
          </Link>

          <Link href="/debt-planner" legacyBehavior>
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-center">
              Go to Debt Planner
            </a>
          </Link>

          <Link href="/savings-goals" legacyBehavior>
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-center">
              Go to Savings Goals
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}


