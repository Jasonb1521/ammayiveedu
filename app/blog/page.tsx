"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, Clock, User, ArrowRight, Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Clay Pot Cooking: Why It Makes Food Taste Better",
    excerpt: "Discover the ancient technique of clay pot cooking and how it enhances the flavors of traditional South Indian cuisine.",
    content: "Clay pot cooking is more than just a cooking method; it's a tradition that has been passed down through generations...",
    author: "Chef Shanmugam",
    date: "October 15, 2024",
    readTime: "5 min read",
    category: "Cooking Techniques",
    image: "/images/dishes/pottery_pots.glb",
    featured: true,
    tags: ["Clay Pot", "Traditional Cooking", "Heritage"],
  },
  {
    id: "2",
    title: "Secret Behind Our Famous Naatu Koli Biryani",
    excerpt: "Learn about the special ingredients and techniques that make our country chicken biryani a customer favorite.",
    content: "Our Naatu Koli Biryani uses country chicken marinated with special spices and cooked in traditional clay pots...",
    author: "Chef Kumar",
    date: "October 10, 2024",
    readTime: "4 min read",
    category: "Recipes",
    image: "/images/dishes/6naatu koli biriyani.jpg",
    featured: true,
    tags: ["Biryani", "Recipes", "Signature Dishes"],
  },
  {
    id: "3",
    title: "Health Benefits of Traditional South Indian Spices",
    excerpt: "Explore how traditional spices used in South Indian cooking provide numerous health benefits.",
    content: "From turmeric to curry leaves, South Indian cuisine is rich with spices that offer medicinal properties...",
    author: "Dr. Priya Menon",
    date: "October 5, 2024",
    readTime: "6 min read",
    category: "Health & Nutrition",
    image: "/images/dishes/chest bone kulambu - Copy - Copy.jpg",
    featured: false,
    tags: ["Health", "Spices", "Nutrition"],
  },
  {
    id: "4",
    title: "Festival Special: Preparing Traditional Pongal",
    excerpt: "Step-by-step guide to making the perfect Pongal for harvest festival celebrations.",
    content: "Pongal is not just a dish; it's a celebration of harvest and prosperity...",
    author: "Chef Lakshmi",
    date: "September 28, 2024",
    readTime: "3 min read",
    category: "Festival Specials",
    image: "/images/dishes/veg meals.jpg",
    featured: false,
    tags: ["Festival", "Vegetarian", "Traditional"],
  },
  {
    id: "5",
    title: "From Sea to Plate: Our Fresh Seafood Journey",
    excerpt: "Follow the journey of our fresh seafood from local fishermen to your plate.",
    content: "We source our seafood daily from trusted local fishermen who practice sustainable fishing...",
    author: "Suresh Babu",
    date: "September 20, 2024",
    readTime: "4 min read",
    category: "Ingredients",
    image: "/images/dishes/vanjaram meen varuval.jpg",
    featured: false,
    tags: ["Seafood", "Sustainability", "Fresh Ingredients"],
  },
  {
    id: "6",
    title: "The Story Behind Chettinad Cuisine",
    excerpt: "Discover the rich history and unique flavors of Chettinad cuisine from Tamil Nadu.",
    content: "Chettinad cuisine is known for its bold flavors and extensive use of spices...",
    author: "Chef Shanmugam",
    date: "September 15, 2024",
    readTime: "7 min read",
    category: "Food History",
    image: "/images/dishes/chilli kadai - Copy - Copy.jpg",
    featured: false,
    tags: ["Chettinad", "History", "Regional Cuisine"],
  },
];

const categories = [
  "All Posts",
  "Cooking Techniques",
  "Recipes",
  "Health & Nutrition",
  "Festival Specials",
  "Ingredients",
  "Food History",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/dishes/naatukozhi varuval.jpg"
            alt="Blog Hero"
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
            <h1 className="text-hero font-bold mb-4">Our Blog</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Stories, recipes, and insights from Ammayi&apos;s kitchen
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-h2 font-bold mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-primary">{post.category}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-1 text-primary hover:gap-2 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-gray-50 py-6">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? "bg-primary text-white"
                      : "bg-white hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="section-padding">
        <div className="container">
          <h2 className="text-h2 font-bold mb-8">
            {selectedCategory === "All Posts" ? "All Articles" : selectedCategory}
          </h2>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found.</p>
              <button
                onClick={() => {
                  setSelectedCategory("All Posts");
                  setSearchQuery("");
                }}
                className="btn-primary mt-4"
              >
                View All Articles
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card overflow-hidden group"
                >
                  <div className="relative h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="flex items-center gap-1 text-primary hover:gap-2 transition-all text-sm font-medium"
                    >
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="section-padding bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-h1 font-bold mb-4">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest recipes, cooking tips,
              and special offers from Ammayi Veedu
            </p>
            <form className="max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-dark focus:outline-none"
              />
              <button type="submit" className="btn-accent">
                Subscribe
              </button>
            </form>
            <p className="text-sm mt-4 opacity-75">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}