"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import * as motion from "framer-motion/client";
import { Droplets, Sparkles, Shield, Repeat } from "lucide-react";

const services = [
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Exterior Wash",
    description: "Premium foam wash, pressure cleaning, and tire shine for a spotless exterior.",
    features: ["Foam wash", "Pressure cleaning", "Tire shine"],
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Interior Cleaning",
    description: "Deep vacuuming, dashboard detailing, and complete odor removal.",
    features: ["Vacuuming", "Dashboard detailing", "Odor removal"],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Premium Detailing",
    description: "Advanced paint correction, ceramic coating, and premium protection.",
    features: ["Paint correction", "Ceramic coating", "Premium protection"],
  },
  {
    icon: <Repeat className="w-8 h-8" />,
    title: "Subscription Plans",
    description: "Monthly wash packages with priority booking and exclusive discounts.",
    features: ["Monthly wash packages", "Priority booking", "Discounts"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-light-gray relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle 
          title="Our Premium Services" 
          subtitle="What We Offer"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
              <p className="text-text-gray mb-6 text-sm leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm font-medium text-navy/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
