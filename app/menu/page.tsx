"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Filter, Search, Leaf, BookOpen } from "lucide-react";
import MenuCardModal from "@/components/menu/MenuCardModal";

// All 74 menu items with the new images
const featuredMenuItems = [
  // Biryani Items
  { id: "1", name: "Chicken Fry", tamilName: "சிக்கன் வறுவல்", price: 180, category: "Chicken", image: "/images/dishes/chicken fry.jpg", spiceLevel: 3, isVeg: false, rating: 4.6, cookTime: "25 mins" },
  { id: "2", name: "Mutton Biryani", tamilName: "மட்டன் பிரியாணி", price: 300, category: "Biryani", image: "/images/dishes/mutton biriyani.jpg", spiceLevel: 3, isVeg: false, rating: 4.9, cookTime: "50 mins" },
  { id: "3", name: "Naatu Koli Biryani", tamilName: "நாட்டுக்கோழி பிரியாணி", price: 280, category: "Biryani", image: "/images/dishes/naatu koli biriyani.jpg", spiceLevel: 4, isVeg: false, rating: 4.9, cookTime: "55 mins", isSpecial: true },
  { id: "4", name: "Country Chicken Biryani", tamilName: "நாட்டுக்கோழி பிரியாணி", price: 280, category: "Biryani", image: "/images/dishes/country chicken biriyani.jpg", spiceLevel: 4, isVeg: false, rating: 4.8, cookTime: "55 mins" },
  { id: "5", name: "Plain Biryani", tamilName: "சாதா பிரியாணி", price: 170, category: "Biryani", image: "/images/dishes/plain biriyani.jpg", spiceLevel: 2, isVeg: true, rating: 4.3, cookTime: "30 mins" },

  // Chicken Dishes
  { id: "6", name: "Chicken Biryani", tamilName: "சிக்கன் பிரியாணி", price: 250, category: "Biryani", image: "/images/dishes/Chicken biriyani.jpg", spiceLevel: 3, isVeg: false, rating: 4.8, cookTime: "45 mins" },
  { id: "7", name: "Chicken Varuval", tamilName: "சிக்கன் வருவல்", price: 220, category: "Chicken", image: "/images/dishes/Chicken varuval.jpg", spiceLevel: 4, isVeg: false, rating: 4.7, cookTime: "30 mins" },
  { id: "8", name: "Chilly Chicken", tamilName: "சில்லி சிக்கன்", price: 215, category: "Chicken", image: "/images/dishes/chilly chicken.jpg", spiceLevel: 4, isVeg: false, rating: 4.5, cookTime: "25 mins" },
  { id: "9", name: "Chicken Manchurian", tamilName: "சிக்கன் மஞ்சூரியன்", price: 320, category: "Chicken", image: "/images/dishes/chicken manchurian.jpg", spiceLevel: 3, isVeg: false, rating: 4.5, cookTime: "25 mins" },
  { id: "10", name: "Chicken Chinthamani", tamilName: "சிக்கன் சிந்தாமணி", price: 235, category: "Chicken", image: "/images/dishes/chicken chinthamani.jpg", spiceLevel: 4, isVeg: false, rating: 4.7, cookTime: "35 mins", isSpecial: true },
  { id: "11", name: "Pallipalayam Chicken", tamilName: "பள்ளிபாளையம் சிக்கன்", price: 220, category: "Chicken", image: "/images/dishes/pallipalayam chicken.jpg", spiceLevel: 5, isVeg: false, rating: 4.8, cookTime: "30 mins" },
  { id: "12", name: "Ghee Roast", tamilName: "நெய் ரோஸ்ட்", price: 90, category: "Chicken", image: "/images/dishes/Ghee roast.jpg", spiceLevel: 3, isVeg: false, rating: 4.8, cookTime: "35 mins" },

  // Country Chicken Specialties
  { id: "13", name: "Country Chicken Pichupota Curry", tamilName: "நாட்டுக்கோழி பிச்சுப்போட்ட கறி", price: 300, category: "Country Chicken", image: "/images/dishes/country chicken pichupota curry.jpg", spiceLevel: 4, isVeg: false, rating: 4.9, cookTime: "45 mins", isSpecial: true },
  { id: "14", name: "Country Chicken Salt Curry", tamilName: "நாட்டுக்கோழி உப்பு கறி", price: 320, category: "Country Chicken", image: "/images/dishes/country chicken salt curry.jpg", spiceLevel: 3, isVeg: false, rating: 4.7, cookTime: "40 mins" },
  { id: "15", name: "Country Chicken Soup", tamilName: "நாட்டுக்கோழி சூப்", price: 130, category: "Soups", image: "/images/dishes/country chicken soup.jpg", spiceLevel: 2, isVeg: false, rating: 4.6, cookTime: "20 mins" },

  // Mutton Dishes
  { id: "16", name: "Mutton Chops", tamilName: "மட்டன் சாப்ஸ்", price: 320, category: "Mutton", image: "/images/dishes/mutton chops.jpg", spiceLevel: 3, isVeg: false, rating: 4.8, cookTime: "40 mins" },
  { id: "17", name: "Mutton Kothukari", tamilName: "மட்டன் கொத்துக்கறி", price: 260, category: "Mutton", image: "/images/dishes/mutton kothukari - Copy.jpg", spiceLevel: 4, isVeg: false, rating: 4.7, cookTime: "45 mins" },
  { id: "18", name: "Mutton Thalakari", tamilName: "மட்டன் தலைக்கறி", price: 230, category: "Mutton", image: "/images/dishes/mutton thalakari.jpg", spiceLevel: 4, isVeg: false, rating: 4.8, cookTime: "50 mins" },
  { id: "19", name: "Mutton Balls", tamilName: "மட்டன் உருண்டை", price: 80, category: "Mutton", image: "/images/dishes/mutton balls.jpg", spiceLevel: 3, isVeg: false, rating: 4.6, cookTime: "35 mins" },
  { id: "20", name: "Mutton Soup", tamilName: "மட்டன் சூப்", price: 140, category: "Soups", image: "/images/dishes/mutton soup.jpg", spiceLevel: 2, isVeg: false, rating: 4.7, cookTime: "25 mins" },
  { id: "21", name: "Nalli Kulambu", tamilName: "நள்ளி குழம்பு", price: 340, category: "Mutton", image: "/images/dishes/nalli kulambu.jpg", spiceLevel: 3, isVeg: false, rating: 4.9, cookTime: "60 mins", isSpecial: true },
  { id: "22", name: "Leg Gravy", tamilName: "லெக் கிரேவி", price: 320, category: "Mutton", image: "/images/dishes/leg gravy.jpg", spiceLevel: 3, isVeg: false, rating: 4.7, cookTime: "55 mins" },
  { id: "23", name: "Aatukaal Paya", tamilName: "ஆட்டுக்கால் பாயா", price: 250, category: "Mutton", image: "/images/dishes/Aatukaal paya.jpg", spiceLevel: 2, isVeg: false, rating: 4.8, cookTime: "90 mins" },

  // Organ Meat Specialties
  { id: "24", name: "Brain Fry", tamilName: "பிரைன் வறுவல்", price: 220, category: "Special", image: "/images/dishes/1brain.jpg", spiceLevel: 3, isVeg: false, rating: 4.5, cookTime: "25 mins" },
  { id: "25", name: "Liver Fry", tamilName: "ஈரல் வறுவல்", price: 270, category: "Special", image: "/images/dishes/3liver fry.jpg", spiceLevel: 3, isVeg: false, rating: 4.6, cookTime: "20 mins" },
  { id: "26", name: "Blood Poriyal", tamilName: "ரத்த பொரியல்", price: 100, category: "Special", image: "/images/dishes/blood poriyal.jpg", spiceLevel: 3, isVeg: false, rating: 4.4, cookTime: "25 mins" },
  { id: "27", name: "Kudal Kulambu", tamilName: "குடல் குழம்பு", price: 240, category: "Special", image: "/images/dishes/kudal kulambu.jpg", spiceLevel: 4, isVeg: false, rating: 4.5, cookTime: "40 mins" },
  { id: "28", name: "Chest Bone Fry", tamilName: "மார்பு எலும்பு வறுவல்", price: 270, category: "Special", image: "/images/dishes/chest bone fry.jpg", spiceLevel: 3, isVeg: false, rating: 4.5, cookTime: "30 mins" },
  { id: "29", name: "Chest Bone Gravy", tamilName: "மார்பு எலும்பு கிரேவி", price: 290, category: "Special", image: "/images/dishes/chest bone gravy.jpg", spiceLevel: 3, isVeg: false, rating: 4.6, cookTime: "35 mins" },
  { id: "30", name: "Chest Bone Kulambu", tamilName: "மார்பு எலும்பு குழம்பு", price: 290, category: "Special", image: "/images/dishes/chest bone kulambu - Copy - Copy.jpg", spiceLevel: 4, isVeg: false, rating: 4.6, cookTime: "40 mins" },

  // Seafood
  { id: "31", name: "Fish Fry", tamilName: "மீன் வறுவல்", price: 270, category: "Seafood", image: "/images/dishes/fish fry.jpg", spiceLevel: 2, isVeg: false, rating: 4.7, cookTime: "20 mins" },
  { id: "32", name: "Chilly Fish", tamilName: "சில்லி மீன்", price: 240, category: "Seafood", image: "/images/dishes/chilly fish.jpg", spiceLevel: 3, isVeg: false, rating: 4.6, cookTime: "25 mins" },
  { id: "33", name: "Vanjaram Fish", tamilName: "வஞ்சரம் மீன்", price: 270, category: "Seafood", image: "/images/dishes/vanjaram meen varuval.jpg", spiceLevel: 2, isVeg: false, rating: 4.8, cookTime: "25 mins" },
  { id: "34", name: "Manthal Fish", tamilName: "மந்தை மீன்", price: 250, category: "Seafood", image: "/images/dishes/manthal fish - Copy.jpg", spiceLevel: 2, isVeg: false, rating: 4.7, cookTime: "25 mins" },
  { id: "35", name: "Nethili Fish", tamilName: "நெத்திலி மீன்", price: 220, category: "Seafood", image: "/images/dishes/nethli fish.jpg", spiceLevel: 2, isVeg: false, rating: 4.5, cookTime: "20 mins" },
  { id: "36", name: "Nethili Fry", tamilName: "நெத்திலி வறுவல்", price: 220, category: "Seafood", image: "/images/dishes/Nethli fry.jpg", spiceLevel: 2, isVeg: false, rating: 4.5, cookTime: "15 mins" },
  { id: "37", name: "Prawn Fry", tamilName: "இறால் வறுவல்", price: 240, category: "Seafood", image: "/images/dishes/Prawn.jpg", spiceLevel: 3, isVeg: false, rating: 4.8, cookTime: "20 mins" },
  { id: "38", name: "Chilly Kadai", tamilName: "சில்லி கடை", price: 160, category: "Seafood", image: "/images/dishes/chilli kadai - Copy - Copy.jpg", spiceLevel: 3, isVeg: false, rating: 4.4, cookTime: "20 mins" },
  { id: "39", name: "Kadai Fry", tamilName: "காடை வறுவல்", price: 190, category: "Special", image: "/images/dishes/kadai fry.jpg", spiceLevel: 3, isVeg: false, rating: 4.5, cookTime: "20 mins" },

  // Rice & Noodles
  { id: "40", name: "Chicken Fried Rice", tamilName: "சிக்கன் ஃப்ரைட் ரைஸ்", price: 180, category: "Rice", image: "/images/dishes/chicken fried rice.jpg", spiceLevel: 2, isVeg: false, rating: 4.5, cookTime: "20 mins" },
  { id: "41", name: "Egg Fried Rice", tamilName: "முட்டை ஃப்ரைட் ரைஸ்", price: 150, category: "Rice", image: "/images/dishes/egg fried rice.jpg", spiceLevel: 2, isVeg: false, rating: 4.4, cookTime: "15 mins" },
  { id: "42", name: "Veg Fried Rice", tamilName: "வெஜ் ஃப்ரைட் ரைஸ்", price: 120, category: "Rice", image: "/images/dishes/veg fried rice.jpg", spiceLevel: 1, isVeg: true, rating: 4.4, cookTime: "15 mins" },
  { id: "43", name: "Mushroom Fried Rice", tamilName: "காளான் ஃப்ரைட் ரைஸ்", price: 170, category: "Rice", image: "/images/dishes/mushroom fried rice.jpg", spiceLevel: 1, isVeg: true, rating: 4.5, cookTime: "20 mins" },
  { id: "44", name: "Gobi Fried Rice", tamilName: "கோபி ஃப்ரைட் ரைஸ்", price: 170, category: "Rice", image: "/images/dishes/gobi fried rice.jpg", spiceLevel: 1, isVeg: true, rating: 4.3, cookTime: "18 mins" },
  { id: "45", name: "Paneer Fried Rice", tamilName: "பன்னீர் ஃப்ரைட் ரைஸ்", price: 180, category: "Rice", image: "/images/dishes/panner fried rice.jpg", spiceLevel: 1, isVeg: true, rating: 4.5, cookTime: "20 mins" },
  { id: "46", name: "Schezwan Chicken Rice", tamilName: "செஷ்வான் சிக்கன் ரைஸ்", price: 200, category: "Rice", image: "/images/dishes/schezwan chicken rice.jpg", spiceLevel: 4, isVeg: false, rating: 4.5, cookTime: "22 mins" },
  { id: "47", name: "Schezwan Fried Rice", tamilName: "செஷ்வான் ஃப்ரைட் ரைஸ்", price: 200, category: "Rice", image: "/images/dishes/schewzan fried rice.jpg", spiceLevel: 3, isVeg: true, rating: 4.4, cookTime: "18 mins" },
  { id: "48", name: "Schezwan Egg Rice", tamilName: "செஷ்வான் முட்டை ரைஸ்", price: 160, category: "Rice", image: "/images/dishes/schewzan egg rice.jpg", spiceLevel: 3, isVeg: false, rating: 4.4, cookTime: "18 mins" },
  { id: "49", name: "Schezwan Gobi Rice", tamilName: "செஷ்வான் கோபி ரைஸ்", price: 160, category: "Rice", image: "/images/dishes/schewzan gobi rice.jpg", spiceLevel: 3, isVeg: true, rating: 4.3, cookTime: "20 mins" },
  { id: "50", name: "Schezwan Paneer Rice", tamilName: "செஷ்வான் பன்னீர் ரைஸ்", price: 180, category: "Rice", image: "/images/dishes/schewzan panner rice.jpg", spiceLevel: 3, isVeg: true, rating: 4.5, cookTime: "20 mins" },

  // Noodles
  { id: "51", name: "Chicken Noodles", tamilName: "சிக்கன் நூடுல்ஸ்", price: 180, category: "Noodles", image: "/images/dishes/chicken noodles.jpg", spiceLevel: 2, isVeg: false, rating: 4.5, cookTime: "20 mins" },
  { id: "52", name: "Egg Noodles", tamilName: "முட்டை நூடுல்ஸ்", price: 150, category: "Noodles", image: "/images/dishes/egg noodles.jpg", spiceLevel: 2, isVeg: false, rating: 4.4, cookTime: "15 mins" },
  { id: "53", name: "Veg Noodles", tamilName: "வெஜ் நூடுல்ஸ்", price: 120, category: "Noodles", image: "/images/dishes/veg noodles.jpg", spiceLevel: 1, isVeg: true, rating: 4.4, cookTime: "15 mins" },
  { id: "54", name: "Mushroom Noodles", tamilName: "காளான் நூடுல்ஸ்", price: 170, category: "Noodles", image: "/images/dishes/mushroom noodles.jpg", spiceLevel: 1, isVeg: true, rating: 4.5, cookTime: "20 mins" },
  { id: "55", name: "Gobi Noodles", tamilName: "கோபி நூடுல்ஸ்", price: 170, category: "Noodles", image: "/images/dishes/gobi noodles.jpg", spiceLevel: 1, isVeg: true, rating: 4.3, cookTime: "18 mins" },
  { id: "56", name: "Paneer Noodles", tamilName: "பன்னீர் நூடுல்ஸ்", price: 180, category: "Noodles", image: "/images/dishes/panner noodles.jpg", spiceLevel: 1, isVeg: true, rating: 4.5, cookTime: "20 mins" },
  { id: "57", name: "Schezwan Chicken Noodles", tamilName: "செஷ்வான் சிக்கன் நூடுல்ஸ்", price: 200, category: "Noodles", image: "/images/dishes/schewzan chicken noodles.jpg", spiceLevel: 4, isVeg: false, rating: 4.5, cookTime: "22 mins" },
  { id: "58", name: "Schezwan Egg Noodles", tamilName: "செஷ்வான் முட்டை நூடுல்ஸ்", price: 160, category: "Noodles", image: "/images/dishes/schewzan egg noodles.jpg", spiceLevel: 3, isVeg: false, rating: 4.4, cookTime: "18 mins" },
  { id: "59", name: "Schezwan Veg Noodles", tamilName: "செஷ்வான் வெஜ் நூடுல்ஸ்", price: 130, category: "Noodles", image: "/images/dishes/schezwan veg noodles.jpg", spiceLevel: 3, isVeg: true, rating: 4.4, cookTime: "18 mins" },
  { id: "60", name: "Schezwan Mushroom Noodles", tamilName: "செஷ்வான் காளான் நூடுல்ஸ்", price: 180, category: "Noodles", image: "/images/dishes/schewzan mushroom noodles.jpg", spiceLevel: 3, isVeg: true, rating: 4.5, cookTime: "20 mins" },

  // Meals & Breakfast
  { id: "61", name: "Non-Veg Meals", tamilName: "நான்-வெஜ் சாப்பாடு", price: 250, category: "Meals", image: "/images/dishes/Non-veg meals.jpg", spiceLevel: 2, isVeg: false, rating: 4.7, cookTime: "30 mins", isSpecial: true },
  { id: "62", name: "Veg Meals", tamilName: "வெஜ் சாப்பாடு", price: 150, category: "Meals", image: "/images/dishes/veg meals.jpg", spiceLevel: 1, isVeg: true, rating: 4.6, cookTime: "25 mins" },
  { id: "63", name: "Idly Dosa", tamilName: "இட்லி தோசை", price: 80, category: "Breakfast", image: "/images/dishes/Idly Dosa.jpg", spiceLevel: 1, isVeg: true, rating: 4.5, cookTime: "15 mins" },
  { id: "64", name: "Idiyappam", tamilName: "இடியாப்பம்", price: 50, category: "Breakfast", image: "/images/dishes/idiyappam.jpg", spiceLevel: 1, isVeg: true, rating: 4.4, cookTime: "20 mins" },
  { id: "65", name: "Idiyappam Paya", tamilName: "இடியாப்பம் பாயா", price: 180, category: "Breakfast", image: "/images/dishes/idiyappam paya.jpg", spiceLevel: 2, isVeg: false, rating: 4.7, cookTime: "30 mins" },
  { id: "66", name: "Parotta", tamilName: "பரோட்டா", price: 35, category: "Breads", image: "/images/dishes/Parotta.jpg", spiceLevel: 1, isVeg: true, rating: 4.5, cookTime: "5 mins" },
  { id: "67", name: "Chapathi", tamilName: "சப்பாத்தி", price: 35, category: "Breads", image: "/images/dishes/chapathi.jpg", spiceLevel: 0, isVeg: true, rating: 4.3, cookTime: "5 mins" },
  { id: "68", name: "Variety Uthappam", tamilName: "வெரைட்டி ஊத்தாப்பம்", price: 130, category: "Breakfast", image: "/images/dishes/variety uthappam.jpg", spiceLevel: 1, isVeg: true, rating: 4.5, cookTime: "15 mins" },
  { id: "69", name: "Paniyaram", tamilName: "பணியாரம்", price: 75, category: "Breakfast", image: "/images/dishes/paniyaram.jpg", spiceLevel: 1, isVeg: true, rating: 4.4, cookTime: "15 mins" },
  { id: "70", name: "Omelette", tamilName: "ஆம்லெட்", price: 30, category: "Breakfast", image: "/images/dishes/Omlette.jpg", spiceLevel: 1, isVeg: false, rating: 4.3, cookTime: "5 mins" },

  // Special Items
  { id: "71", name: "Kothu", tamilName: "கொத்து", price: 150, category: "Special", image: "/images/dishes/kothu.jpg", spiceLevel: 3, isVeg: false, rating: 4.6, cookTime: "20 mins" },
  { id: "72", name: "Gobi Fry", tamilName: "கோபி வறுவல்", price: 130, category: "Vegetarian", image: "/images/dishes/gobi fry.jpg", spiceLevel: 2, isVeg: true, rating: 4.4, cookTime: "15 mins" },
  { id: "73", name: "Roast", tamilName: "ரோஸ்ட்", price: 70, category: "Special", image: "/images/dishes/roast.jpg", spiceLevel: 3, isVeg: false, rating: 4.6, cookTime: "30 mins" },
  { id: "74", name: "Thalakari", tamilName: "தலைக்கறி", price: 230, category: "Special", image: "/images/dishes/thalakari.jpg", spiceLevel: 4, isVeg: false, rating: 4.7, cookTime: "45 mins" }
];

