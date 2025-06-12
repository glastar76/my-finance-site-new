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

     <main className="max-w-2xl mx-auto p-6">
  <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Savings Goals</h1>
  <p className="text-lg mb-8 text-center text-gray-600">
    Track your goals and visualize your progress.
  </p>

  {/* Add Goal Form */}
  <div className="space-y-4 bg-white shadow rounded p-6 mb-8 border border-gray-200">
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add New Goal</h2>
    <input
      type="text"
      placeholder="Goal Name"
      value={goalName}
      onChange={(e) => setGoalName(e.target.value)}
      className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
    />
    <input
      type="number"
      placeholder="Goal Amount ($)"
      value={goalAmount}
      onChange={(e) => setGoalAmount(e.target.value)}
      className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
    />
    <input
      type="number"
      placeholder="Current Saved Amount ($)"
      value={savedAmount}
      onChange={(e) => setSavedAmount(e.target.value)}
      className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
    />
    <button
      onClick={handleAddGoal}
      className="bg-blue-600 text-white px-5 py-3 rounded hover:bg-blue-700 w-full text-lg font-semibold"
    >
      Add Goal
    </button>
  </div>

  {/* Goals List */}
  {goals.length > 0 && (
    <>
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Goals</h2>
      <ul className="space-y-6">
        {goals.map((goal, index) => {
          const progress = Math.min((goal.savedAmount / goal.goalAmount) * 100, 100).toFixed(1);

          return (
            <li
              key={index}
              className="bg-white shadow p-6 rounded border border-gray-200"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gray-700">{goal.name}</h3>
                <button
                  onClick={() => handleDeleteGoal(index)}
                  className="text-red-600 hover:text-red-800 text-sm font-semibold"
                >
                  Delete
                </button>
              </div>

              <p className="text-gray-600 mb-2">
                Goal: ${goal.goalAmount.toFixed(2)} | Saved: ${goal.savedAmount.toFixed(2)}
              </p>

              <div className="w-full bg-gray-200 h-5 rounded mb-2 overflow-hidden">
                <div
                  className="bg-green-500 h-5 text-xs text-white text-center leading-5"
                  style={{ width: `${progress}%` }}
                >
                  {progress}%
                </div>
              </div>

              <input
                type="number"
                placeholder="Update Saved Amount"
                value={goal.savedAmount}
                onChange={(e) => handleUpdateSavedAmount(index, e.target.value)}
                className="border border-gray-300 p-3 w-full rounded focus:outline-none focus:ring focus:border-blue-300"
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
