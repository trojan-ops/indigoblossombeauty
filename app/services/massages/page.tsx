import NavigationBar from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function MassagesPage() {
  return (
    <main className="w-full bg-zinc-900 text-white min-h-screen flex flex-col justify-between">
      <NavigationBar />

      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500">Soothing Massages</h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Melt away stress and unwind tight muscles with professional full-body massage therapy
          customized for your well-being at Indigo Blossom Beauty in Sussex Inlet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left my-8">
          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-pink-400 mb-2">Meditation Massage</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                A calming Swedish massage performed with sweet almond oil blended with gentle
                essential oils to quiet the mind and relax the body.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-zinc-700">
              <span className="text-xs text-gray-400">60 Minutes</span>
              <span className="font-bold text-pink-500 text-lg">$120</span>
            </div>
          </div>

          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-xl font-semibold text-pink-400 mb-2">Hot Stone Massage</h3>
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                Warm stones ease deep muscle tension, boost circulation, and bring the body back to
                a state of absolute calm and restoration.
              </p>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-zinc-700">
              <span className="text-xs text-gray-400">60 Minutes</span>
              <span className="font-bold text-pink-500 text-lg">$120</span>
            </div>
          </div>
        </div>

        {/* Product Callout */}
        <div className="bg-zinc-950 p-6 rounded-lg border border-zinc-800 text-center space-y-2">
          <h4 className="text-md font-semibold text-white">Enhanced with Pure Fiji Luxury</h4>
          <p className="text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Complement your massage experience with our tropical body care selections featuring
            nourishing exotic coconut oil and hydrating Pure Fiji plant source lotions.
          </p>
        </div>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 px-8 rounded transition shadow"
          >
            Schedule a Massage
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
