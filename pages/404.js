export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Page not found</p>
      <a
        href="/"
        className="bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
      >
        Go back home
      </a>
    </div>
  );
}
