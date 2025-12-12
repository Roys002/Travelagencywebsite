export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl mb-4">✈️ Explore Travel</h3>
            <p className="text-gray-400 mb-4">
              Agen perjalanan terpercaya sejak 2010. Kami siap membantu mewujudkan liburan impian Anda 
              ke berbagai destinasi menarik di Indonesia dan mancanegara.
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 Explore Travel. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#packages" className="hover:text-white transition">Paket Wisata</a></li>
              <li><a href="#about" className="hover:text-white transition">Tentang Kami</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Testimoni</a></li>
              <li><a href="#contact" className="hover:text-white transition">Kontak</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Syarat & Ketentuan</a></li>
              <li><a href="#" className="hover:text-white transition">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-white transition">Kebijakan Pembatalan</a></li>
              <li><a href="#" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>Made with ❤️ for travelers around the world</p>
        </div>
      </div>
    </footer>
  );
}
