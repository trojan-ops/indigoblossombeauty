import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full flex flex-col px-5 py-12 bg-zinc-900 text-white border-t border-zinc-800"
      id="footer"
    >
      <section
        className="w-full max-w-7xl mx-auto flex flex-col justify-start items-start sm:flex-row sm:justify-between gap-10"
        aria-label="Information and links section"
      >
        {/* Salon Info */}
        <div className="w-full sm:w-1/4 flex flex-col gap-3">
          <h2 className="text-xl font-bold text-pink-500 flex items-center gap-2">
            <i className="fa-solid fa-spa"></i> Indigo Blossom Beauty
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Sussex Inlet’s serene salon offering luxury facials, soothing massages, meticulous nail
            care, and flawless brows & lashes.
          </p>
          <ul className="text-sm text-gray-300 space-y-1 pt-1">
            <li>
              <i className="fa-solid fa-location-dot text-pink-500 mr-2"></i> Sussex Inlet, NSW
            </li>
            <li>
              <i className="fa-solid fa-envelope text-pink-500 mr-2"></i>{" "}
              indigoblossombeauty@gmail.com
            </li>
            <li>
              <i className="fa-solid fa-phone text-pink-500 mr-2"></i> 0407 243 573
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <nav className="w-full sm:w-fit flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-white">Quick Links</h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li>
              <Link href="/" className="hover:text-pink-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-pink-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-pink-400 transition">
                All Services & Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-400 transition">
                Contact & Book
              </Link>
            </li>
          </ul>
        </nav>

        {/* Services Links */}
        <nav className="w-full sm:w-fit flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-white">Treatments</h2>
          <ul className="flex flex-col gap-2 text-sm text-gray-300">
            <li>
              <Link href="/services/facials" className="hover:text-pink-400 transition">
                Facials & Advanced Skin
              </Link>
            </li>
            <li>
              <Link href="/services/massages" className="hover:text-pink-400 transition">
                Soothing Massages
              </Link>
            </li>
            <li>
              <Link href="/services/nails" className="hover:text-pink-400 transition">
                Nail Care & Pedicures
              </Link>
            </li>
            <li>
              <Link href="/services/lashes-brows" className="hover:text-pink-400 transition">
                Lashes & Brows
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="w-full sm:w-fit flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-white">Follow Us</h2>
          <p className="text-xs text-gray-400">Stay updated on Instagram</p>
          <div className="flex justify-start items-center gap-4 text-2xl pt-1">
            <a
              href="https://www.instagram.com/indigoblossombeauty"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-500 transition"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <section
        className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center mt-12 pt-6 border-t border-zinc-800 text-xs text-gray-400"
        aria-label="Copyright & author section"
      >
        <p>© {currentYear} Indigo Blossom Beauty. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">
          Website developed by{" "}
          <a
            className="dev-github font-medium text-pink-400 hover:underline"
            href="https://github.com/trojan-ops"
            target="_blank"
            rel="noopener noreferrer"
          >
            Troy Watson <i className="fa-brands fa-github"></i>
          </a>
        </p>
      </section>
    </footer>
  );
}
