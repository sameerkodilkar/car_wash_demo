"use client";

import { useEffect, useState } from "react";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Cars Washed", value: 10000, suffix: "+", prefix: "" },
  { label: "Customer Satisfaction", value: 98, suffix: "%", prefix: "" },
  { label: "Years Experience", value: 5, suffix: "+", prefix: "" },
  { label: "Star Rating", value: 4.9, suffix: "", prefix: "" },
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-navy relative z-20 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 flex items-center">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  {stat.prefix}{stat.value}{stat.suffix}
                </span>
              </div>
              <p className="text-text-gray font-medium text-sm md:text-base uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
