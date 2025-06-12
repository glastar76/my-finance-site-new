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
<main>
        import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function DebtPlanner() {
  const [debts, setDebts] = useState([]);
  const [debtName, setDebtName] = useState('');
  const [balance, setBalance] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [minPayment, setMinPayment] = useState('');
  const [strategy, setStrategy] = useState('snowball');
  const [payoffPlan, setPayoffPlan] = useState([]);

  const handleAddDebt = () => {
    const newDebt = {
      name: debtName,
      balance: parseFloat(balance),
      interestRate: parseFloat(interestRate),
      minPayment: parseFloat(minPayment),
    };

    setDebts([...debts, newDebt]);

    // Clear form
    setDebtName('');
    setBalance('');
    setInterestRate('');
    setMinPayment('');
  };

  const calculatePayoffPlan = () => {
    let debtsCopy = [...debts];

    // Sort debts by chosen strategy
    if (strategy === 'snowball') {
      debtsCopy.sort((a, b) => a.balance - b.balance);
    } else if (strategy === 'avalanche') {
      debtsCopy.sort((a, b) => b.interestRate - a.interestRate);
    }

    // Simulate payoff:
    const payoffResults = debtsCopy.map((debt) => {
      let remainingBalance = debt.balance;
      let months = 0;

      while (remainingBalance > 0) {
        // Interest for this month
        const monthlyInterest = (debt.interestRate / 100 / 12) * remainingBalance;

        // Pay at least min payment or remaining balance + interest
        const payment = Math.min(debt.minPayment, remainingBalance + monthlyInterest);

        // Update remaining balance
        remainingBalance = remainingBalance + monthlyInterest - payment;

        months++;
        if (months > 600) break; // prevent infinite loop in weird cases
      }

      return {
        name: debt.name,
        monthsToPayoff: months,
      };
    });

    setPayoffPlan(payoffResults);
  };

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
          Enter your debts below and choose a payoff strategy.
        </p>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Debt Name"
            value={debtName}
            onChange={(e) => setDebtName(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="number"
            placeholder="Balance ($)"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="number"
            placeholder="Interest Rate (%)"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="number"
            placeholder="Minimum Payment ($)"
            value={minPayment}
            onChange={(e) => setMinPayment(e.target.value)}
            className="border p-2 w-full"
          />
          <button
            onClick={handleAddDebt}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Add Debt
          </button>
        </div>

        {debts.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Your Debts</h2>
            <ul className="space-y-2 mb-6">
              {debts.map((debt, index) => (
                <li
                  key={index}
                  className="border p-4 rounded bg-gray-50"
                >
                  <p className="font-bold">{debt.name}</p>
                  <p>Balance: ${debt.balance.toFixed(2)}</p>
                  <p>Interest Rate: {debt.interestRate}%</p>
                  <p>Minimum Payment: ${debt.minPayment.toFixed(2)}</p>
                </li>
              ))}
            </ul>

            <div className="mb-4">
              <label className="block mb-1 font-semibold">Payoff Strategy</label>
              <select
                value={strategy}
                onChange={(e) => setStrategy(e.target.value)}
                className="border p-2 w-full"
              >
                <option value="snowball">Snowball (Lowest Balance First)</option>
                <option value="avalanche">Avalanche (Highest Interest First)</option>
              </select>
            </div>

            <button
              onClick={calculatePayoffPlan}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full mb-6"
            >
              Calculate Payoff Plan
            </button>
          </>
        )}

        {payoffPlan.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Payoff Plan</h2>
            <ul className="space-y-2">
              {payoffPlan.map((debt, index) => (
                <li key={index} className="border p-4 rounded bg-green-50">
                  <p className="font-bold">{debt.name}</p>
                  <p>Estimated Months to Payoff: {debt.monthsToPayoff}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-xl font-bold">
              Total Months to Debt-Free:{' '}
              {Math.max(...payoffPlan.map((d) => d.monthsToPayoff))}
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

        {/* You can build your Debt Planner form here */}
      </main>

      <Footer />
    </>
  );
}
