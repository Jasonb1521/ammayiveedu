"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChefHat, Award, Users, Heart } from "lucide-react";

const StorySection: React.FC = () => {
  const stats = [
    { icon: ChefHat, value: "50+", label: "Traditional Recipes" },
    { icon: Award, value: "7+", label: "Years of Excellence" },
    { icon: Users, value: "50,000+", label: "Happy Customers" },
    { icon: Heart, value: "100%", label: "Made with Love" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-warm" />
      </div>

      <div className="container relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-script text-2xl text-primary">Our Heritage</span>
            <h2 className="text-h1 font-bold mt-2 mb-6">
              A Legacy of Traditional <br />
              <span className="text-primary">Clay Pot Cooking</span>
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Founded in 2014 by Shanmugam Srinivasan, Ammayi Veedu began as a
                humble endeavor to preserve the authentic flavors of South Indian
                home cooking. Our name, meaning &quot;Grandmother&apos;s House,&quot; reflects
                our commitment to serving food that tastes like it came straight
                from a loving grandmother&apos;s kitchen.
              </p>
              <p>
                What sets us apart is our unwavering dedication to traditional
                clay pot cooking methods. Each dish is slow-cooked in earthen vessels,
                allowing the natural minerals from the clay to enhance the flavors
                while retaining all the nutritional value of our carefully selected
                ingredients.
              </p>
              <p>
                From our secret family recipes passed down through generations to
                the warmth of our service, every aspect of Ammayi Veedu is designed
                to transport you back to simpler times when meals were prepared with
                patience, love, and attention to detail.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-dark">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Link href="/about" className="btn-primary inline-block">
              Discover Our Full Story
            </Link>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[600px]">
              {/* Main Image */}
              <div className="absolute top-0 right-0 w-[70%] h-[70%] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dishes/6naatu koli biriyani.jpg"
                  alt="Traditional Clay Pots"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Secondary Image */}
              <div className="absolute bottom-0 left-0 w-[60%] h-[50%] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/dishes/5nalli kulambu.jpg"
                  alt="Traditional Cooking"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-[40%] left-[35%] w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
              <div className="absolute bottom-[20%] right-[20%] w-40 h-40 bg-primary/20 rounded-full blur-3xl" />

              {/* Experience Badge */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute top-[35%] left-[25%] bg-white rounded-2xl shadow-xl p-4 z-10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <ChefHat className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark">2014</div>
                    <div className="text-sm text-gray-600">Est. Year</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;