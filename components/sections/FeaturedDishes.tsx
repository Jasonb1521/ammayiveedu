"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  spiceLevel: number;
  cookTime: string;
  rating: number;
  isSpecial: boolean;
}

const featuredDishes: Dish[] = [
  {
    id: "1",
    name: "Naatu Koli Biryani",
    description: "Country chicken biryani cooked in traditional clay pot with aromatic spices",
    price: 450,
    image: "/images/dishes/6naatu koli biriyani.jpg",
    category: "Biryani",
    spiceLevel: 3,
    cookTime: "45 mins",
    rating: 4.9,
    isSpecial: true,
  },
  {
    id: "2",
    name: "Mutton Chops",
    description: "Tender mutton chops marinated in special masala and grilled to perfection",
    price: 580,
    image: "/images/dishes/Mutton chops - Copy.jpg",
    category: "Starters",
    spiceLevel: 4,
    cookTime: "30 mins",
    rating: 4.8,
    isSpecial: false,
  },
  {
    id: "3",
    name: "Vanjaram Fish Varuval",
    description: "King fish fry with traditional South Indian spices",
    price: 420,
    image: "/images/dishes/vanjaram meen varuval.jpg",
    category: "Seafood",
    spiceLevel: 3,
    cookTime: "25 mins",
    rating: 4.7,
    isSpecial: false,
  },
  {
    id: "4",
    name: "Pallipalayam Chicken",
    description: "Famous dry chicken dish from Pallipalayam with unique spice blend",
    price: 380,
    image: "/images/dishes/14pallipalayam chicken.jpg",
    category: "Chicken",
    spiceLevel: 4,
    cookTime: "35 mins",
    rating: 4.8,
    isSpecial: true,
  },
  {
    id: "5",
    name: "Prawn Masala",
    description: "Fresh prawns cooked in rich coconut gravy with curry leaves",
    price: 460,
    image: "/images/dishes/18prawn.jpg",
    category: "Seafood",
    spiceLevel: 2,
    cookTime: "20 mins",
    rating: 4.6,
    isSpecial: false,
  },
  {
    id: "6",
    name: "Chicken Fried Rice",
    description: "Wok-tossed rice with tender chicken pieces and vegetables",
    price: 320,
    image: "/images/dishes/26chicken fried rice.jpg",
    category: "Rice",
    spiceLevel: 1,
    cookTime: "15 mins",
    rating: 4.5,
    isSpecial: false,
  },
];

const FeaturedDishes: React.FC = () => {
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
          <span className="font-script text-2xl text-primary">From Our Kitchen</span>
          <h2 className="text-h1 font-bold mt-2 mb-4">Featured Specialties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most loved dishes, each prepared with traditional recipes
            passed down through generations and cooked in authentic clay pots
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {dish.isSpecial && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                    Chef&apos;s Special
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="/menu" className="btn-primary inline-block">
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedDishes;