"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Heart, ChefHat, Leaf, Shield } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every dish is prepared with the same care and love as a grandmother cooking for her family",
  },
  {
    icon: ChefHat,
    title: "Authentic Recipes",
    description: "Traditional recipes passed down through generations, preserving the authentic taste",
  },
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    description: "Daily sourced fresh vegetables, meat, and spices from trusted local suppliers",
  },
  {
    icon: Shield,
    title: "Quality First",
    description: "Uncompromising commitment to quality in every aspect of food preparation",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/dishes/naatukozhi pichipotta kari.jpg"
            alt="About Us Hero"
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
            <span className="font-script text-3xl text-accent">Since 2014</span>
            <h1 className="text-hero font-bold mt-2 mb-4">Our Story</h1>
            <p className="text-xl max-w-3xl mx-auto">
              A journey of preserving traditional South Indian culinary heritage
              through authentic clay pot cooking and time-honored family recipes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/dishes/naatulozhi biriyani.jpg"
                  alt="Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-h2 font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  In the mid-2010s, Shanmugam Srinivasan, a true lover of traditional South Indian cuisine,
                  noticed something: many eateries were moving toward fast food, fusion dishes, and generic
                  tastes. But what was being lost was the flavour of home cooking that many of the older
                  generation carried in memory: food cooked slowly in clay pots, served on banana leaves,
                  with spice blends handed down through his mother.
                </p>
                <p>
                  Inspired by his own childhood, where the kitchen smelled of biryani simmered overnight,
                  of meat gravies cooked patiently, and meals that were more about comfort than just filling
                  the belly, he decided to open a place that could bring back that feeling.
                </p>
                <p>
                  He named it <span className="font-semibold">&quot;Ammayi Veedu Pot Cook&quot;</span> - &quot;Ammayi Veedu&quot;
                  representing the warmth, care, and home-like love his grandmother (ammayi) embodied,
                  and &quot;Pot Cook&quot; representing the traditional method of cooking in clay or pot for deeper,
                  richer flavour.
                </p>
                <p>
                  The restaurant was registered officially in July 2014, under his proprietorship.
                  The first small outlet was in Sidhapudur / New Siddhapudur, Coimbatore, where locals
                  responded well to offerings like chicken and mutton biryani, non-veg kolambus, fish fry, etc.
                  These dishes were cooked in clay pots, which gave them smoky, earthy undertones absent
                  in many modern kitchens.
                </p>
                <p>
                  Over time, they expanded to more branches in Coimbatore (Ramanathapuram and Saravanampatti)
                  to meet the demand.
                </p>
                <div className="mt-6">
                  <p className="font-semibold text-dark">Shanmugam Srinivasan</p>
                  <p className="text-sm text-primary">Founder & Proprietor</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-h1 font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Ammayi Veedu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h1 font-bold mb-6">Experience the Tradition</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable culinary journey through the authentic
              flavors of South India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/menu" className="btn-accent">
                Explore Our Menu
              </a>
              <a href="/branches" className="bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Visit Us Today
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}