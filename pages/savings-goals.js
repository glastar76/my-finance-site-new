import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { useState } from 'react';
export default function SavingsGoals() {
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [monthlyContribution, setMonthlyContribution] = useState('');
  const [results, setResults] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    const amount = parseFloat(goalAmount);
    const contribution = parseFloat(monthlyContribution);

    const months = Math.ceil(amount / contribution);

    setResults({
      months,
    });
  };

  return (
    <>
 <Head>
  <title>EyeOnFinance - Personal Finance Tools</title>
  <meta name="description" content="See your money clearly with EyeOnFinance. Plan your paycheck, manage debt, and grow savings." />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="EyeOnFinance" />
  <meta property="og:title" content="EyeOnFinance - Personal Finance Tools" />
  <meta property="og:description" content="See your money clearly with EyeOnFinance. Plan your paycheck, manage debt, and grow savings." />
  <meta property="og:image" content="/og-image.png" />
  <meta property="og:url" content="https://my-finance-site-new.vercel.app/" />
</Head>

<main>
        {/* Your homepage content here */}
      </main>
      <Navbar />
      <div className="p-5 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Savings Goals</h1>
        <form onSubmit={handleCalculate} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Goal Name:</label>
            <input
              type="text"
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Goal Amount ($):</label>
            <input
              type="number"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Monthly Contribution ($):</label>
            <input
              type="number"
              value={monthlyContribution}
              onChange={(e) => setMonthlyContribution(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Calculate Goal Timeline
          </button>
        </form>

        {results && (
          <div className="mt-6 p-4 border rounded bg-gray-50">
            <h2 className="text-xl font-semibold">Results for {goalName}:</h2>
            <p>Months to Reach Goal: {results.months}</p>
          </div>
        )}
      </div>
        <Footer />
    </>
  );
}
