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
        <meta name="description" content="See your money clearly. EyeOnFinance helps you plan your finances with clarity." />
      </Head>

      <Navbar />

     <main className="min-h-screen bg-gray-900 text-gray-100 flex flex-col justify-center items-center text-center p-8">

        <h1 className="text-4xl font-bold mb-6">Welcome to EyeOnFinance</h1>
        <p className="text-lg mb-8">
          See your money clearly — plan your paycheck, manage debt, and track your savings.
        </p>

        <div className="flex flex-col space-y-4">
          <Link href="/paycheck" legacyBehavior>
         
              Go to Paycheck Calculator
            </a>
          </Link>

          <Link href="/debt-planner" legacyBehavior>
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Go to Debt Planner
            </a>
          </Link>

          <Link href="/savings-goals" legacyBehavior>
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Go to Savings Goals
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

