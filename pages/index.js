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
        <meta name="description" content="See your money clearly. Plan your finances with clarity." />
      </Head>

      <Navbar />

      <main className="bg-gray-900 text-white flex flex-col justify-center items-center text-center min-h-screen px-6">
        <h1 className="text-4xl font-bold mb-4">Welcome to EyeOnFinance</h1>
        <p className="text-lg mb-6">
          See your money clearly. Plan your finances with clarity.
        </p>

        <div className="flex flex-col space-y-4">
          <Link href="/paycheck" legacyBehavior>
            <a className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 text-lg font-semibold">
              Go to Paycheck Calculator
            </a>
          </Link>
          <Link href="/debt-planner" legacyBehavior>
            <a className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 text-lg font-semibold">
              Go to Debt Planner
            </a>
          </Link>
          <Link href="/savings-goals" legacyBehavior>
            <a className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 text-lg font-semibold">
              Go to Savings Goals
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}



