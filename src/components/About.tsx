import { Award, Shield, Heart, Headphones } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">Tentang Explore Travel</h2>
            <p className="text-xl text-gray-600 mb-6">
              Kami adalah agen perjalanan terpercaya yang telah melayani ribuan wisatawan sejak tahun 2010. 
              Dengan pengalaman lebih dari 13 tahun, kami berkomitmen memberikan pengalaman perjalanan terbaik 
              untuk setiap pelanggan.
            </p>
            <p className="text-gray-600 mb-8">
              Tim profesional kami siap membantu merencanakan liburan impian Anda, mulai dari pemilihan destinasi, 
              akomodasi, transportasi, hingga aktivitas wisata yang menarik. Kepuasan pelanggan adalah prioritas utama kami.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl text-blue-600 mb-2">10K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl text-blue-600 mb-2">150+</div>
                <div className="text-sm text-gray-600">Destinations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl text-blue-600 mb-2">13+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1674746760908-461a3f97175d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZ2VuY3klMjBvZmZpY2V8ZW58MXx8fHwxNzY1NTI2NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="About Us"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-3xl text-center mb-12">Mengapa Memilih Kami?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mb-3">Berpengalaman</h4>
              <p className="text-sm text-gray-600">
                Lebih dari 13 tahun melayani wisatawan dengan profesional
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mb-3">Terpercaya</h4>
              <p className="text-sm text-gray-600">
                Izin resmi dan jaminan keamanan perjalanan Anda
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mb-3">Pelayanan Terbaik</h4>
              <p className="text-sm text-gray-600">
                Tim yang ramah dan siap membantu setiap kebutuhan Anda
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="mb-3">Support 24/7</h4>
              <p className="text-sm text-gray-600">
                Layanan customer service siap membantu kapan saja
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
