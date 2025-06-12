import { useState } from 'react';
import Head from 'next/head';

export default function DebtPlanner() {
  const [debts, setDebts] = useState([{ name: '', balance: 0, interestRate: 0, minPayment: 0 }]);
  const [monthlyBudget, setMonthlyBudget] = useState(0);
  const [results, setResults] = useState(null);

  const handleDebtChange = (index, field, value) => {
    const newDebts = [...debts];
    newDebts[index][field] = value;
    setDebts(newDebts);
  };

  const addDebt = () => {
    setDebts([...debts, { name: '', balance: 0, interestRate: 0, minPayment: 0 }]);
  };

  const calculatePlan = () => {
    // Basic placeholder logic — you can upgrade this later with real payoff calculation
    const totalBalance = debts.reduce((sum, debt) => sum + parseFloat(debt.balance || 0), 0);
    const totalMinPayment = debts.reduce((sum, debt) => sum + parseFloat(debt.minPayment || 0), 0);

    setResults({
      totalBalance,
      totalMinPayment,
    });
  };

  return (
    <>
      <Head>
        <title>EyeOnFinance - Debt Planner</title>
        <meta name="description" content="Plan your debt payments and create a path to financial freedom with EyeOnFinance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - Debt Planner" />
        <meta property="og:description" content="Plan your debt payments and create a path to financial freedom with EyeOnFinance." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app/debt-planner" />
      </Head>

      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Debt Planner</h1>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Monthly Debt Payment Budget ($)</label>
          <input
            type="number"
            value={monthlyBudget}
            onChange={(e) => setMonthlyBudget(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <h2 className="text-2xl font-bold mb-2">Your Debts</h2>

        {debts.map((debt, index) => (
          <div key={index} className="mb-4 border p-3 rounded">
            <label className="block mb-1 font-semibold">Debt Name</label>
            <input
              type="text"
              value={debt.name}
              onChange={(e) => handleDebtChange(index, 'name', e.target.value)}
              className="border p-2 w-full mb-2"
            />

            <label className="block mb-1 font-semibold">Balance ($)</label>
            <input
              type="number"
              value={debt.balance}
              onChange={(e) => handleDebtChange(index, 'balance', e.target.value)}
              className="border p-2 w-full mb-2"
            />

            <label className="block mb-1 font-semibold">Interest Rate (%)</label>
            <input
              type="number"
              value={debt.interestRate}
              onChange={(e) => handleDebtChange(index, 'interestRate', e.target.value)}
              className="border p-2 w-full mb-2"
            />

            <label className="block mb-1 font-semibold">Minimum Payment ($)</label>
            <input
              type="number"
              value={debt.minPayment}
              onChange={(e) => handleDebtChange(index, 'minPayment', e.target.value)}
              className="border p-2 w-full"
            />
          </div>
        ))}

        <button
          onClick={addDebt}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 mb-4"
        >
          Add Another Debt
        </button>

        <button
          onClick={calculatePlan}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calculate Plan
        </button>

        {results && (
          <div className="mt-6 text-lg font-semibold">
            <p>Total Debt Balance: ${results.totalBalance.toFixed(2)}</p>
            <p>Total Minimum Monthly Payments: ${results.totalMinPayment.toFixed(2)}</p>
          </div>
        )}
      </main>
    </>
  );
}

