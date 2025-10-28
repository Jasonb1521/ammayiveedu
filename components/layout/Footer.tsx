"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const locations = [
    {
      name: "Siddhapudur",
      address: "138, Avaram Palayam Rd, G K D Nagar, Coimbatore - 641044",
      phone: "+91 99946 61661",
    },
    {
      name: "Ramanathapuram",
      address: "LCT Complex, 420, Trichy Rd, Singanallur, Coimbatore - 641005",
      phone: "+91 86086 61661",
    },
    {
      name: "Saravanampatti",
      address: "14/11, Sathy Rd, Saravanampatti, Coimbatore - 641035",
      phone: "+91 99436 61661",
    },
  ];

  const quickLinks = [
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About Us" },
    { href: "/branches", label: "Our Branches" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-dark text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-2">
                <Image
                  src="/images/dishes/Ammayi logo.jpg"
                  alt="Ammayi Veedu"
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold">Ammayi Veedu</h3>
                <p className="text-xs text-gray-400">Since 2014</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Experience the authentic taste of South Indian cuisine cooked in traditional clay pots.
              Taste the love of Ammayi&apos;s kitchen.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1A85CWyfjT/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/ammayiveeduofficial?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/ammayiveedu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ammayi-veedu-082537389"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@AmmayiVeedu-h3j"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Opening Hours</p>
                  <p className="text-gray-300">11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href="mailto:Ammayiveedu.potcook@gmail.com"
                    className="text-gray-300 hover:text-primary"
                  >
                    Ammayiveedu.potcook@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Contact</p>
                  <a
                    href="tel:+919994661661"
                    className="text-gray-300 hover:text-primary"
                  >
                    +91 99946 61661
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Branches Bar */}
      <div className="bg-black/50 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {locations.map((location) => (
              <div key={location.name} className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">{location.name}</p>
                  <p className="text-sm text-gray-400">{location.address}</p>
                  <a
                    href={`tel:${location.phone}`}
                    className="text-sm text-gray-400 hover:text-primary"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {currentYear} Ammayi Veedu Pot Cook. All rights reserved.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <Link href="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
              <Link href="/branches" className="hover:text-primary transition-colors">
                Branches
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;