"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Clock,
  Car,
  Navigation,
  Mail,
  Wifi,
  Users,
  Baby,
  CreditCard,
  Utensils,
  Music,
  Accessibility,
} from "lucide-react";

interface Branch {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    weekdays: string;
    weekends: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  facilities: string[];
  images: string[];
  capacity: number;
  parkingSpots: number;
  manager: string;
  specialties: string[];
}

const branches: Branch[] = [
  {
    id: "siddhapudur",
    name: "Ammayi Veedu Siddhapudur",
    address: "138, Avaram Palayam Rd, G K D Nagar, Coimbatore, Tamil Nadu 641044",
    phone: "+91 99946 61661",
    email: "Ammayiveedu.potcook@gmail.com",
    hours: {
      weekdays: "7:00 AM - 11:00 PM",
      weekends: "7:00 AM - 11:00 PM",
    },
    coordinates: {
      lat: 11.0168,
      lng: 76.9558,
    },
    facilities: [
      "Valet Parking",
      "Private Dining Room",
      "Live Kitchen View",
      "AC Dining Hall",
      "Wi-Fi",
      "Card Payment",
      "Party Hall",
      "Wheelchair Access",
    ],
    images: [
      "/images/Ammayi_Veedu_Siddhapudur.jpeg",
      "/images/dishes/veg meals.jpg",
    ],
    capacity: 120,
    parkingSpots: 30,
    manager: "Mr. Rajesh Kumar",
    specialties: ["Clay Pot Biryani", "Weekend Buffet", "Live Dosa Counter"],
  },
  {
    id: "ramanathapuram",
    name: "Ammayi Veedu Ramanathapuram",
    address: "LCT Complex, 420, Trichy Rd, Singanallur, Coimbatore, Tamil Nadu 641005",
    phone: "+91 86086 61661",
    email: "Ammayiveedu.potcook@gmail.com",
    hours: {
      weekdays: "7:00 AM - 11:00 PM",
      weekends: "7:00 AM - 11:00 PM",
    },
    coordinates: {
      lat: 11.0019,
      lng: 77.0307,
    },
    facilities: [
      "Street Parking",
      "Family Section",
      "Kids Play Area",
      "AC Dining Hall",
      "Wi-Fi",
      "Card Payment",
      "Birthday Party Area",
      "Baby Chairs",
    ],
    images: [
      "/images/unnamed.webp",
      "/images/dishes/mutton kothukari - Copy.jpg",
    ],
    capacity: 100,
    parkingSpots: 20,
    manager: "Mrs. Priya Shankar",
    specialties: ["Traditional Meals", "Special Kolambus", "Festival Specials"],
  },
  {
    id: "saravanampatti",
    name: "Ammayi Veedu Saravanampatti",
    address: "14/11, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035",
    phone: "+91 99436 61661",
    email: "Ammayiveedu.potcook@gmail.com",
    hours: {
      weekdays: "11:00 AM - 11:00 PM",
      weekends: "11:00 AM - 11:00 PM",
    },
    coordinates: {
      lat: 11.0798,
      lng: 77.0034,
    },
    facilities: [
      "Free Parking",
      "Outdoor Seating",
      "Live Music (Weekends)",
      "AC Dining Hall",
      "Wi-Fi",
      "Card Payment",
      "Corporate Events",
      "Home Delivery",
    ],
    images: [
      "/images/dishes/IMG_3200.jpg",
      "/images/dishes/manthal fish - Copy.jpg",
    ],
    capacity: 150,
    parkingSpots: 40,
    manager: "Mr. Suresh Babu",
    specialties: ["Seafood Specials", "Corporate Catering", "Outdoor BBQ"],
  },
];

const facilityIcons: { [key: string]: React.ElementType } = {
  "Wi-Fi": Wifi,
  "Card Payment": CreditCard,
  "Baby Chairs": Baby,
  "Wheelchair Access": Accessibility,
  "Live Music (Weekends)": Music,
  "Party Hall": Users,
  "Live Kitchen View": Utensils,
};

