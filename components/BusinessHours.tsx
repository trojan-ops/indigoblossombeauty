import { businessHours } from "@/data/salonInfo";
import Link from "next/link";

export default function BusinessHours() {
  return (
    <section
      id="hourlies-section"
      className="min-h-screen flex flex-col justify-center items-center bg-zinc-950 text-white px-4 py-20"
      aria-labelledby="hourlies-subtitle"
    >
      <div className="w-full max-w-xl mx-auto space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-pink-400 uppercase tracking-widest text-xs font-semibold">
            Sussex Inlet, NSW
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight text-pink-500 flex items-center justify-center gap-3"
            id="hourlies-subtitle"
          >
            Business Hours{" "}
            <i className="fa-regular fa-clock text-pink-400 text-2xl" aria-hidden="true"></i>
          </h2>
          <p className="text-gray-400 text-sm max-w-sm mx-auto leading-relaxed">
            We look forward to welcoming you to Indigo Blossom Beauty. Plan your next visit below.
          </p>
        </div>

        {/* Clean, Elegant Hours Panel */}
        <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-sm">
          <dl className="space-y-4">
            {Object.entries(businessHours).map(([day, time]) => {
              const isClosed = time.toLowerCase().includes("closed");
              return (
                <div
                  key={day}
                  className="flex justify-between items-center py-2.5 border-b border-zinc-800/60 last:border-none"
                >
                  <dt className="text-gray-300 font-medium capitalize tracking-wide text-base">
                    {day}
                  </dt>
                  <dd
                    className={`font-medium tracking-wide text-base ${isClosed ? "text-zinc-500 italic" : "text-pink-400 font-semibold"}`}
                  >
                    {time}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>

        {/* Action Button */}
        <div className="text-center pt-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3.5 rounded-xl font-medium shadow-lg hover:shadow-pink-600/25 transition-all duration-300"
          >
            Book An Appointment <i className="fa-regular fa-calendar-check" aria-hidden="true"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
