"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import * as motion from "framer-motion/client";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic Wash",
    price: "499",
    features: ["Exterior foam wash", "Tire cleaning & shine", "Interior vacuuming", "Glass cleaning"],
    highlight: false,
  },
  {
    name: "Premium Wash",
    price: "999",
    features: ["Everything in Basic", "Dashboard detailing", "Odor removal", "Liquid wax application", "Underbody wash"],
    highlight: true,
  },
  {
    name: "Ultimate Detailing",
    price: "2499",
    features: ["Everything in Premium", "Paint correction", "Ceramic spray coating", "Leather seat conditioning", "Engine bay cleaning"],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-light-gray relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Simple, Transparent Pricing" 
          subtitle="Choose Your Plan"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={cn(
                "relative flex flex-col p-8 rounded-3xl transition-transform duration-300 hover:-translate-y-2",
                plan.highlight ? "bg-navy text-white shadow-2xl scale-105 md:scale-110 z-10" : "bg-white text-navy border border-gray-100 shadow-lg"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-3xl font-bold">₹</span>
                <span className="text-5xl font-black">{plan.price}</span>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className={cn("w-5 h-5", plan.highlight ? "text-primary" : "text-primary")} />
                    <span className={plan.highlight ? "text-white/80" : "text-text-gray"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.highlight ? "default" : "outline"} 
                className={cn("w-full py-6 text-lg rounded-xl", plan.highlight ? "" : "border-primary text-primary hover:bg-primary hover:text-white")}
                onClick={() => window.dispatchEvent(new CustomEvent('open-booking', { detail: { package: `${plan.name} (₹${plan.price})` } }))}
              >
                Choose Plan
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
