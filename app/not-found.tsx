import Link from "next/link";

export default function NotFound() {
  return (
    <main id="error-main" className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <section className="error-section px-4 text-center" aria-labelledby="error-title">
        <h1 className="text-6xl font-bold text-pink-600 mb-4" id="error-title">Oops!</h1>
        <p className="text-2xl text-gray-800 mb-2">Something went... wrong.</p>
        <p className="text-gray-600 mb-6">Or the resource that you are looking for does not exist.</p>
        <Link className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow hover:bg-pink-700 transition" href="/">
          Go Back to Site
        </Link>
      </section>
    </main>
  );
}
