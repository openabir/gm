export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#FF7A00] to-[#CC6200] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-3">
              <span>Growth Marg</span>
            </div>
            <p className="text-sm text-white/90 font-[family-name:var(--font-borel)]">
              Builds Network,<br />Grows Networth.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a href="#works" className="text-white/90 hover:text-white transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/90 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/90 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@growthmarg.com" className="text-white/90 hover:text-white transition-colors">
                  hello@growthmarg.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/919876543210" className="text-white/90 hover:text-white transition-colors">
                  WhatsApp
                </a>
              </li>
              <li className="text-white/90">
                Tripura, India
              </li>
            </ul>
          </div>

          {/* Find Us */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Find Us</h3>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-sm text-white/90">
                Based in Tripura<br />
                Serving clients globally
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/20 text-center text-sm text-white/80">
          <p>© {new Date().getFullYear()} Growth Marg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
