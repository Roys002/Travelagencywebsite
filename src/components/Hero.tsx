import { MapPin, Calendar, Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2NTQ5MjU3OHww&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      />
      
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-4 md:px-12">
        <div className="text-white">
          <span className="text-2xl">✈️ Explore Travel</span>
        </div>
        <div className="hidden md:flex gap-8 text-white">
          <a href="#packages" className="hover:text-blue-200 transition">Paket Wisata</a>
          <a href="#about" className="hover:text-blue-200 transition">Tentang Kami</a>
          <a href="#testimonials" className="hover:text-blue-200 transition">Testimoni</a>
          <a href="#contact" className="hover:text-blue-200 transition">Kontak</a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl mb-6">
          Jelajahi Dunia Bersama Kami
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl">
          Temukan pengalaman perjalanan tak terlupakan dengan paket wisata terbaik dan harga terjangkau
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <a href="#packages" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition">
            Lihat Paket Wisata
          </a>
          <a href="#contact" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg transition">
            Hubungi Kami
          </a>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-4xl">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <MapPin className="w-10 h-10 mb-3 mx-auto" />
            <h3 className="mb-2">100+ Destinasi</h3>
            <p className="text-sm">Pilihan destinasi wisata di seluruh dunia</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <Calendar className="w-10 h-10 mb-3 mx-auto" />
            <h3 className="mb-2">Fleksibel</h3>
            <p className="text-sm">Jadwal perjalanan yang dapat disesuaikan</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg">
            <Users className="w-10 h-10 mb-3 mx-auto" />
            <h3 className="mb-2">Tour Guide Profesional</h3>
            <p className="text-sm">Pemandu wisata berpengalaman dan ramah</p>
          </div>
        </div>
      </div>
    </div>
  );
}
