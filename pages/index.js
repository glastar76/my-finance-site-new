// pages/index.js
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>EyeOnFinance - See Your Money Clearly</title>
        <meta name="description" content="Plan your paycheck, track debt, and reach your savings goals with EyeOnFinance." />
      </Head>

      <Navbar />

      <main className="max-w-3xl mx-auto p-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-6">Welcome to EyeOnFinance</h1>
        <p className="text-lg mb-8">
          Plan your paycheck, track debt, and reach your savings goals — all in one place.
        </p>

        <div className="flex flex-col space-y-4">
          <Link href="/paycheck" legacyBehavior>
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Go to Paycheck Calculator
            </a>
          </Link>

          <Link href="/debt-planner" legacyBehavior>
            <a className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Go to Debt Planner
            </a>
          </Link>

          <Link href="/savings-goals" legacyBehavior>
            <a className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700">
              Go to Savings Goals
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

