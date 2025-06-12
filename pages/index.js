import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>EyeOnFinance - Personal Finance Tools</title>
        <meta name="description" content="Manage your paycheck, debt, and savings with EyeOnFinance. See your money clearly." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - Personal Finance Tools" />
        <meta property="og:description" content="Manage your paycheck, debt, and savings with EyeOnFinance. See your money clearly." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app" />
      </Head>

      <Navbar />

      <main className="p-5 max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to EyeOnFinance</h1>
        <p className="text-lg mb-8">
          Use these free tools to plan your paycheck, manage debt, and reach your savings goals.
        </p>

        <div className="flex flex-col space-y-4">
          <Link href="/paycheck" passHref legacyBehavior>
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Go to Paycheck Calculator
            </a>
          </Link>

          <Link href="/debt-planner" passHref legacyBehavior>
            <a className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              Go to Debt Planner
            </a>
          </Link>

          <Link href="/savings-goals" passHref legacyBehavior>
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