// Menu categories for filtering
const menuCategories = ["All Items", "Biryani", "Chicken", "Country Chicken", "Mutton", "Seafood", "Special", "Rice", "Noodles", "Meals", "Breakfast", "Breads", "Vegetarian", "Soups"];

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [searchQuery, setSearchQuery] = useState("");
  const [spiceLevelFilter, setSpiceLevelFilter] = useState<number | null>(null);
  const [vegFilter, setVegFilter] = useState<boolean | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [showMenuCard, setShowMenuCard] = useState(false);

  // Filter menu items based on selected filters
  const filteredItems = useMemo(() => {
    let items = featuredMenuItems;

    // Category filter
    if (selectedCategory !== "All Items") {
      items = items.filter((item) => item.category === selectedCategory);
    }

    // Search filter
    if (searchQuery) {
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.tamilName.includes(searchQuery)
      );
    }

    // Spice level filter
    if (spiceLevelFilter !== null) {
      items = items.filter((item) => item.spiceLevel === spiceLevelFilter);
    }

    // Veg/Non-veg filter
    if (vegFilter !== null) {
      items = items.filter((item) => item.isVeg === vegFilter);
    }

    return items;
  }, [selectedCategory, searchQuery, spiceLevelFilter, vegFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/dishes/Non-veg meals.jpg"
            alt="Menu Hero"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Our Menu</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto font-light">
              74 Authentic Dishes • Traditional Clay Pot Cooking
            </p>
          </motion.div>
        </div>
      </section>

      {/* Menu Card Button - Floating */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setShowMenuCard(true)}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all group"
        title="View Complete Menu Card"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6" />
          <span className="hidden group-hover:inline-block pr-2 font-semibold">Menu Card</span>
        </div>
      </motion.button>

      {/* Filters and Search */}
      <section className="sticky top-0 z-30 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container py-5">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setVegFilter(vegFilter === true ? null : true)}
                className={`px-5 py-3 rounded-xl font-medium transition-all ${
                  vegFilter === true
                    ? "bg-green-600 text-white shadow-lg transform scale-105"
                    : "bg-white border border-gray-200 hover:bg-gray-50"
                }`}
              >
                <Leaf className="w-5 h-5 inline mr-2" />
                Veg
              </button>
              <button
                onClick={() => setVegFilter(vegFilter === false ? null : false)}
                className={`px-5 py-3 rounded-xl font-medium transition-all ${
                  vegFilter === false
                    ? "bg-red-600 text-white shadow-lg transform scale-105"
                    : "bg-white border border-gray-200 hover:bg-gray-50"
                }`}
              >
                Non-Veg
              </button>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-5 py-3 rounded-xl bg-white border border-gray-200 hover:bg-gray-50 font-medium transition-all"
              >
                <Filter className="w-5 h-5 inline mr-2" />
                More Filters
              </button>
            </div>
          </div>

          {/* Additional Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 pt-4 border-t"
            >
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium">Spice Level:</span>
                {[1, 2, 3, 4, 5].map((level) => (
                  <button
                    key={level}
                    onClick={() =>
                      setSpiceLevelFilter(spiceLevelFilter === level ? null : level)
                    }
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      spiceLevelFilter === level
                        ? "bg-red-500 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {[...Array(level)].map(() => "🌶️").join("")}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Category Tabs */}
      <section className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container py-5">
          <div className="flex overflow-x-auto scrollbar-hide gap-3">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full whitespace-nowrap font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-red-700 text-white shadow-lg"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items Grid with Images */}
      <section className="container py-12">
        {filteredItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl mb-4">No items found matching your filters.</p>
            <button
              onClick={() => {
                setSelectedCategory("All Items");
                setSearchQuery("");
                setSpiceLevelFilter(null);
                setVegFilter(null);
              }}
              className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-red-700 transition-all shadow-lg"
            >
              Clear All Filters
            </button>
          </div>
        ) : (
          <div>
            <p className="text-center text-gray-600 mb-8 text-lg">
              <span className="font-semibold text-gray-900">{filteredItems.length}</span> of {featuredMenuItems.length} dishes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: Math.min(index * 0.03, 0.3), duration: 0.5 }}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="text-base font-bold text-gray-900 mb-1 line-clamp-1">{item.name}</h3>
                    <p className="text-sm text-gray-500 font-tamil mb-3 line-clamp-1">{item.tamilName}</p>

                    {/* Price */}
                    <div className="pt-2">
                      <span className="text-2xl font-bold text-gray-900">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Note Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-8">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Traditional Clay Pot Cooking</h3>
            <p className="text-lg max-w-2xl mx-auto">
              All 74 dishes are prepared in traditional clay pots, bringing you the authentic taste of South Indian home cooking.
            </p>
            <button
              onClick={() => setShowMenuCard(true)}
              className="mt-6 bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              View Complete Menu Card (300+ Items)
            </button>
          </motion.div>
        </div>
      </section>

      {/* Menu Card Modal */}
      <MenuCardModal isOpen={showMenuCard} onClose={() => setShowMenuCard(false)} />
    </div>
  );
}