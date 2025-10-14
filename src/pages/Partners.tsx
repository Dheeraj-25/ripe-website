import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake } from "lucide-react";

const Partners = () => {
  const partnerCategories = [
    {
      title: "International Partners",
      partners: ["International Development Agency", "Global Climate Fund", "World Agricultural Foundation", "UN Development Programme"],
    },
    {
      title: "Government Partnerships",
      partners: ["Ministry of Rural Development", "State Agriculture Department", "National Rural Livelihoods Mission", "Watershed Development Department"],
    },
    {
      title: "Corporate Partners",
      partners: ["Agricultural Corporation Ltd", "Green Energy Solutions", "Rural Finance Bank", "Sustainable Foods Inc"],
    },
    {
      title: "NGO & Academic Partners",
      partners: ["Agricultural University", "Rural Development Institute", "Climate Action Network", "Women Empowerment Foundation"],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <Handshake className="w-16 h-16 mx-auto mb-6 animate-fade-in" />
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Partners</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95 animate-fade-in">
              Collaborating with organizations worldwide to create lasting impact in rural communities
            </p>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-bold mb-8 text-foreground text-center">{category.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {category.partners.map((partner, index) => (
                    <div
                      key={index}
                      className="bg-card rounded-lg p-6 flex items-center justify-center text-center border hover:shadow-card-hover transition-shadow animate-scale-in"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <p className="font-medium text-foreground">{partner}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Become a Partner</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join us in our mission to transform rural India. Let's collaborate to create sustainable solutions for communities in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/contact">Partner With Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/contact#donate">Support Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Partners;
