import { Clock, Users, Star, Check } from 'lucide-react';

interface PackageProps {
  package: {
    id: number;
    title: string;
    description: string;
    image: string;
    duration: string;
    participants: string;
    price: string;
    rating: number;
    includes: string[];
  };
}

export function PackageCard({ package: pkg }: PackageProps) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Package Image */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={pkg.image} 
          alt={pkg.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span>{pkg.rating}</span>
        </div>
      </div>

      {/* Package Info */}
      <div className="p-6">
        <h3 className="text-2xl mb-3">{pkg.title}</h3>
        <p className="text-gray-600 mb-4">{pkg.description}</p>

        {/* Duration and Participants */}
        <div className="flex gap-4 mb-4 text-gray-700">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">{pkg.participants}</span>
          </div>
        </div>

        {/* Includes */}
        <div className="mb-4">
          <p className="text-sm mb-2">Termasuk:</p>
          <div className="grid grid-cols-2 gap-2">
            {pkg.includes.map((item, index) => (
              <div key={index} className="flex items-start gap-1">
                <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-xs text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div>
            <p className="text-xs text-gray-500">Mulai dari</p>
            <p className="text-xl text-blue-600">{pkg.price}</p>
          </div>
          <a 
            href="#contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
