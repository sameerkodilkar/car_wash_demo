"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import * as motion from "framer-motion/client";
import { cn } from "@/lib/utils";

const gallery = [
  { src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2", alt: "Luxury car detailing" },
  { src: "https://images.unsplash.com/photo-1550524623-a5c8fa573e86?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", alt: "Car wash foam" },
  { src: "https://images.unsplash.com/photo-1605810730164-92795e1e5509?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", alt: "Interior cleaning" },
  { src: "https://images.unsplash.com/photo-1600869009498-8d429f88d4f5?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", alt: "Wheel detailing" },
  { src: "https://images.unsplash.com/photo-1549520018-912852230a11?q=80&w=800&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1", alt: "Ceramic coating" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="Our Masterpieces" 
          subtitle="Gallery"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-16 max-w-6xl mx-auto auto-rows-[250px]">
          {gallery.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={cn("relative group overflow-hidden rounded-2xl", image.span)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.src})` }}
                aria-label={image.alt}
              />
              <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
