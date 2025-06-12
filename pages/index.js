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
        <meta name="description" content="See your money clearly. Plan your paycheck, debt, and savings goals." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - Home" />
        <meta property="og:description" content="See your money clearly. Plan your paycheck, debt, and savings goals." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app" />
      </Head>

      <Navbar />

      <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Welcome to EyeOnFinance
        </h1>
        <p className="text-lg mb-10 text-center max-w-xl">
          Use the tools below to plan your finances, manage debt, and achieve your savings goals.
        </p>

        <div className="flex flex-col space-y-4 w-full max-w-sm">
          <Link href="/paycheck" legacyBehavior>
            <a className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark text-center font-semibold">
              Go to Paycheck Calculator
            </a>
          </Link>

          <Link href="/debt-planner" legacyBehavior>
            <a className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark text-center font-semibold">
              Go to Debt Planner
            </a>
          </Link>

          <Link href="/savings-goals" legacyBehavior>
            <a className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark text-center font-semibold">
              Go to Savings Goals
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

