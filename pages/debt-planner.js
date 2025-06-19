// pages/debt-planner.js
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
    setDebtName('');
    setBalance('');
    setInterestRate('');
    setMinPayment('');
  };

  const calculatePayoffPlan = () => {
    let debtsCopy = [...debts];
    if (strategy === 'snowball') {
      debtsCopy.sort((a, b) => a.balance - b.balance);
    } else {
      debtsCopy.sort((a, b) => b.interestRate - a.interestRate);
    }

    const payoffResults = debtsCopy.map((debt) => {
      let remainingBalance = debt.balance;
      let months = 0;

      while (remainingBalance > 0) {
        const monthlyInterest = (debt.interestRate / 100 / 12) * remainingBalance;
        const payment = Math.min(debt.minPayment, remainingBalance + monthlyInterest);
        remainingBalance = remainingBalance + monthlyInterest - payment;
        months++;
        if (months > 600) break;
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
      </Head>
      <Navbar />
      <main className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-start px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Debt Planner</h1>
        <p className="text-lg mb-6">Enter your debts and choose a payoff strategy.</p>

        <div className="w-full max-w-md space-y-4">
          <input type="text" placeholder="Debt Name" value={debtName} onChange={(e) => setDebtName(e.target.value)} className="w-full p-2 rounded bg-white text-black" />
          <input type="number" placeholder="Balance ($)" value={balance} onChange={(e) => setBalance(e.target.value)} className="w-full p-2 rounded bg-white text-black" />
          <input type="number" placeholder="Interest Rate (%)" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} className="w-full p-2 rounded bg-white text-black" />
          <input type="number" placeholder="Minimum Payment ($)" value={minPayment} onChange={(e) => setMinPayment(e.target.value)} className="w-full p-2 rounded bg-white text-black" />

          <button onClick={handleAddDebt} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full">
            Add Debt
          </button>

          <select value={strategy} onChange={(e) => setStrategy(e.target.value)} className="w-full p-2 rounded bg-white text-black">
            <option value="snowball">Snowball (Lowest Balance First)</option>
            <option value="avalanche">Avalanche (Highest Interest First)</option>
          </select>

          <button onClick={calculatePayoffPlan} className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full">
            Calculate Payoff Plan
          </button>
        </div>

        {debts.length > 0 && (
          <div className="mt-8 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Your Debts</h2>
            <ul className="space-y-2">
              {debts.map((debt, index) => (
                <li key={index} className="bg-gray-800 p-4 rounded">
                  <p className="font-bold">{debt.name}</p>
                  <p>Balance: ${debt.balance.toFixed(2)}</p>
                  <p>Interest Rate: {debt.interestRate}%</p>
                  <p>Minimum Payment: ${debt.minPayment.toFixed(2)}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {payoffPlan.length > 0 && (
          <div className="mt-8 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Payoff Plan</h2>
            <ul className="space-y-2">
              {payoffPlan.map((debt, index) => (
                <li key={index} className="bg-green-800 p-4 rounded">
                  <p className="font-bold">{debt.name}</p>
                  <p>Estimated Months to Payoff: {debt.monthsToPayoff}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

     
