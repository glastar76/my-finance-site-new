// pages/paycheck.js
import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const states = [
  { name: 'Alabama', tax: 0.05 },
  { name: 'California', tax: 0.093 },
  { name: 'Texas', tax: 0.00 },
  // Add all states as needed...
];

export default function PaycheckCalculator() {
  const [payType, setPayType] = useState('hourly');
  const [rate, setRate] = useState('');
  const [hours, setHours] = useState('');
  const [overtime, setOvertime] = useState('');
  const [state, setState] = useState(states[0].name);
  const [result, setResult] = useState(null);

  const calculate = () => {
    const gross =
      payType === 'salary'
        ? parseFloat(rate) / 12
        : (parseFloat(rate) * parseFloat(hours)) +
          (parseFloat(rate) * 1.5 * parseFloat(overtime));

    const stateTaxRate = states.find((s) => s.name === state)?.tax || 0;
    const federalTax = 0.12; // Example flat 12%
    const ssTax = 0.062;
    const medicareTax = 0.0145;

    const deductions =
      gross * (stateTaxRate + federalTax + ssTax + medicareTax);

    const net = gross - deductions;

    setResult({
      gross: gross.toFixed(2),
      net: net.toFixed(2),
      deductions: deductions.toFixed(2),
    });
  };

  return (
    <>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2477753161296870"
     crossorigin="anonymous"></script>
        <title>EyeOnFinance - Paycheck Calculator</title>
      </Head>
      <Navbar />

      <main className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-4">
        <div className="max-w-xl w-full bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Paycheck Calculator
          </h1>

          <div className="space-y-4">
            <div>
              <label className="block mb-1">Pay Type</label>
              <select
                value={payType}
                onChange={(e) => setPayType(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              >
                <option value="hourly">Hourly</option>
                <option value="salary">Salary</option>
              </select>
            </div>

            <div>
              <label className="block mb-1">
                {payType === 'salary' ? 'Annual Salary ($)' : 'Hourly Rate ($)'}
              </label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              />
            </div>

            {payType === 'hourly' && (
              <>
                <div>
                  <label className="block mb-1">Regular Hours</label>
                  <input
                    type="number"
                    value={hours}
                    onChange={(e) => setHours(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                  />
                </div>

                <div>
                  <label className="block mb-1">Overtime Hours</label>
                  <input
                    type="number"
                    value={overtime}
                    onChange={(e) => setOvertime(e.target.value)}
                    className="w-full p-2 rounded bg-gray-800 border border-gray-600"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block mb-1">State</label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              >
                {states.map((s, i) => (
                  <option key={i} value={s.name}>
                    {s.name}
                  </option>

