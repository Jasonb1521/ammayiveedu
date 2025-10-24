"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  designation: string;
  content: string;
  rating: number;
  image: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    designation: "Food Blogger",
    content: "Ammayi Veedu is a hidden gem! The authentic flavors take me back to my grandmother's kitchen. The clay pot biryani is absolutely divine, and you can taste the love in every dish. This is comfort food at its finest!",
    rating: 5,
    image: "/images/dishes/1brain.jpg",
    date: "2 weeks ago",
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    designation: "Regular Customer",
    content: "Been coming here for 3 years now, and the quality has never dropped. The mutton chops are the best in Coimbatore! The staff treats you like family, and the ambiance is perfect for both family dinners and business meetings.",
    rating: 5,
    image: "/images/dishes/2kothu.jpg",
    date: "1 month ago",
  },
  {
    id: "3",
    name: "Anitha Rao",
    designation: "Chef & Restaurant Owner",
    content: "As someone in the food industry, I appreciate the dedication to traditional cooking methods. The clay pot cooking really makes a difference. Their fish curry is authentic and reminds me of coastal Tamil Nadu.",
    rating: 5,
    image: "/images/dishes/3liver fry.jpg",
    date: "3 weeks ago",
  },
  {
    id: "4",
    name: "Mohammed Ibrahim",
    designation: "IT Professional",
    content: "Perfect place for authentic South Indian non-veg food. The portions are generous, prices are reasonable, and the taste is consistently excellent. Their weekend special menu is something I always look forward to!",
    rating: 5,
    image: "/images/dishes/5nalli kulambu.jpg",
    date: "1 week ago",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="section-padding bg-gradient-to-br from-warm-tan/10 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="font-script text-2xl text-primary">Happy Customers</span>
          <h2 className="text-h1 font-bold mt-2 mb-4">What People Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued customers
            have to say about their experience at Ammayi Veedu
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-primary" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < testimonials[currentIndex].rating
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-center text-gray-700 mb-8 leading-relaxed">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <h4 className="text-xl font-semibold">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-600">
                  {testimonials[currentIndex].designation}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  {testimonials[currentIndex].date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;