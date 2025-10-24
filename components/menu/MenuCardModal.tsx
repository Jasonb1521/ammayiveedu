"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ChefHat, Utensils, Coffee, IceCream, Soup, Fish, ChevronDown, Download, Printer } from "lucide-react";
import { completeMenu as completeMenuData } from "@/lib/completeMenuData";
import type { MenuCategory } from "@/lib/completeMenuData";

// Category icons mapping
const categoryIcons: Record<string, any> = {
  "Starters": Utensils,
  "Soups": Soup,
  "Main Course": ChefHat,
  "Seafood": Fish,
  "Beverages": Coffee,
  "Desserts": IceCream,
  "default": Utensils
};

interface MenuCardModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuCardModal({ isOpen, onClose }: MenuCardModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Filter items based on search
  const filteredCategories = completeMenuData.map(category => ({
    ...category,
    items: category.items.filter(
      item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tamilName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(category => category.items.length > 0);

  // Scroll to category when selected
  const scrollToCategory = (categoryName: string) => {
    const element = categoryRefs.current[categoryName];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    const IconComponent = categoryIcons[category] || categoryIcons.default;
    return <IconComponent className="w-5 h-5" />;
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-4 md:inset-8 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-6 relative">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <h2 className="font-script text-4xl md:text-5xl text-accent mb-2">Menu Card</h2>
                <h3 className="text-2xl md:text-3xl font-bold">Ammayi Veedu Pot Cook</h3>
                <p className="text-white/80 mt-2">Traditional South Indian Cuisine</p>
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button
                  onClick={handlePrint}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                  title="Print Menu"
                >
                  <Printer className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Search Bar */}
            <div className="bg-white p-4 shadow-sm">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search dishes..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-2 border-2 border-gray-200 rounded-full focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-auto p-6">
              <div className="max-w-7xl mx-auto">
                <div className="flex gap-6">
                  {/* Desktop Category Sidebar */}
                  <aside className="hidden md:block w-64 sticky top-0 h-fit">
                    <div className="bg-white rounded-xl shadow-lg p-4">
                      <h4 className="font-bold text-lg mb-3 text-primary">Categories</h4>
                      <nav className="space-y-1">
                        {completeMenuData.map((category) => (
                          <button
                            key={category.name}
                            onClick={() => scrollToCategory(category.name)}
                            className="w-full text-left px-3 py-2 rounded-lg hover:bg-primary/10 transition-all text-sm group"
                          >
                            <div className="flex items-center gap-2">
                              <div className="text-primary group-hover:scale-110 transition-transform">
                                {getCategoryIcon(category.name)}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium text-gray-800">{category.name}</p>
                                <p className="text-xs text-gray-500">{category.items.length} items</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </nav>
                    </div>
                  </aside>

                  {/* Menu Items */}
                  <div className="flex-1">
                    <div className="space-y-8">
                      {(searchQuery ? filteredCategories : completeMenuData).map((category, categoryIndex) => (
                        <div
                          key={category.name}
                          ref={(el) => { categoryRefs.current[category.name] = el; }}
                          className="scroll-mt-4"
                        >
                          {/* Category Header */}
                          <div className="bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-lg mb-4">
                            <div className="flex items-center gap-2">
                              {getCategoryIcon(category.name)}
                              <h3 className="text-xl font-bold text-primary">{category.name}</h3>
                              <span className="text-sm text-gray-500">({category.items.length} items)</span>
                            </div>
                          </div>

                          {/* Category Items */}
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {category.items.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-start justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <div className="flex-1">
                                  <h4 className="font-semibold text-gray-800">{item.name}</h4>
                                  <p className="text-sm text-gray-600 font-tamil">{item.tamilName}</p>
                                  {item.description && (
                                    <p className="text-xs text-gray-500 mt-1 italic">{item.description}</p>
                                  )}
                                </div>
                                <div className="ml-4">
                                  <span className="text-lg font-bold text-primary">₹{item.price}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gradient-to-r from-primary to-secondary text-white p-4 text-center">
              <p className="text-sm">All dishes cooked in traditional clay pots • Since 2017</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}