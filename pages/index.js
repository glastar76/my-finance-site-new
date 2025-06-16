// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2477753161296870"
     crossorigin="anonymous"></script>
        <title>EyeOnFinance - Home</title>
      </Head>

      <Navbar />

      <main className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to EyeOnFinance</h1>
        <p className="text-lg mb-10">See your money clearly. Plan your finances with clarity.</p>

        {/* Each link is stacked vertically */}
        <div className="flex flex-col items-center space-y-4 mb-10 w-full">
          <Link href="/paycheck">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-64">
              Go to Paycheck Calculator
            </button>
          </Link>
          <Link href="/debt-planner">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-64">
              Go to Debt Planner
            </button>
          </Link>
          <Link href="/savings-goals">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-64">
              Go to Savings Goals
            </button>
          </Link>
        </div>

        {/* Copyright line moved outside footer */}
     
      </main>

      {/* Only one Footer here */}
      <Footer />
    </>
  );
}
