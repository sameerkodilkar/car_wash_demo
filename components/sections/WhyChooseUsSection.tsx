"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import * as motion from "framer-motion/client";
import { Leaf, Award, Wrench, Clock, BadgeDollarSign, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: <Leaf className="w-6 h-6" />, title: "Eco-Friendly Products", desc: "Safe for your car and the environment" },
  { icon: <Award className="w-6 h-6" />, title: "Certified Professionals", desc: "Trained experts handling your vehicle" },
  { icon: <Wrench className="w-6 h-6" />, title: "Advanced Equipment", desc: "State-of-the-art detailing tools" },
  { icon: <Clock className="w-6 h-6" />, title: "Fast Service", desc: "Efficient processes without compromising quality" },
  { icon: <BadgeDollarSign className="w-6 h-6" />, title: "Affordable Pricing", desc: "Premium service at competitive rates" },
  { icon: <ThumbsUp className="w-6 h-6" />, title: "Satisfaction Guarantee", desc: "We ensure you leave happy" },
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 bg-light-gray relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Why Choose Darrel" 
          subtitle="Our Advantages"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 text-primary flex items-center justify-center shrink-0">
                {reason.icon}
              </div>
              <div>
                <h4 className="font-bold text-navy mb-2">{reason.title}</h4>
                <p className="text-text-gray text-sm">{reason.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
