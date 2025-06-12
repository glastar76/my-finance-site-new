import { useState } from 'react';
import Head from 'next/head';

export default function SavingsGoals() {
  const [goals, setGoals] = useState([{ name: '', targetAmount: 0, currentAmount: 0 }]);
  const [results, setResults] = useState(null);

  const handleGoalChange = (index, field, value) => {
    const newGoals = [...goals];
    newGoals[index][field] = value;
    setGoals(newGoals);
  };

  const addGoal = () => {
    setGoals([...goals, { name: '', targetAmount: 0, currentAmount: 0 }]);
  };

  const calculateProgress = () => {
    const totalTarget = goals.reduce((sum, goal) => sum + parseFloat(goal.targetAmount || 0), 0);
    const totalCurrent = goals.reduce((sum, goal) => sum + parseFloat(goal.currentAmount || 0), 0);
    const percentComplete = totalTarget > 0 ? (totalCurrent / totalTarget) * 100 : 0;

    setResults({
      totalTarget,
      totalCurrent,
      percentComplete,
    });
  };

  return (
    <>
      <Head>
        <title>EyeOnFinance - Savings Goals</title>
        <meta name="description" content="Track your savings goals and make progress with EyeOnFinance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - Savings Goals" />
        <meta property="og:description" content="Track your savings goals and make progress with EyeOnFinance." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app/savings-goals" />
      </Head>

      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Savings Goals</h1>

        {goals.map((goal, index) => (
          <div key={index} className="mb-4 border p-3 rounded">
            <label className="block mb-1 font-semibold">Goal Name</label>
            <input
              type="text"
              value={goal.name}
              onChange={(e) => handleGoalChange(index, 'name', e.target.value)}
              className="border p-2 w-full mb-2"
            />

            <label className="block mb-1 font-semibold">Target Amount ($)</label>
            <input
              type="number"
              value={goal.targetAmount}
              onChange={(e) => handleGoalChange(index, 'targetAmount', e.target.value)}
              className="border p-2 w-full mb-2"
            />

            <label className="block mb-1 font-semibold">Current Saved Amount ($)</label>
            <input
              type="number"
              value={goal.currentAmount}
              onChange={(e) => handleGoalChange(index, 'currentAmount', e.target.value)}
              className="border p-2 w-full"
            />
          </div>
        ))}

        <button
          onClick={addGoal}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 mb-4"
        >
          Add Another Goal
        </button>

        <button
          onClick={calculateProgress}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calculate Progress
        </button>

        {results && (
          <div className="mt-6 text-lg font-semibold">
            <p>Total Target Amount: ${results.totalTarget.toFixed(2)}</p>
            <p>Total Saved: ${results.totalCurrent.toFixed(2)}</p>
            <p>Overall Progress: {results.percentComplete.toFixed(1)}%</p>
          </div>
        )}
      </main>
    </>
  );
}

