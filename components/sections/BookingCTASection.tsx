"use client";

import { Button } from "@/components/ui/Button";
import * as motion from "framer-motion/client";
import { PhoneCall, MessageCircle, Calendar } from "lucide-react";

export default function BookingCTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-luxury" />
      
      {/* Decorative patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_0,rgba(255,255,255,0)_100%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Give Your Car the Care It Deserves
          </h2>
          <p className="text-xl text-white/80 mb-12 font-light">
            Book your premium wash today and experience the showroom shine difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-50 hover:scale-105 transition-transform duration-300" onClick={() => window.dispatchEvent(new CustomEvent('open-booking'))}>
              <Calendar className="mr-2 h-5 w-5" />
              Book Online
            </Button>
            <Button size="lg" className="w-full sm:w-auto bg-[#25D366] text-white hover:bg-[#128C7E] hover:scale-105 transition-transform duration-300 border-none" asChild>
              <a href="https://wa.me/918055985195?text=Hi%20Darrel%2C%20I%20have%20query.%20" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
            <Button size="lg" variant="glass" className="w-full sm:w-auto hover:scale-105 transition-transform duration-300">
              <PhoneCall className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
