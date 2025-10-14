import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    {
      name: "Who We Are",
      href: "/who-we-are",
      submenu: [
        { name: "About Us", href: "/who-we-are#about" },
        { name: "Governance", href: "/governance" },
      ],
    },
    {
      name: "What We Do",
      href: "#",
      megaMenu: true,
      sections: [
        {
          title: "Sustainable Livelihoods",
          items: [
            { name: "Livestock Development", href: "/programmes/sustainable-livestock" },
            { name: "Water-Centric Agriculture", href: "/programmes/water-centric-agriculture" },
            { name: "Farm-Based Livelihoods", href: "/programmes/farm-based-livelihoods" },
          ],
        },
        {
          title: "Climate Action",
          items: [
            { name: "Climate Adaptation", href: "/programmes/climate-adaptation" },
            { name: "Agro-Biodiversity", href: "/programmes/agro-biodiversity" },
            { name: "Mitigation Strategies", href: "/programmes" },
          ],
        },
        {
          title: "Community Development",
          items: [
            { name: "Education & Skilling", href: "/programmes/education-skilling" },
            { name: "Women Empowerment", href: "/programmes" },
            { name: "Social Enterprises", href: "/programmes" },
          ],
        },
      ],
    },
    { name: "Media", href: "/gallery" },
    { name: "Events", href: "/events" },
    { name: "Knowledge Hub", href: "/knowledge-hub" },
    { name: "Partners", href: "/partners" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-6">
            <span>📞 +91 9440760393</span>
            <span>✉️ secretary@ripengo.org</span>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-80 transition-opacity">Facebook</a>
            <a href="#" className="hover:opacity-80 transition-opacity">Twitter</a>
            <a href="https://www.linkedin.com/company/rural-institute-for-people-s-enlightenment-ripe" className="hover:opacity-80 transition-opacity">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header
        className={`sticky top-0 z-50 bg-card border-b transition-all duration-300 ${
          isScrolled ? "shadow-md py-2" : "py-4"
        }`}
      >
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-12 h-12 overflow-hidden">
                <img 
                  src="/ripe_logo.svg" 
                  alt="RIPE Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-foreground hidden sm:block">
                RIPE
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.submenu || item.megaMenu ? setActiveDropdown(item.name) : null}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.submenu || item.megaMenu ? (
                    <>
                      <button className="px-4 py-2 text-foreground hover:text-primary transition-colors flex items-center gap-1">
                        {item.name}
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div className={`absolute top-full left-0 bg-card border shadow-elevated rounded-md overflow-hidden ${
                          item.megaMenu ? "w-[600px]" : "w-56"
                        }`}>
                          {item.megaMenu && item.sections ? (
                            <div className="grid grid-cols-3 gap-4 p-6">
                              {item.sections.map((section) => (
                                <div key={section.title}>
                                  <h3 className="font-semibold text-sm text-primary mb-2">
                                    {section.title}
                                  </h3>
                                  <ul className="space-y-2">
                                    {section.items.map((subItem) => (
                                      <li key={subItem.name}>
                                        <Link
                                          to={subItem.href}
                                          className="text-sm text-muted-foreground hover:text-primary transition-colors block"
                                        >
                                          {subItem.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <ul className="py-2">
                              {item.submenu?.map((subItem) => (
                                <li key={subItem.name}>
                                  <Link
                                    to={subItem.href}
                                    className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                                  >
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-foreground hover:text-primary transition-colors block"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Donate Button & Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Button asChild className="hidden md:flex">
                <Link to="/contact#donate">
                  <Heart className="w-4 h-4 mr-2" />
                  Donate Now
                </Link>
              </Button>
              <button
                className="lg:hidden text-foreground"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t">
              <ul className="space-y-2 pt-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="block py-2 text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Button asChild className="w-full">
                    <Link to="/contact#donate">
                      <Heart className="w-4 h-4 mr-2" />
                      Donate Now
                    </Link>
                  </Button>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
