"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { X, Loader2, CheckCircle2 } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
}

export function BookingModal({ isOpen, onClose, selectedPackage }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      datetime: formData.get("datetime"),
      washType: formData.get("washType"),
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        let errorMsg = "Failed to submit form";
        try {
          const errorData = await res.json();
          if (errorData.message) errorMsg = errorData.message;
        } catch (e) {}
        throw new Error(errorMsg);
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-navy/60 backdrop-blur-sm" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-text-gray hover:text-navy transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-navy mb-2">Booking Confirmed!</h3>
            <p className="text-text-gray">We will contact you shortly.</p>
          </div>
        ) : (
          <>
            <h3 className="text-2xl font-bold text-navy mb-6">Book an Appointment</h3>
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  required 
                  pattern="[0-9]{10,15}"
                  title="Please enter a valid phone number"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label htmlFor="datetime" className="block text-sm font-medium text-navy mb-1">Date & Time</label>
                <input 
                  type="datetime-local" 
                  id="datetime" 
                  name="datetime" 
                  required 
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div>
                <label htmlFor="washType" className="block text-sm font-medium text-navy mb-1">Wash Type</label>
                <select 
                  id="washType" 
                  name="washType" 
                  required
                  defaultValue={selectedPackage || ""}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 bg-white"
                >
                  <option value="">Select a package</option>
                  <option value="Basic Wash (₹499)">Basic Wash (₹499)</option>
                  <option value="Premium Wash (₹999)">Premium Wash (₹999)</option>
                  <option value="Ultimate Detailing (₹2499)">Ultimate Detailing (₹2499)</option>
                </select>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white mt-4" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Confirm Booking"
                )}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
