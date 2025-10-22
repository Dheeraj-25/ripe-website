import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";

interface Event {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  location: string;
  category: string;
}

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((err) => console.error("Error loading events:", err));
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Events & News</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95 animate-fade-in">
              Stay connected with our latest activities, workshops, and community events
            </p>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={event.id} className="animate-slide-up" style={{ animationDelay: `${index * 50}ms` }}>
                  <EventCard {...event} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
