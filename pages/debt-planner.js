import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DebtPlanner() {
  return (
    <>
      <Head>
        <title>EyeOnFinance - Debt Planner</title>
        <meta name="description" content="Plan your debt repayment strategy. See your money clearly with EyeOnFinance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - Debt Planner" />
        <meta property="og:description" content="Plan your debt repayment strategy. See your money clearly with EyeOnFinance." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app/debt-planner" />
      </Head>

      <Navbar />

      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Debt Planner</h1>
        <p className="text-lg mb-6">
          Here you will soon be able to enter your debts and plan your payoff strategy.
        </p>

        {/* You can build your Debt Planner form here */}
      </main>

      <Footer />
    </>
  );
}
