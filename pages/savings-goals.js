// pages/savings-goals.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SavingsGoals() {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [savedAmount, setSavedAmount] = useState('');

  // Load goals from localStorage on page load
  useEffect(() => {
    const storedGoals = localStorage.getItem('savingsGoals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  // Save goals to localStorage when goals change
  useEffect(() => {
    localStorage.setItem('savingsGoals', JSON.stringify(goals));
  }, [goals]);

  const handleAddGoal = () => {
    const newGoal = {
      name: goalName,
      goalAmount: parseFloat(goalAmount),
      savedAmount: parseFloat(savedAmount),
    };

    setGoals([...goals, newGoal]);

    // Clear form
    setGoalName('');
    setGoalAmount('');
    setSavedAmount('');
  };

  const handleUpdateSavedAmount = (index, newSavedAmount) => {
    const updatedGoals = [...goals];
    updatedGoals[index].savedAmount = parseFloat(newSavedAmount);
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
        <meta name="description" content="Track your savings goals and progress. See your money clearly with EyeOnFinance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - Savings Goals" />
        <meta property="og:description" content="Track your savings goals and progress. See your money clearly with EyeOnFinance." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app/savings-goals" />
      </Head>

      <Navbar />

      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Savings Goals</h1>
        <p className="text-lg mb-6">
          Enter your savings goals and track your progress.
        </p>

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
            placeholder="Goal Amount ($)"
            value={goalAmount}
            onChange={(e) => setGoalAmount(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="number"
            placeholder="Current Saved Amount ($)"
            value={savedAmount}
            onChange={(e) => setSavedAmount(e.target.value)}
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
                const progress = Math.min((goal.savedAmount / goal.goalAmount) * 100, 100);

                return (
                  <li
                    key={index}
                    className="border p-4 rounded bg-gray-50"
                  >
                    <p className="font-bold">{goal.name}</p>
                    <p>Goal Amount: ${goal.goalAmount.toFixed(2)}</p>
                    <p>Saved: ${goal.savedAmount.toFixed(2)}</p>
                    <div className="w-full bg-gray-200 h-4 rounded mt-2 mb-2">
                      <div
                        className="bg-green-500 h-4 rounded"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <input
                      type="number"
                      placeholder="Update Saved Amount"
                      value={goal.savedAmount}
                      onChange={(e) => handleUpdateSavedAmount(index, e.target.value)}
                      className="border p-2 w-full mb-2"
                    />
                    <button
                      onClick={() => handleDeleteGoal(index)}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
                    >
                      Delete Goal
                    </button>
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