export default function BranchesPage() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>(branches[0]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/dishes/IMG_3200.jpg"
            alt="Branches Hero"
            fill
            className="object-cover"
          />
          <div className="overlay" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-hero font-bold mb-4">Our Branches</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Visit us at any of our three convenient branches across Coimbatore
            </p>
          </motion.div>
        </div>
      </section>

      {/* Branch Cards */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedBranch(branch)}
                className={`card overflow-hidden cursor-pointer transition-all ${
                  selectedBranch.id === branch.id
                    ? "ring-2 ring-primary shadow-2xl"
                    : "hover:shadow-xl"
                }`}
              >
                {/* Images */}
                <div className="relative h-48">
                  <Image
                    src={branch.images[0]}
                    alt={branch.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold">{branch.name}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{branch.name} Branch</h3>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <p className="text-sm text-gray-600">{branch.address}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-primary" />
                      <a href={`tel:${branch.phone}`} className="text-sm text-gray-600 hover:text-primary">
                        {branch.phone}
                      </a>
                    </div>

                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div className="text-sm text-gray-600">
                        <p>Mon-Fri: {branch.hours.weekdays}</p>
                        <p>Sat-Sun: {branch.hours.weekends}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-sm">
                      <span className="text-gray-500">Capacity:</span>
                      <span className="font-semibold ml-1">{branch.capacity} seats</span>
                    </div>
                    <div className="text-sm">
                      <Car className="w-4 h-4 inline mr-1 text-gray-500" />
                      <span className="font-semibold">{branch.parkingSpots} spots</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Branch Details */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map and Details */}
            <motion.div
              key={selectedBranch.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-h2 font-bold mb-6">
                {selectedBranch.name} Branch Details
              </h2>

              {/* Map */}
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                <iframe
                  src={`https://maps.google.com/maps?q=${selectedBranch.coordinates.lat},${selectedBranch.coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Branch Info */}
              <div className="card p-6">
                <h3 className="text-lg font-semibold mb-4">Branch Information</h3>

                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-gray-500">Email</span>
                    <p className="font-medium">
                      <a href={`mailto:${selectedBranch.email}`} className="text-primary hover:underline">
                        {selectedBranch.email}
                      </a>
                    </p>
                  </div>

                  <div>
                    <span className="text-sm text-gray-500">Specialties</span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedBranch.specialties.map((specialty) => (
                        <span key={specialty} className="badge bg-primary/10 text-primary">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-sm text-gray-500">Facilities</span>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {selectedBranch.facilities.map((facility) => (
                        <div key={facility} className="flex items-center gap-2 text-sm">
                          {facilityIcons[facility] ? (
                            React.createElement(facilityIcons[facility], {
                              className: "w-4 h-4 text-primary",
                            })
                          ) : (
                            <div className="w-4 h-4 rounded-full bg-primary/20" />
                          )}
                          <span>{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <a
                    href={`https://maps.google.com/?q=${selectedBranch.address}`}
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

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-h2 font-bold mb-6">Get in Touch</h2>

              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-6">Contact {selectedBranch.name} Branch</h3>

                <div className="space-y-6">
                  {/* Quick Contact Info */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="w-6 h-6 text-primary" />
                        <div>
                          <p className="text-sm text-gray-500">Call Us</p>
                          <a href={`tel:${selectedBranch.phone}`} className="text-lg font-semibold text-primary hover:underline">
                            {selectedBranch.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <Mail className="w-6 h-6 text-primary" />
                        <div>
                          <p className="text-sm text-gray-500">Email Us</p>
                          <a href={`mailto:${selectedBranch.email}`} className="text-lg font-semibold text-primary hover:underline">
                            {selectedBranch.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-primary" />
                        <div>
                          <p className="text-sm text-gray-500">Visit Us</p>
                          <p className="text-sm font-medium">{selectedBranch.address}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Opening Hours */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      Opening Hours
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday:</span>
                        <span className="font-medium">{selectedBranch.hours.weekdays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday - Sunday:</span>
                        <span className="font-medium">{selectedBranch.hours.weekends}</span>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="space-y-3">
                    <a
                      href={`https://maps.google.com/?q=${selectedBranch.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full text-center flex items-center justify-center gap-2"
                    >
                      <Navigation className="w-5 h-5" />
                      Get Directions
                    </a>
                  </div>

                  <p className="text-sm text-gray-500 text-center">
                    Walk-ins welcome! No reservation required.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}