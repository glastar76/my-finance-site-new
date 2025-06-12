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

      <main className="p-6 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-primary">Welcome to EyeOnFinance</h1>
        <p className="text-lg mb-8 text-gray-600">
          Use our tools to plan your finances, manage debt, and achieve your savings goals. 
          Take control and see your money clearly.
        </p>

        <div className="flex flex-col space-y-4">
          <Link href="/paycheck" legacyBehavior>
            <a className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark">
              Go to Paycheck Calculator
            </a>
          </Link>
          <Link href="/debt-planner" legacyBehavior>
            <a className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark">
              Go to Debt Planner
            </a>
          </Link>
          <Link href="/savings-goals" legacyBehavior>
            <a className="bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark">
              Go to Savings Goals
            </a>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
