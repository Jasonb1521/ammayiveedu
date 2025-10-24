"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-warm-tan/10 to-white">
      <div className="container text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 404 Text */}
          <div className="relative mb-8">
            <h1 className="text-[150px] md:text-[200px] font-bold text-gray-200 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-32 h-32 md:w-48 md:h-48">
                <Image
                  src="/images/dishes/Ammayi logo.jpg"
                  alt="Ammayi Veedu"
                  fill
                  sizes="(max-width: 768px) 128px, 192px"
                  className="object-contain opacity-50"
                />
              </div>
            </div>
          </div>

          {/* Error Message */}
          <h2 className="text-h2 font-bold mb-4 text-dark">
            Oops! This Page Got Lost in the Kitchen
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Just like a missing ingredient can ruin a recipe, this page seems to have gone missing.
            But don&apos;t worry, we have plenty of other delicious pages for you to explore!
          </p>

          {/* Suggestions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            {[
              { icon: "🍛", text: "Explore Our Menu", link: "/menu" },
              { icon: "📍", text: "Find Our Locations", link: "/locations" },
              { icon: "📖", text: "Read Our Story", link: "/about" },
            ].map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="card p-6 hover:shadow-xl transition-all group"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-semibold group-hover:text-primary transition-colors">
                  {item.text}
                </p>
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-outline inline-flex items-center gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Fun Fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 bg-primary/10 rounded-xl max-w-md mx-auto"
          >
            <p className="text-sm text-primary font-medium mb-2">Did you know?</p>
            <p className="text-gray-700">
              Our clay pot biryani takes 45 minutes to cook to perfection,
              but finding this page took you only seconds!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}