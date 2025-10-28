"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Branch {
  id: string;
  name: string;
  shortName: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  specialties: string[];
  description: string;
}

const branches: Branch[] = [
  {
    id: "siddhapudur",
    name: "Ammayi Veedu Siddhapudur",
    shortName: "Siddhapudur Branch",
    address: "138, Avaram Palayam Rd, G K D Nagar, Coimbatore, Tamil Nadu 641044",
    phone: "+91 99946 61661",
    hours: "7:00 AM - 11:00 PM",
    image: "/images/Ammayi_Veedu_Siddhapudur.jpeg",
    specialties: ["Clay Pot Biryani", "Weekend Buffet", "Live Dosa Counter"],
    description: "Our flagship location featuring authentic traditional clay pot cooking"
  },
  {
    id: "ramanathapuram",
    name: "Ammayi Veedu Ramanathapuram",
    shortName: "Ramanathapuram Branch",
    address: "LCT Complex, 420, Trichy Rd, Singanallur, Coimbatore",
    phone: "+91 86086 61661",
    hours: "7:00 AM - 11:00 PM",
    image: "/images/unnamed.webp",
    specialties: ["Traditional Meals", "Special Kolambus", "Festival Specials"],
    description: "Experience authentic South Indian meals in a warm, family-friendly atmosphere and outdoor seating"
  },
  {
    id: "saravanampatti",
    name: "Ammayi Veedu Saravanampatti",
    shortName: "Saravanampatti Branch",
    address: "14/11, Sathy Rd, Saravanampatti, Coimbatore, Tamil Nadu 641035",
    phone: "+91 99436 61661",
    hours: "11:00 AM - 11:00 PM",
    image: "/images/dishes/IMG_3200.jpg",
    specialties: ["Seafood Specials", "Corporate Catering", "Outdoor BBQ"],
    description: "Our newest branch featuring outdoor dining with a vibrant atmosphere perfect for family gatherings and celebrations"
  }
];

const BranchShowcase: React.FC = () => {
  const [currentBranch, setCurrentBranch] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentBranch((prev) => (prev + 1) % branches.length);
      }, 4000); // Change every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const handlePrevious = () => {
    setCurrentBranch((prev) => (prev - 1 + branches.length) % branches.length);
  };

  const handleNext = () => {
    setCurrentBranch((prev) => (prev + 1) % branches.length);
  };

  const branch = branches[currentBranch];

  return (
    <section
      className="relative min-h-[calc(100vh-80px)] w-full flex items-center justify-center overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={branch.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* Background Image with Parallax Effect */}
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          >
            <Image
              src={branch.image}
              alt={branch.name}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40" />
          </motion.div>

          {/* Main Content */}
          <div className="container relative z-10 h-full flex items-center px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
              {/* Left Side - Branch Information */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >

                {/* Branch Name with Modern Typography */}
                <motion.div
                  className="mb-4 md:mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
                    <span className="block text-red-600 font-serif mb-1 md:mb-2">
                      {branch.shortName.split(' ')[0]}
                    </span>
                    <span className="block text-white font-sans">
                      {branch.shortName.split(' ')[1]}
                    </span>
                  </h1>
                </motion.div>

                {/* Description with Better Typography */}
                <motion.p
                  className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 md:mb-8 lg:mb-10 leading-relaxed font-light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {branch.description}
                </motion.p>

                {/* Branch Details with Modern Cards */}
                <motion.div
                  className="space-y-3 md:space-y-4 mb-6 md:mb-8 lg:mb-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="group flex items-start gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="p-2 md:p-2.5 bg-red-600/20 rounded-lg flex-shrink-0">
                      <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Location</p>
                      <p className="text-sm md:text-base text-white font-medium leading-relaxed break-words">{branch.address}</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="p-2 md:p-2.5 bg-red-600/20 rounded-lg flex-shrink-0">
                      <Phone className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Contact</p>
                      <p className="text-sm md:text-base text-white font-medium">{branch.phone}</p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-3 md:gap-4 p-2 md:p-3 rounded-xl hover:bg-white/5 transition-all duration-300">
                    <div className="p-2 md:p-2.5 bg-red-600/20 rounded-lg flex-shrink-0">
                      <Clock className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Open Hours</p>
                      <p className="text-sm md:text-base text-white font-medium">{branch.hours}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Modern CTA Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 md:gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <Link
                    href="/menu"
                    className="group relative px-6 py-3 md:px-8 md:py-4 bg-red-600 text-white rounded-xl font-semibold text-sm md:text-base text-center overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-600/30"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      View Our Menu
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>

                  <a
                    href={`https://maps.google.com/?q=${branch.address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-xl border border-white/30 text-white rounded-xl font-semibold text-sm md:text-base text-center hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Navigation className="w-4 h-4 md:w-5 md:h-5" />
                    Get Directions
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </motion.div>
              </motion.div>

              {/* Right Side - Additional Visual Element (optional) */}
              <div className="hidden lg:block relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="relative"
                >
                  {/* You can add additional visual elements here if needed */}
                </motion.div>
              </div>
            </div>
          </div>

          {/* Modern Navigation Controls */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
            <motion.div
              className="flex items-center gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <button
                onClick={handlePrevious}
                className="group w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center hover:scale-110"
                aria-label="Previous branch"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:-translate-x-0.5 transition-transform" />
              </button>

              <div className="flex gap-3 px-4">
                {branches.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentBranch(index)}
                    className={`relative transition-all duration-500 ${
                      index === currentBranch
                        ? "w-12 h-2 bg-red-600 rounded-full"
                        : "w-8 h-2 bg-white/30 hover:bg-white/50 rounded-full"
                    }`}
                    aria-label={`Go to branch ${index + 1}`}
                  >
                    {index === currentBranch && (
                      <motion.div
                        className="absolute inset-0 bg-red-600 blur-md rounded-full"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={handleNext}
                className="group w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center hover:scale-110"
                aria-label="Next branch"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:translate-x-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default BranchShowcase;