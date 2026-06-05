"use client";

import { useState, useEffect } from "react";
import { BookingModal } from "@/components/ui/BookingModal";

export function BookingModalWrapper() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string>("");

  useEffect(() => {
    const handleOpenBooking = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.package) {
        setSelectedPackage(customEvent.detail.package);
      } else {
        setSelectedPackage("");
      }
      setIsBookingOpen(true);
    };

    window.addEventListener("open-booking", handleOpenBooking);
    return () => window.removeEventListener("open-booking", handleOpenBooking);
  }, []);

  return (
    <BookingModal 
      isOpen={isBookingOpen} 
      onClose={() => setIsBookingOpen(false)} 
      selectedPackage={selectedPackage} 
    />
  );
}
