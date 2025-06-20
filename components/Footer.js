export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-12">
      <p className="text-lg font-semibold mb-2">See your money clearly</p>
      <p className="text-sm">
        &copy; {new Date().getFullYear()} EyeOnFinance Financial Tools . All rights reserved.
      </p>
    </footer>
  );
}
