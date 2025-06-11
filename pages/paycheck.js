import Head from 'next/head';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import { useState } from 'react';

export default function Paycheck() {
  const [grossPay, setGrossPay] = useState('');
  const [taxRate, setTaxRate] = useState('');
  const [netPay, setNetPay] = useState(null);

  const handleCalculate = (e) => {
    e.preventDefault();
    const net = grossPay * (1 - taxRate / 100);
    setNetPay(net.toFixed(2));
  };

  return (
    <>
 <Head>
  <title>Finance Tools - Paycheck Calculator</title>
  <meta name="description" content="Calculate your net paycheck after taxes." />
</Head>
<main>
        {/* Your homepage content here */}
      </main>

      <Navbar />
      <div className="p-5 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-6">Paycheck Calculator</h1>
        <form onSubmit={handleCalculate} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Gross Pay ($):</label>
            <input
              type="number"
              value={grossPay}
              onChange={(e) => setGrossPay(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Estimated Tax Rate (%):</label>
            <input
              type="number"
              value={taxRate}
              onChange={(e) => setTaxRate(e.target.value)}
              required
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Calculate Net Pay
          </button>
        </form>

        {netPay !== null && (
          <div className="mt-6 p-4 border rounded bg-gray-50">
            <h2 className="text-xl font-semibold">Net Pay: ${netPay}</h2>
          </div>
        )}
      </div>
         <Footer />
    </>
  );
}
