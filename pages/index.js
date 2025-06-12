// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>EyeOnFinance - See Your Money Clearly</title>
        <meta name="description" content="Plan your paycheck, track debt, and reach your savings goals. See your money clearly with EyeOnFinance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - See Your Money Clearly" />
        <meta property="og:description" content="Plan your paycheck, track debt, and reach your savings goals." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app" />
      </Head>

      <Navbar />

   <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-white text-gray-900">
  <h1 className="text-5xl font-extrabold mb-6 text-center">
    Welcome to <span className="text-blue-600">EyeOnFinance</span>
  </h1>

  <p className="text-lg text-gray-600 mb-10 text-center max-w-xl">
    Plan your paycheck, track your debt, and achieve your savings goals — all in one place.
  </p>

  <div className="flex flex-col space-y-4 w-full max-w-xs">
    <Link href="/paycheck" legacyBehavior>
      <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 text-lg font-semibold text-center">
        Go to Paycheck Calculator
      </a>
    </Link>
    
    <Link href="/debt-planner" legacyBehavior>
      <a className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 text-lg font-semibold text-center">
        Go to Debt Planner
      </a>
    </Link>
    
    <Link href="/savings-goals" legacyBehavior>
      <a className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 text-lg font-semibold text-center">
        Go to Savings Goals
      </a>
    </Link>
  </div>
</main>


      <Footer />
    </>
  );
}
