import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { useState } from 'react';

export default function DebtPlanner() {
  const [debtName, setDebtName] = useState('');
  const [balance, setBalance] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [monthlyPayment, setMonthlyPayment] = useState('');
  const [results, setResults] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();

    const principal = parseFloat(balance);
    const monthlyRate = parseFloat(interestRate) / 100 / 12;
    const payment = parseFloat(monthlyPayment);

    let months = 0;
    let remaining = principal;
    let totalInterest = 0;

    while (remaining > 0 && months < 600) {
      const interest = remaining * monthlyRate;
      remaining = remaining + interest - payment;
      totalInterest += interest;
      months++;
      if (remaining < 0) remaining = 0;
    }

    setResults({
      months,
      totalInterest: totalInterest.toFixed(2),
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
        <h1 className="text-3xl font-bold mb-6">Debt Planner</h1>
        <form onSubmit={handleCalculate} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Debt Name:</label>
            <input
              type="text"
              value={debtName}
              onChange={(e) => setDebtName(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Total Balance ($):</label>
            <input
              type="number"
              value={balance}
              onChange={(e) => setBalance(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Interest Rate (% annual):</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Minimum Monthly Payment ($):</label>
            <input
              type="number"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Calculate Payoff
          </button>
        </form>

        {results && (
          <div className="mt-6 p-4 border rounded bg-gray-50">
            <h2 className="text-xl font-semibold">Results for {debtName}:</h2>
            <p>Months to Pay Off: {results.months}</p>
            <p>Total Interest Paid: ${results.totalInterest}</p>
          </div>
        )}
      </div>
       <Footer />
    </>
  );
}
