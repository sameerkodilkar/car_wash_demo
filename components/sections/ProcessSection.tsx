"use client";

import { SectionTitle } from "@/components/ui/SectionTitle";
import * as motion from "framer-motion/client";

const steps = [
  { num: "01", title: "Book Appointment", desc: "Schedule online or via WhatsApp" },
  { num: "02", title: "Vehicle Inspection", desc: "We assess your car's condition" },
  { num: "03", title: "Professional Wash", desc: "Expert cleaning and detailing" },
  { num: "04", title: "Quality Check", desc: "Rigorous final inspection" },
  { num: "05", title: "Delivery", desc: "Your car, showroom ready" },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle 
          title="The Darrel Process" 
          subtitle="How It Works"
        />

        <div className="relative mt-20">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 overflow-hidden">
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary origin-left"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center relative"
              >
                {/* Connecting Line (Mobile) */}
                {index !== steps.length - 1 && (
                  <div className="md:hidden absolute top-[40px] left-1/2 w-1 h-full bg-gray-100 -translate-x-1/2 -z-10" />
                )}

                <div className="w-20 h-20 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center text-2xl font-bold mb-6 shadow-xl z-10 group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h4 className="text-lg font-bold text-navy mb-2">{step.title}</h4>
                <p className="text-text-gray text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
