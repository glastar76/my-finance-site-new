import Head from 'next/head';

import Footer from '../components/Footer';

import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Head>
      <title>EyeOnFinance - Paycheck Calculator</title>
      <meta name="description" content="Calculate your net paycheck after taxes. See your money clearly with EyeOnFinance." />
    </Head>
    
    {/* Your page content here */}
  </>
);


      <Navbar />
      <div className="p-5 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to Finance Tools</h1>
        <p className="text-lg mb-8">
          Use the tools below to plan your finances, manage debt, and achieve your savings goals.
        </p>
        <div className="flex flex-col space-y-4">
          <Link
            href="/paycheck"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Go to Paycheck Calculator
          </Link>
          <Link
            href="/debt-planner"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Go to Debt Planner
          </Link>
          <Link
            href="/savings-goals"
            className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          >
            Go to Savings Goals
          </Link>
        </div>
      </div>
    <Footer />

    </>
  );
}
