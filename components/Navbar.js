export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center shadow">
      <div className="font-bold text-2xl tracking-wide">EyeOnFinance</div>
      <div className="space-x-6 text-lg">
        <a href="/" className="hover:text-gray-300">Home</a>
        <a href="/paycheck" className="hover:text-gray-300">Paycheck</a>
        <a href="/debt-planner" className="hover:text-gray-300">Debt Planner</a>
        <a href="/savings-goals" className="hover:text-gray-300">Savings Goals</a>
      </div>
    </nav>
  );
}
