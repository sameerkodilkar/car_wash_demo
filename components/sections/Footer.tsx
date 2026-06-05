import { Button } from "@/components/ui/Button";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="text-white font-bold text-xl tracking-wide">DARREL</span>
            </div>
            <p className="text-text-gray mb-6">Premium car washing and detailing services that bring back the factory-fresh look. Excellence in every drop.</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-6">Services</h4>
            <ul className="flex flex-col gap-4 text-text-gray">
              <li><a href="#" className="hover:text-primary transition-colors">Exterior Wash</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Interior Detailing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Ceramic Coating</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Paint Correction</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="flex flex-col gap-4 text-text-gray">
              <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Newsletter</h4>
            <p className="text-text-gray mb-4">Subscribe to get special offers and updates.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-white/10 border border-white/20 rounded-md px-4 py-2 w-full text-white focus:outline-none focus:border-primary" />
              <Button className="bg-primary text-white">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-text-gray text-sm">
          <p>© 2026 Darrel Premium Car Care. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
