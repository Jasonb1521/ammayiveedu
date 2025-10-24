"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Car, CheckCircle } from "lucide-react";

interface Location {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  mapUrl: string;
  features: string[];
  isOpen: boolean;
}

const locations: Location[] = [
  {
    id: "siddhapudur",
    name: "Siddhapudur",
    address: "138, Avaram Palayam Rd, G K D Nagar, Coimbatore - 641044",
    phone: "+91 99946 61661",
    hours: "11:00 AM - 10:30 PM",
    mapUrl: "https://maps.google.com/?q=138+Avaram+Palayam+Rd+G+K+D+Nagar+Coimbatore",
    features: ["Valet Parking", "Private Dining", "Live Kitchen", "AC Dining Hall"],
    isOpen: true,
  },
  {
    id: "ramanathapuram",
    name: "Ramanathapuram",
    address: "LCT Complex, 420, Trichy Rd, Singanallur, Coimbatore - 641005",
    phone: "+91 86086 61661",
    hours: "11:00 AM - 10:30 PM",
    mapUrl: "https://maps.google.com/?q=LCT+Complex+420+Trichy+Rd+Singanallur+Coimbatore",
    features: ["Street Parking", "Family Section", "Party Hall", "Wheelchair Access"],
    isOpen: true,
  },
  {
    id: "saravanampatti",
    name: "Saravanampatti",
    address: "14/11, Sathy Rd, Saravanampatti, Coimbatore - 641035",
    phone: "+91 99436 61661",
    hours: "11:00 AM - 10:30 PM",
    mapUrl: "https://maps.google.com/?q=14+11+Sathy+Rd+Saravanampatti+Coimbatore",
    features: ["Free Parking", "Outdoor Seating", "Kids Play Area", "Home Delivery"],
    isOpen: true,
  },
];

const LocationSelector: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location>(locations[0]);
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-script text-2xl text-primary">Visit Us</span>
          <h2 className="text-h1 font-bold mt-2 mb-4">Our Branches</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience authentic South Indian hospitality at any of our three
            conveniently located branches across Coimbatore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Location Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {locations.map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
                onClick={() => setSelectedLocation(location)}
                className={`card p-6 cursor-pointer transition-all ${
                  selectedLocation.id === location.id
                    ? "ring-2 ring-primary shadow-xl"
                    : "hover:shadow-xl"
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{location.name}</h3>
                    <div className="flex items-center gap-2">
                      {location.isOpen ? (
                        <span className="flex items-center gap-1 text-green-600">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">Open Now</span>
                        </span>
                      ) : (
                        <span className="text-sm text-red-600">Closed</span>
                      )}
                    </div>
                  </div>
                  <MapPin
                    className={`w-6 h-6 ${
                      selectedLocation.id === location.id
                        ? "text-primary"
                        : "text-gray-400"
                    }`}
                  />
                </div>

                {/* Address */}
                <p className="text-gray-600 text-sm mb-4">{location.address}</p>

                {/* Contact Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-gray-700 hover:text-primary"
                    >
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-700">{location.hours}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {location.features.slice(0, 2).map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                  {location.features.length > 2 && (
                    <span className="text-xs text-gray-500">
                      +{location.features.length - 2} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex justify-center">
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1 bg-primary text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Location Details */}
          <motion.div
            key={selectedLocation.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="card p-6"
          >
            <h3 className="text-2xl font-semibold mb-4">
              {selectedLocation.name} Branch
            </h3>

            <div className="space-y-4">
              {/* Map Preview */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    selectedLocation.address
                  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Full Features List */}
              <div>
                <h4 className="font-semibold mb-3">Available Facilities</h4>
                <div className="grid grid-cols-2 gap-2">
                  {selectedLocation.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parking Info */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Car className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold">Parking Information</h4>
                </div>
                <p className="text-sm text-gray-600">
                  {selectedLocation.features.find((f) => f.includes("Parking")) ||
                    "Parking available"}
                </p>
              </div>

              {/* Action Button */}
              <div className="space-y-3">
                <a
                  href={selectedLocation.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationSelector;