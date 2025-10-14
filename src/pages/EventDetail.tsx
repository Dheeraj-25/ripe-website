import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Share2, ArrowLeft } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  content: string;
  location: string;
  category: string;
}

const EventDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    fetch("/data/events.json")
      .then((res) => res.json())
      .then((data: Event[]) => {
        const found = data.find((e) => e.id === id);
        setEvent(found || null);
      })
      .catch((err) => console.error("Error loading event:", err));
  }, [id]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" });
  };

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <p className="text-xl text-muted-foreground">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <article>
          {/* Hero Image */}
          <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(/assets/images/${event.image})` }}>
            <div className="absolute inset-0 bg-gradient-overlay" />
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 -mt-20 relative z-10">
            <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-elevated p-8 md:p-12">
              <Button asChild variant="outline" size="sm" className="mb-6">
                <Link to="/events">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Events
                </Link>
              </Button>

              <div className="mb-6">
                <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
                  {event.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{event.title}</h1>
                
                <div className="flex flex-wrap gap-6 text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: event.title,
                        text: event.summary,
                        url: window.location.href,
                      });
                    }
                  }}
                  className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Share this event</span>
                </button>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-foreground leading-relaxed mb-6">{event.summary}</p>
                <p className="text-foreground leading-relaxed">{event.content}</p>
              </div>

              <div className="mt-12 pt-8 border-t">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Get Involved</h3>
                <p className="text-muted-foreground mb-6">
                  Interested in participating or learning more about this event? Contact us for details.
                </p>
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetail;
