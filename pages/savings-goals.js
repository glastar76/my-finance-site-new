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
  const [targetDate, setTargetDate] = useState('');

  // Load goals on page load
  useEffect(() => {
    const storedGoals = localStorage.getItem('savingsGoals');
    if (storedGoals) {
      setGoals(JSON.parse(storedGoals));
    }
  }, []);

  // Save goals to localStorage when they change
  useEffect(() => {
    localStorage.setItem('savingsGoals', JSON.stringify(goals));
  }, [goals]);

  const handleAddGoal = () => {
    if (!goalName || !goalAmount || !savedAmount) return;

    const newGoal = {
      name: goalName,
      amount: parseFloat(goalAmount),
      saved: parseFloat(savedAmount),
      targetDate,
    };

    setGoals([...goals, newGoal]);

    // Clear form
    setGoalName('');
    setGoalAmount('');
    setSavedAmount('');
    setTargetDate('');
  };

  const handleDeleteGoal = (index) => {
    const updatedGoals = goals.filter((_, i) => i !== index);
    setGoals(updatedGoals);
  };

  const handleProgressChange = (index, newSavedAmount) => {
    const updatedGoals = [...goals];
    updatedGoals[index].saved = parseFloat(newSavedAmount);
    setGoals(updatedGoals);
  };

  return (
    <>
      <Head>
        <title>EyeOnFinance - Savings Goals</title>
        <meta name="description" content="Track your savings goals and progress with EyeOnFinance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - Savings Goals" />
        <meta property="og:description" content="Track your savings goals and progress with EyeOnFinance." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app/savings-goals" />
      </Head>

      <Navbar />

      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Savings Goals</h1>
        <p className="text-lg mb-6">Enter your savings goals and track your progress.</p>

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
            placeholder="Saved Amount ($)"
            value={savedAmount}
            onChange={(e) => setSavedAmount(e.target.value)}
            className="border p-2 w-full"
          />
          <input
            type="date"
            placeholder="Target Date (optional)"
            value={targetDate}
            onChange={(e) => setTargetDate(e.target.value)}
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
            <h2 className="text-2xl font-semibold mb-4">Your Goals</h2>
            <ul className="space-y-4">
              {goals.map((goal, index) => {
                const progressPercent = Math.min((goal.saved / goal.amount) * 100, 100).toFixed(0);
                return (
                  <li
                    key={index}
                    className="border p-4 rounded bg-gray-50"
                  >
                    <p className="font-bold text-lg mb-1">{goal.name}</p>
                    <p className="mb-1">Goal: ${goal.amount.toFixed(2)}</p>
                    <p className="mb-1">Saved: ${goal.saved.toFixed(2)} ({progressPercent}%)</p>
                    {goal.targetDate && (
                      <p className="mb-2 text-sm text-gray-600">Target Date: {goal.targetDate}</p>
                    )}

                    {/* Progress Bar */}
                    <div className="w-full bg-gray-300 rounded h-3 mb-3">
                      <div
                        className="bg-green-500 h-3 rounded"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                    </div>

                    {/* Update Progress */}
                    <div className="flex items-center space-x-2 mb-3">
                      <input
                        type="number"
                        value={goal.saved}
                        onChange={(e) => handleProgressChange(index, e.target.value)}
                        className="border p-1 flex-1"
                      />
                      <button
                        onClick={() => handleDeleteGoal(index)}
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
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

