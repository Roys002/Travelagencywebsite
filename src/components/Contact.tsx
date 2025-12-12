import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Hubungi Kami</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Siap untuk memulai petualangan Anda? Hubungi kami sekarang untuk konsultasi gratis dan booking paket wisata
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl mb-8">Informasi Kontak</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Telepon / WhatsApp</p>
                  <a href="tel:+628123456789" className="text-lg hover:text-blue-600 transition">
                    +62 812-3456-7890
                  </a>
                  <br />
                  <a href="tel:+622112345678" className="text-lg hover:text-blue-600 transition">
                    (021) 1234-5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email</p>
                  <a href="mailto:info@exploretravel.com" className="text-lg hover:text-blue-600 transition">
                    info@exploretravel.com
                  </a>
                  <br />
                  <a href="mailto:booking@exploretravel.com" className="text-lg hover:text-blue-600 transition">
                    booking@exploretravel.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Alamat Kantor</p>
                  <p className="text-lg">
                    Jl. Sudirman No. 123<br />
                    Jakarta Pusat 10220<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Jam Operasional</p>
                  <p className="text-lg">
                    Senin - Jumat: 09:00 - 18:00<br />
                    Sabtu: 09:00 - 15:00<br />
                    Minggu: Tutup
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="mb-4">Ikuti Kami</h4>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg transition"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a 
                  href="https://wa.me/628123456789" 
                  className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <h3 className="text-2xl mb-6">Kirim Pesan</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Masukkan nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="+62 812-3456-7890"
                />
              </div>

              <div>
                <label htmlFor="package" className="block text-sm mb-2">
                  Paket yang Diminati
                </label>
                <select
                  id="package"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="">Pilih Paket Wisata</option>
                  <option value="bali">Bali Paradise</option>
                  <option value="bromo">Bromo Sunrise Adventure</option>
                  <option value="singapore">Singapore City Tour</option>
                  <option value="jogja">Yogyakarta Cultural Heritage</option>
                  <option value="rajaampat">Raja Ampat Diving Paradise</option>
                  <option value="komodo">Cruise to Komodo Island</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
