import NavigationBar from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LashesBrowsPage() {
  return (
    <main className="w-full bg-zinc-900 text-white min-h-screen flex flex-col justify-between">
      <NavigationBar />

      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500">Lashes & Brows</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Frame your face and highlight your natural features with precise brow styling and flawless
          lash lifts at Indigo Blossom Beauty in Sussex Inlet.
        </p>

        {/* Lashes & Brows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left my-8">
          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 flex flex-col justify-between shadow-lg">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-pink-400">Eyebrow Wax</h3>
              <p className="text-gray-300 text-sm leading-relaxed pt-1">
                Precision shaping and cleaning enhanced with trusted Elleebana formulas.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-zinc-700 mt-4">
              <span className="text-xs text-gray-400">Professional Styling</span>
              <span className="font-bold text-pink-500 text-lg">$40</span>
            </div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 flex flex-col justify-between shadow-lg">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-pink-400">Eyelash Lift & Tint</h3>
              <p className="text-gray-300 text-sm leading-relaxed pt-1">
                Lifts, curls, and darkens your natural lashes for a stunning, low-maintenance look.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-zinc-700 mt-4">
              <span className="text-xs text-gray-400">Elleebana Formulas</span>
              <span className="font-bold text-pink-500 text-lg">$60</span>
            </div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 flex flex-col justify-between shadow-lg">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-pink-400">Henna Brows</h3>
              <p className="text-gray-300 text-sm leading-relaxed pt-1">
                Rich, long-lasting tinting that colors both hair and skin for beautifully filled,
                defined brows.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-zinc-700 mt-4">
              <span className="text-xs text-gray-400">Long-Lasting Finish</span>
              <span className="font-bold text-pink-500 text-lg">$60</span>
            </div>
          </div>
        </div>

        {/* Product Callout */}
        <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800 text-center space-y-2">
          <h4 className="text-md font-semibold text-white">
            Enhanced with Trusted Elleebana Formulas
          </h4>
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            We use industry-leading professional products to ensure safe, stunning, and long-lasting
            definition for every lash and brow service.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded transition shadow"
          >
            Book Lash or Brow Treatment
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
