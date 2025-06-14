// pages/index.js
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>EyeOnFinance - Home</title>
        <meta name="description" content="See your money clearly. Plan your finances with clarity." />
      </Head>

      <Navbar />

      <main className="bg-gray-900 text-white flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to EyeOnFinance</h1>
          <p className="text-lg md:text-xl">See your money clearly. Plan your finances with clarity.</p>

          <div className="flex flex-col space-y-4 w-full max-w-sm">
            <Link href="/paycheck" legacyBehavior>
              <a className="bg-blue-700 text-white py-3 rounded hover:bg-blue-800 text-lg font-semibold">
                Go to Paycheck Calculator
              </a>
            </Link>
            <Link href="/debt-planner" legacyBehavior>
              <a className="bg-blue-700 text-white py-3 rounded hover:bg-blue-800 text-lg font-semibold">
                Go to Debt Planner
              </a>
            </Link>
            <Link href="/savings-goals" legacyBehavior>
              <a className="bg-blue-700 text-white py-3 rounded hove




