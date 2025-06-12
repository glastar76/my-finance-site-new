import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SavingsGoals() {
  return (
    <>
      <Head>
        <title>EyeOnFinance - Savings Goals</title>
        <meta name="description" content="Set and track your savings goals. See your money clearly with EyeOnFinance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - Savings Goals" />
        <meta property="og:description" content="Set and track your savings goals. See your money clearly with EyeOnFinance." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app/savings-goals" />
      </Head>

      <Navbar />

      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Savings Goals</h1>
        <p className="text-lg mb-6">
          Here you will soon be able to create and track your savings goals.
        </p>

        {/* You can build your Savings Goals form here */}
      </main>

      <Footer />
    </>
  );
}
