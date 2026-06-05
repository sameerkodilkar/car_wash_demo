"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import * as motion from "framer-motion/client";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "BMW 5 Series Owner",
    content: "Absolutely blown away by the attention to detail. My car looks better than the day I bought it from the showroom. Highly recommended!",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Mercedes C-Class Owner",
    content: "The ceramic coating service is incredible. The water just beads off, and the shine is unmatched. Very professional team.",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    role: "Audi A6 Owner",
    content: "I've tried many premium detailers, but Darrel stands out. Their process is transparent, and the results speak for themselves.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="What Our Clients Say" 
          subtitle="Testimonials"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-light-gray rounded-3xl p-8 relative"
            >
              <Quote className="absolute top-8 right-8 text-primary/10 w-16 h-16" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-navy/80 text-lg mb-8 relative z-10">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-navy">{testimonial.name}</h4>
                  <p className="text-text-gray text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
