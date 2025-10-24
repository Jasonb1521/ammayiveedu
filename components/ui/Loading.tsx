"use client";

import React from "react";
import { motion } from "framer-motion";

export const LoadingSpinner: React.FC<{ size?: "sm" | "md" | "lg" }> = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} border-4 border-gray-200 border-t-primary rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-gray-600 animate-pulse">Loading delicious content...</p>
    </div>
  );
};

export const LoadingSkeleton: React.FC<{ lines?: number }> = ({ lines = 3 }) => {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      {[...Array(lines - 1)].map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 rounded w-full mb-2" />
      ))}
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
};

export const LoadingCard: React.FC = () => {
  return (
    <div className="card p-6 animate-pulse">
      <div className="h-48 bg-gray-200 rounded-lg mb-4" />
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-full mb-2" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />
    </div>
  );
};