import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm opacity-90 mb-4">
              Working towards sustainable rural development through integrated approaches in agriculture, 
              climate action, and community empowerment across India.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/who-we-are" className="hover:opacity-80 transition-opacity">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link to="/governance" className="hover:opacity-80 transition-opacity">
                  Governance
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:opacity-80 transition-opacity">
                  Events & News
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:opacity-80 transition-opacity">
                  Media Gallery
                </Link>
              </li>
              <li>
                <Link to="/knowledge-hub" className="hover:opacity-80 transition-opacity">
                  Knowledge Hub
                </Link>
              </li>
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Programmes</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/programmes/sustainable-livestock" className="hover:opacity-80 transition-opacity">
                  Livestock Development
                </Link>
              </li>
              <li>
                <Link to="/programmes/water-centric-agriculture" className="hover:opacity-80 transition-opacity">
                  Water-Centric Agriculture
                </Link>
              </li>
              <li>
                <Link to="/programmes/climate-adaptation" className="hover:opacity-80 transition-opacity">
                  Climate Adaptation
                </Link>
              </li>
              <li>
                <Link to="/programmes/agro-biodiversity" className="hover:opacity-80 transition-opacity">
                  Agro-Biodiversity
                </Link>
              </li>
              <li>
                <Link to="/programmes/education-skilling" className="hover:opacity-80 transition-opacity">
                  Education & Skilling
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm mb-6">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="opacity-90">
                  Tirupati
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">+91-9440760393</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="opacity-90">secretary@ripengo.org</span>
              </li>
            </ul>

            <div>
              <h4 className="text-sm font-semibold mb-2">Subscribe to Newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-primary-foreground text-foreground"
                />
                <Button variant="secondary" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
          <p>© {currentYear} Your Organization. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:opacity-80 transition-opacity">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:opacity-80 transition-opacity">
              Terms of Use
            </Link>
            <Link to="/contact" className="hover:opacity-80 transition-opacity">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
