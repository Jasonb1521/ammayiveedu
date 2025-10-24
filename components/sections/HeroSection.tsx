"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Clock, MapPin, Star, Award } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/dishes/6naatu koli biriyani.jpg"
          alt="Traditional Clay Pot Cooking"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="overlay" />
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-10 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-secondary" />
      </div>

      {/* Content */}
      <div className="container relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <Award className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">Award-Winning Traditional Cuisine Since 2017</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-hero font-bold mb-6 leading-tight"
          >
            Taste the Love of{" "}
            <span className="font-script text-accent">Ammayi&apos;s</span> Kitchen
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl mb-8 text-gray-100"
          >
            Authentic South Indian cuisine cooked in traditional clay pots,
            <br className="hidden md:block" />
            bringing you the warmth of home-cooked meals
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-6 mb-10"
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300">4.8 Rating</p>
                <p className="font-semibold">2,500+ Reviews</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300">Coimbatore</p>
                <p className="font-semibold">3 Locations</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300">Daily</p>
                <p className="font-semibold">11 AM - 10:30 PM</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/menu" className="btn-primary inline-flex items-center gap-2">
              Explore Menu
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link
              href="/locations"
              className="btn-outline bg-white/10 backdrop-blur-sm inline-flex items-center gap-2"
            >
              Visit Us Today
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-white rounded-full mx-auto"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;