"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { useState, useRef, MouseEvent, TouchEvent } from "react";
import * as motion from "framer-motion/client";
import { MoveHorizontal } from "lucide-react";

export default function BeforeAfterSection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => handleMove(e.clientX);
  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => handleMove(e.touches[0].clientX);

  return (
    <section className="py-24 bg-navy relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="See The Difference" 
          subtitle="Transformation"
          light
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize mt-12 shadow-2xl"
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onTouchMove={handleTouchMove}
        >
          {/* Before Image */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale brightness-50"
          />
          <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-md text-white px-4 py-2 rounded-lg font-semibold text-sm z-10">
            Before
          </div>

          {/* After Image */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center transition-all duration-0"
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          />
          <div className="absolute top-6 right-6 bg-primary/80 backdrop-blur-md text-white px-4 py-2 rounded-lg font-semibold text-sm z-10">
            After
          </div>

          {/* Slider */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 shadow-[0_0_15px_rgba(0,102,255,0.5)]"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-primary">
              <MoveHorizontal className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
