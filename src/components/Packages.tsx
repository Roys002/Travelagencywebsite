import { PackageCard } from './PackageCard';
import { Clock, Users, Star } from 'lucide-react';

const packages = [
  {
    id: 1,
    title: 'Bali Paradise',
    description: 'Nikmati keindahan pulau dewata dengan paket lengkap kunjungan ke pantai-pantai eksotis, pura bersejarah, dan sawah terasering yang menakjubkan.',
    image: 'https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNoJTIwcmVzb3J0fGVufDF8fHx8MTc2NTQ5MjU3OHww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '5 Hari 4 Malam',
    participants: '2-15 Orang',
    price: 'Rp 5.500.000',
    rating: 4.8,
    includes: ['Hotel Bintang 4', 'Transportasi AC', 'Tour Guide', 'Makan 3x Sehari']
  },
  {
    id: 2,
    title: 'Bromo Sunrise Adventure',
    description: 'Saksikan keajaiban matahari terbit di Gunung Bromo, jelajahi lautan pasir, dan rasakan pengalaman petualangan yang tak terlupakan di dataran tinggi Jawa Timur.',
    image: 'https://images.unsplash.com/photo-1683669446787-3b4881d3d267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMHRvdXJpc218ZW58MXx8fHwxNzY1NDg5Nzc3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '3 Hari 2 Malam',
    participants: '4-20 Orang',
    price: 'Rp 2.800.000',
    rating: 4.9,
    includes: ['Penginapan', 'Jeep 4WD', 'Tour Guide', 'Sarapan']
  },
  {
    id: 3,
    title: 'Singapore City Tour',
    description: 'Jelajahi kemegahan kota Singapura dengan mengunjungi Gardens by the Bay, Marina Bay Sands, Sentosa Island, dan berbagai atraksi menarik lainnya.',
    image: 'https://images.unsplash.com/photo-1734929430032-cd5a371fa079?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHRyYXZlbHxlbnwxfHx8fDE3NjU1MjY3OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '4 Hari 3 Malam',
    participants: '2-10 Orang',
    price: 'Rp 8.900.000',
    rating: 4.7,
    includes: ['Hotel Bintang 4', 'City Tour', 'Tiket Masuk', 'Sarapan']
  },
  {
    id: 4,
    title: 'Yogyakarta Cultural Heritage',
    description: 'Menyelami kekayaan budaya dan sejarah Yogyakarta dengan mengunjungi Candi Borobudur, Prambanan, Keraton, dan menikmati kuliner khas Jogja.',
    image: 'https://images.unsplash.com/photo-1760443199065-0cd7c2757007?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMHRlbXBsZSUyMGFzaWF8ZW58MXx8fHwxNzY1NTEyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '4 Hari 3 Malam',
    participants: '2-15 Orang',
    price: 'Rp 4.200.000',
    rating: 4.9,
    includes: ['Hotel Bintang 3', 'Transportasi', 'Tour Guide', 'Tiket Wisata']
  },
  {
    id: 5,
    title: 'Raja Ampat Diving Paradise',
    description: 'Eksplorasi keindahan bawah laut Raja Ampat dengan keanekaragaman hayati laut terkaya di dunia. Diving, snorkeling, dan island hopping yang menakjubkan.',
    image: 'https://images.unsplash.com/photo-1623352209537-03107acd72cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZlbnR1cmUlMjBoaWtpbmclMjBuYXR1cmV8ZW58MXx8fHwxNzY1NDQ2OTczfDA&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '6 Hari 5 Malam',
    participants: '4-12 Orang',
    price: 'Rp 12.500.000',
    rating: 5.0,
    includes: ['Homestay', 'Boat', 'Diving Equipment', 'Makan 3x']
  },
  {
    id: 6,
    title: 'Cruise to Komodo Island',
    description: 'Pelayaran mewah ke Pulau Komodo untuk bertemu langsung dengan komodo dragon, snorkeling di Pink Beach, dan menikmati sunset di Padar Island.',
    image: 'https://images.unsplash.com/photo-1554291316-14f5bf066cac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjcnVpc2UlMjBzaGlwfGVufDF8fHx8MTc2NTUyNjc5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    duration: '5 Hari 4 Malam',
    participants: '6-20 Orang',
    price: 'Rp 15.000.000',
    rating: 4.8,
    includes: ['Cruise Kabin', 'All Meals', 'Snorkeling Gear', 'Tour Guide']
  }
];

export function Packages() {
  return (
    <section id="packages" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Paket Wisata Kami</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Pilih paket wisata terbaik sesuai dengan keinginan dan budget Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
