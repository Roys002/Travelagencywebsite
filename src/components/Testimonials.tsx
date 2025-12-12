import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Siti Nurhaliza',
    location: 'Jakarta',
    rating: 5,
    text: 'Pengalaman liburan ke Bali bersama Explore Travel sangat menyenangkan! Tour guide-nya ramah dan profesional, semua sudah diatur dengan baik. Pasti akan booking lagi untuk trip berikutnya!',
    package: 'Bali Paradise',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
  },
  {
    id: 2,
    name: 'Budi Santoso',
    location: 'Surabaya',
    rating: 5,
    text: 'Trip ke Bromo sunrise benar-benar luar biasa! Pemandangannya spektakuler dan pelayanan dari team sangat memuaskan. Harga juga sangat reasonable untuk fasilitas yang didapat.',
    package: 'Bromo Sunrise Adventure',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop'
  },
  {
    id: 3,
    name: 'Diana Putri',
    location: 'Bandung',
    rating: 5,
    text: 'Singapore city tour dengan Explore Travel sangat terorganisir dengan baik. Semua tempat wisata yang dijanjikan dikunjungi, hotel nyaman, dan guide sangat informatif. Highly recommended!',
    package: 'Singapore City Tour',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
  },
  {
    id: 4,
    name: 'Ahmad Fauzi',
    location: 'Medan',
    rating: 5,
    text: 'Paket Yogyakarta Cultural Heritage sangat lengkap! Saya dan keluarga puas dengan pelayanan dan destinasi yang dikunjungi. Borobudur dan Prambanan memang luar biasa. Terima kasih Explore Travel!',
    package: 'Yogyakarta Cultural Heritage',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
  },
  {
    id: 5,
    name: 'Rina Wati',
    location: 'Semarang',
    rating: 5,
    text: 'Raja Ampat diving trip adalah pengalaman yang tidak akan pernah saya lupakan! Keindahan bawah lautnya luar biasa, dan semua fasilitas diving sangat baik. Worth every penny!',
    package: 'Raja Ampat Diving Paradise',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop'
  },
  {
    id: 6,
    name: 'Eko Prasetyo',
    location: 'Yogyakarta',
    rating: 5,
    text: 'Cruise ke Komodo Island sangat mewah dan nyaman! Bertemu langsung dengan komodo dragon adalah pengalaman yang menakjubkan. Pelayanan crew kapal juga sangat baik. Recommended!',
    package: 'Cruise to Komodo Island',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop'
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 md:px-12 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Testimoni Pelanggan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cerita pengalaman dari pelanggan yang telah mempercayai kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-blue-600" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              {/* Package */}
              <div className="mb-4">
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {testimonial.package}
                </span>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-4 pt-4 border-t">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
