// pages/savings-goals.js
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SavingsGoals() {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [currentAmount, setCurrentAmount] = useState('');

  const handleAddGoal = () => {
    const newGoal = {
      name: goalName,
      targetAmount: parseFloat(targetAmount),
      currentAmount: parseFloat(currentAmount),
    };

    setGoals([...goals, newGoal]);

    // Clear form
    setGoalName('');
    setTargetAmount('');
    setCurrentAmount('');
  };

  const handleUpdateGoal = (index, amount) => {
    const updatedGoals = [...goals];
    updatedGoals[index].currentAmount = parseFloat(amount);
    setGoals(updatedGoals);
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  return (
    <>
      <Head>
        <title>EyeOnFinance - Savings Goals</title>
        <meta name="description" content="Track and achieve your savings goals. See your money clearly with EyeOnFinance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - Savings Goals" />
        <meta property="og:description" content="Track and achieve your savings goals. See your money clearly with EyeOnFinance." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app/savings-goals" />
      </Head>

      <Navbar />

      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-primary">Savings Goals</h1>
        <p className="text-lg mb-6 text-gray-600">
          Track your progress toward your financial goals.
        </p>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Goal Name"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            className="border border-primary rounded p-2 w-full"
          />
          <input
            type="number"
            placeholder="Target Amount ($)"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            className="border border-primary rounded p-2 w-full"
          />
          <input
            type="number"
            placeholder="Current Amount Saved ($)"
            value={currentAmount}
            onChange={(e) => setCurrentAmount(e.target.value)}
            className="border border-primary rounded p-2 w-full"
          />
          <button
            onClick={handleAddGoal}
            className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark w-full"
          >
            Add Goal
          </button>
        </div>

        {goals.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Your Savings Goals</h2>
            <ul className="space-y-4">
              {goals.map((goal, index) => {
                const progressPercent = Math.min(
                  (goal.currentAmount / goal.targetAmount) * 100,
                  100
                );

                return (
                  <li key={index} className="border p-4 rounded bg-gray-50">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-bold text-primary">{goal.name}</p>
                      <button
                        onClick={() => handleDeleteGoal(index)}
                        className="text-red-500 hover:text-red-700 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                    <p>Target: ${goal.targetAmount.toFixed(2)}</p>
                    <p>Saved: ${goal.currentAmount.toFixed(2)}</p>
                    <div className="w-full bg-gray-200 rounded h-4 my-2">
                      <div
                        className="bg-green-600 h-4 rounded"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
                    <input
                      type="number"
                      value={goal.currentAmount}
                      onChange={(e) => handleUpdateGoal(index, e.target.value)}
                      className="border border-primary rounded p-2 w-full mt-2"
                      placeholder="Update saved amount"
                    />
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

