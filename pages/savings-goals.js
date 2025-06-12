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

    setGoalName('');
    setTargetAmount('');
    setCurrentAmount('');
  };

  return (
    <>
      <Head>
        <title>EyeOnFinance - Savings Goals</title>
      </Head>

      <Navbar />

      <main className="max-w-xl mx-auto p-4 text-white">
        <h1 className="text-3xl font-bold mb-4">Savings Goals</h1>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Goal Name"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="number"
            placeholder="Target Amount ($)"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="number"
            placeholder="Current Amount Saved ($)"
            value={currentAmount}
            onChange={(e) => setCurrentAmount(e.target.value)}
            className="border p-2 w-full"
          />
          <button
            onClick={handleAddGoal}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
          >
            Add Goal
          </button>
        </div>

        {goals.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Your Savings Goals</h2>
            <ul className="space-y-2">
              {goals.map((goal, index) => {
                const progressPercent = Math.min(
                  (goal.currentAmount / goal.targetAmount) * 100,
                  100
                );

                return (
                  <li
                    key={index}
                    className="border p-4 rounded bg-gray-800"
                  >
                    <p className="font-bold">{goal.name}</p>
                    <p>
                      ${goal.currentAmount.toFixed(2)} / ${goal.targetAmount.toFixed(2)}
                    </p>
                    <div className="w-full bg-gray-700 rounded h-4 mt-2">
                      <div
                        className="bg-green-500 h-4 rounded"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>
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

