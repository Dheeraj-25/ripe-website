import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface Programme {
  id: string;
  title: string;
  category: string;
  short_desc: string;
  long_desc: string;
  image: string;
  impact: {
    [key: string]: string | number;
  };
  read_more_url: string;
}

const ProgrammeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [programme, setProgramme] = useState<Programme | null>(null);
  const [relatedProgrammes, setRelatedProgrammes] = useState<Programme[]>([]);

  useEffect(() => {
    fetch("/data/programmes.json")
      .then((res) => res.json())
      .then((data: Programme[]) => {
        const found = data.find((p) => p.id === id);
        setProgramme(found || null);

        if (found) {
          const related = data.filter(
            (p) => p.category === found.category && p.id !== found.id
          ).slice(0, 5);
          setRelatedProgrammes(related);
        }
      })
      .catch((err) => console.error("Error loading programme:", err));
  }, [id]);

  if (!programme) {
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
        {/* Hero Image */}
        <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: `url(/assets/images/${programme.image})` }}>
          <div className="absolute inset-0 bg-gradient-overlay" />
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <Button asChild variant="secondary" size="sm" className="mb-4">
                <Link to="/programmes">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Programmes
                </Link>
              </Button>
              <h1 className="text-5xl font-bold text-primary-foreground mb-4">{programme.title}</h1>
              <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                {programme.category}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-foreground leading-relaxed mb-12">{programme.long_desc}</p>

              {/* Impact Section */}
              <div className="bg-muted rounded-lg p-8 mb-12">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Programme Impact</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(programme.impact).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">{value}</div>
                      <div className="text-muted-foreground capitalize">{key.replace(/_/g, " ")}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Support This Programme</h3>
                <p className="text-muted-foreground mb-6">Your contribution can help us expand this programme to more communities</p>
                <Button asChild size="lg">
                  <Link to="/contact#donate">Contribute Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Programmes */}
        {relatedProgrammes.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Related Programmes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProgrammes.map((related) => (
                  <Link key={related.id} to={related.read_more_url} className="group">
                    <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all">
                      <img src={`/assets/images/${related.image}`} alt={related.title} className="w-full h-48 object-cover" />
                      <div className="p-5">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{related.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{related.short_desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ProgrammeDetail;
