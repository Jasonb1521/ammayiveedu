"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/branches", label: "Branches" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <>
      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
          isScrolled ? "shadow-lg py-2" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-16 h-16 mr-3">
                <Image
                  src="/images/dishes/Ammayi logo.jpg"
                  alt="Ammayi Veedu"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-serif font-bold text-primary">
                  Ammayi Veedu
                </h1>
                <p className="text-xs text-warm-brown">Pot Cook Restaurant</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-dark hover:text-primary transition-colors font-medium group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Link
                href="/branches"
                className="hidden md:block bg-primary text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Visit Us
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t mt-4"
            >
              <nav className="container mx-auto px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 text-dark hover:text-primary transition-colors font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/branches"
                  onClick={() => setIsMenuOpen(false)}
                  className="block mt-4 bg-primary text-white text-center py-3 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Visit Us Today
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;