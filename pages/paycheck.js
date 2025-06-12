import { useState } from 'react';
import Head from 'next/head';

export default function PaycheckCalculator() {
  const [payType, setPayType] = useState('salary');
  const [annualSalary, setAnnualSalary] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [hoursWorked, setHoursWorked] = useState(0);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [state, setState] = useState('CA');
  const [filingStatus, setFilingStatus] = useState('single');
  const [k401, setK401] = useState(0);
  const [otherDeductions, setOtherDeductions] = useState(0);
  const [netPay, setNetPay] = useState(null);

  const stateTaxRates = {
    AL: 5.0, AK: 0.0, AZ: 4.2, AR: 5.5, CA: 9.3, CO: 4.55, CT: 6.99, DE: 6.6, FL: 0.0,
    GA: 5.75, HI: 8.25, ID: 6.0, IL: 4.95, IN: 3.23, IA: 6.0, KS: 5.7, KY: 5.0, LA: 4.25,
    ME: 7.15, MD: 5.75, MA: 5.0, MI: 4.25, MN: 6.8, MS: 5.0, MO: 4.95, MT: 6.75, NE: 6.64,
    NV: 0.0, NH: 0.0, NJ: 6.37, NM: 5.9, NY: 6.33, NC: 4.75, ND: 2.9, OH: 3.99, OK: 4.75,
    OR: 9.9, PA: 3.07, RI: 5.99, SC: 6.5, SD: 0.0, TN: 0.0, TX: 0.0, UT: 4.85, VT: 6.6,
    VA: 5.75, WA: 0.0, WV: 6.5, WI: 5.3, WY: 0.0, DC: 8.5
  };

  const federalTaxBrackets = {
    single: [
      { limit: 11600, rate: 0.10 },
      { limit: 47150, rate: 0.12 },
      { limit: 100525, rate: 0.22 },
      { limit: 191950, rate: 0.24 },
      { limit: 243725, rate: 0.32 },
      { limit: 609350, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ],
    married: [
      { limit: 23200, rate: 0.10 },
      { limit: 94300, rate: 0.12 },
      { limit: 201050, rate: 0.22 },
      { limit: 383900, rate: 0.24 },
      { limit: 487450, rate: 0.32 },
      { limit: 731200, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ],
    head: [
      { limit: 16550, rate: 0.10 },
      { limit: 63100, rate: 0.12 },
      { limit: 100500, rate: 0.22 },
      { limit: 191950, rate: 0.24 },
      { limit: 243700, rate: 0.32 },
      { limit: 609350, rate: 0.35 },
      { limit: Infinity, rate: 0.37 },
    ],
  };

  const calculateFederalTax = (income, filingStatus) => {
    const brackets = federalTaxBrackets[filingStatus];
    let tax = 0;
    let previousLimit = 0;

    for (const bracket of brackets) {
      if (income > bracket.limit) {
        tax += (bracket.limit - previousLimit) * bracket.rate;
        previousLimit = bracket.limit;
      } else {
        tax += (income - previousLimit) * bracket.rate;
        break;
      }
    }

    return tax;
  };

  const handleCalculate = () => {
    let grossPay = 0;

    if (payType === 'salary') {
      grossPay = annualSalary / 26;
    } else {
      const regularPay = hourlyRate * hoursWorked;
      const overtimePay = overtimeHours * hourlyRate * 1.5;
      grossPay = regularPay + overtimePay;
    }

    const annualIncome = payType === 'salary' ? annualSalary : grossPay * 26;

    const federalTax = calculateFederalTax(annualIncome, filingStatus) / 26;
    const stateTax = grossPay * (stateTaxRates[state] / 100);
    const k401Contribution = grossPay * (k401 / 100);
    const medicareTax = grossPay * 0.0145;
    const socialSecurityTax = grossPay * 0.062;

    const totalDeductions =
      federalTax +
      stateTax +
      k401Contribution +
      medicareTax +
      socialSecurityTax +
      parseFloat(otherDeductions || 0);

    const netPayResult = grossPay - totalDeductions;

    setNetPay(netPayResult.toFixed(2));
  };

  return (
    <>
      <Head>
        <title>EyeOnFinance - Paycheck Calculator</title>
        <meta name="description" content="Advanced paycheck calculator. See your money clearly with EyeOnFinance." />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="EyeOnFinance" />
        <meta property="og:title" content="EyeOnFinance - Paycheck Calculator" />
        <meta property="og:description" content="Advanced paycheck calculator. See your money clearly with EyeOnFinance." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://my-finance-site-new.vercel.app/paycheck" />
      </Head>
    <Navbar/>
      <main className="max-w-xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4">Paycheck Calculator</h1>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Pay Type</label>
          <select
            value={payType}
            onChange={(e) => setPayType(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="salary">Salary</option>
            <option value="hourly">Hourly</option>
          </select>
        </div>

        {payType === 'salary' ? (
          <div className="mb-4">
            <label className="block mb-1 font-semibold">Annual Salary ($)</label>
            <input
              type="number"
              value={annualSalary}
              onChange={(e) => setAnnualSalary(e.target.value)}
              className="border p-2 w-full"
            />
          </div>
        ) : (
          <>
            <div className="mb-4">
              <label className="block mb-1 font-semibold">Hourly Rate ($)</label>
              <input
                type="number"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(e.target.value)}
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-semibold">Hours Worked</label>
              <input
                type="number"
                value={hoursWorked}
                onChange={(e) => setHoursWorked(e.target.value)}
                className="border p-2 w-full"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-semibold">Overtime Hours</label>
              <input
                type="number"
                value={overtimeHours}
                onChange={(e) => setOvertimeHours(e.target.value)}
                className="border p-2 w-full"
              />
            </div>
          </>
        )}

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Filing Status</label>
          <select
            value={filingStatus}
            onChange={(e) => setFilingStatus(e.target.value)}
            className="border p-2 w-full"
          >
            <option value="single">Single</option>
            <option value="married">Married Filing Jointly</option>
            <option value="head">Head of Household</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">State</label>
          <select
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="border p-2 w-full"
          >
            {Object.keys(stateTaxRates).map((abbr) => (
              <option key={abbr} value={abbr}>
                {abbr}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">401(k) Contribution %</label>
          <input
            type="number"
            value={k401}
            onChange={(e) => setK401(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Other Deductions ($)</label>
          <input
            type="number"
            value={otherDeductions}
            onChange={(e) => setOtherDeductions(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calculate Net Pay
        </button>

        {netPay !== null && (
          <div className="mt-6 text-xl font-semibold">
            Net Pay: ${netPay}
          </div>
        )}
      </main>
    </>
  );
}
