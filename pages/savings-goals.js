import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

export default function SavingsGoals() {
  const [goals, setGoals] = useState([]);
  const [goalName, setGoalName] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [amountSaved, setAmountSaved] = useState('');

  const handleAddGoal = () => {
    if (!goalName || !targetAmount || !amountSaved) return;
    const newGoal = {
      id: Date.now(),
      name: goalName,
      target: parseFloat(targetAmount),
      saved: parseFloat(amountSaved),
    };
    setGoals([...goals, newGoal]);
    setGoalName('');
    setTargetAmount('');
    setAmountSaved('');
  };

  const handleDeleteGoal = (id) => {
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  const totalTarget = goals.reduce((sum, g) => sum + g.target, 0);
  const totalSaved = goals.reduce((sum, g) => sum + g.saved, 0);

  const chartData = [
    { name: 'Saved', value: totalSaved },
    { name: 'Remaining', value: Math.max(totalTarget - totalSaved, 0) },
  ];

  const COLORS = ['#2563eb', '#e5e7eb']; // blue and gray

  return (
    <>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2477753161296870"
     crossorigin="anonymous"></script>
        <title>EyeOnFinance - Savings Goals</title>
      </Head>

      <Navbar />

      <main className="max-w-2xl mx-auto p-4 text-white">
        <h1 className="text-3xl font-bold mb-4">Savings Goals</h1>

        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Goal Name"
            value={goalName}
            onChange={(e) => setGoalName(e.target.value)}
            className="border p-2 w-full text-black"
          />
          <input
            type="number"
            placeholder="Target Amount ($)"
            value={targetAmount}
            onChange={(e) => setTargetAmount(e.target.value)}
            className="border p-2 w-full text-black"
          />
          <input
            type="number"
            placeholder="Amount Saved ($)"
            value={amountSaved}
            onChange={(e) => setAmountSaved(e.target.value)}
            className="border p-2 w-full text-black"
          />
          <button
            onClick={handleAddGoal}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          >
            Add Goal
          </button>
        </div>

        {goals.length > 0 && (
          <>
            <h2 className="text-2xl font-semibold mb-4">Your Goals</h2>
            <ul className="space-y-4 mb-6">
              {goals.map((goal) => {
                const percent = Math.min((goal.saved / goal.target) * 100, 100).toFixed(1);
                return (
                  <li key={goal.id} className="border p-4 rounded bg-gray-800">
                    <div className="flex justify-between items-center mb-2">
                      <div>
                        <p className="font-bold text-lg">{goal.name}</p>
                        <p className="text-sm">
                          ${goal.saved.toFixed(2)} of ${goal.target.toFixed(2)} saved
                        </p>
                        <div className="h-2 bg-gray-600 rounded mt-2">
                          <div
                            className="h-2 bg-blue-500 rounded"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <p className="text-sm mt-1">{percent}% complete</p>
                      </div>
                      <button
                        onClick={() => handleDeleteGoal(goal.id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="bg-gray-800 p-4 rounded">
              <h3 className="text-xl font-bold mb-2">Total Progress</h3>
              <p className="mb-4">
                ${totalSaved.toFixed(2)} saved of ${totalTarget.toFixed(2)}
              </p>

              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    label
                    outerRadius={100}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

