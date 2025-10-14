import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/HeroCarousel";
import StatsCounter from "@/components/StatsCounter";
import ProgrammeCard from "@/components/ProgrammeCard";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";

interface Programme {
  id: string;
  title: string;
  category: string;
  short_desc: string;
  image: string;
  read_more_url: string;
}

interface Event {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  location: string;
  category: string;
}

interface Partner {
  id: string;
  name: string;
  logo: string;
  website: string;
  description: string;
  category: string;
}

const Home = () => {
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [events, setEvents] = useState<Event[]>([]);
  const [partners, setPartners] = useState<Partner[]>([]);

  useEffect(() => {
    // Load programmes data
    fetch("/data/programmes.json")
      .then((res) => res.json())
      .then((data) => setProgrammes(data.slice(0, 6)))
      .catch((err) => console.error("Error loading programmes:", err));

    // Load events data
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data.slice(0, 3)))
      .catch((err) => console.error("Error loading events:", err));

    // Load partners data
    fetch("/data/partners.json")
      .then((res) => res.json())
      .then((data) => setPartners(data))
      .catch((err) => console.error("Error loading partners:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <HeroCarousel />

        {/* Stats Counter */}
        <StatsCounter />

        {/* Programmes Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Our Programmes</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforming lives through sustainable development initiatives across rural India
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {programmes.map((programme, index) => (
                <div
                  key={programme.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProgrammeCard {...programme} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg">
                <Link to="/programmes">View All Programmes</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Partners Logos Band */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
              Our Partners
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner) => (
                <a
                  key={partner.id}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-40 h-24 bg-white rounded-lg flex items-center justify-center p-4 transition-transform hover:scale-105"
                  title={partner.name}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-center p-2 text-sm rounded-lg">
                    {partner.description}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Events & News Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Latest Events & News</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay updated with our ongoing initiatives and upcoming events
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <EventCard {...event} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link to="/events">See All Events</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">
              Join Us in Creating Sustainable Change
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-95 animate-fade-in">
              Your support can transform lives and build resilient communities across rural India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button asChild size="lg" variant="secondary">
                <Link to="/contact#donate">Support Our Work</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/partners">Become a Partner</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
