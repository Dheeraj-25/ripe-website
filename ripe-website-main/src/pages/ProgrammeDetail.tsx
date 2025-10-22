import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

// NOTE: This interface definition assumes the structure of the JSON data you provided previously.
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
  // Assuming partners, start_date, end_date, budget_rs, and locations exist for a full detail view
  partners?: string[];
  start_date?: string;
  end_date?: string | null;
  budget_rs?: number | null;
  locations?: string[];
  read_more_url: string;
}

const ProgrammeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [programme, setProgramme] = useState<Programme | null>(null);
  const [relatedProgrammes, setRelatedProgrammes] = useState<Programme[]>([]);

  useEffect(() => {
    // NOTE: This fetches the full program list (e.g., from programmes.json) 
    // You must ensure this file path is correct in your setup.
    fetch("/data/programmes.json")
      .then((res) => {
        if (!res.ok) {
            throw new Error('Failed to load programmes.json');
        }
        return res.json();
      })
      .then((data: Programme[]) => {
        // Find the current program
        const found = data.find((p) => String(p.id).trim() === String(id).trim());
        setProgramme(found || null);

        if (found) {
          const foundCategory = found.category.trim().toLowerCase();
          // Filter related programs in the same category, excluding the current one
          const related = data.filter(
            (p) => p.id !== found.id && p.category && p.category.trim().toLowerCase() === foundCategory
          );
          // Limit to a reasonable number, e.g., 3, for the related section
          setRelatedProgrammes(related.slice(0, 3)); 
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

  // Helper function to format the title to ensure exactly two lines display
  // It replaces the first newline with a space for the big header, as multi-line
  // titles in the hero are handled by the line break in the data.
  const formatHeroTitle = (title: string) => {
    return title.replace(/\n/g, ' ');
  };


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Image Section - Ensure it uses 'section' and correct positioning */}
        <section 
          className="relative h-96 bg-cover bg-center" 
          style={{ backgroundImage: `url(/assets/images/${programme.image})` }}
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-overlay" />
          
          {/* Content Layer */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 z-10">
              <Button asChild variant="secondary" size="sm" className="mb-4">
                <Link to="/programmes">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Programmes
                </Link>
              </Button>
              {/* Using the helper function to display title neatly on the header */}
              <h1 className="text-5xl font-bold text-primary-foreground mb-4">{formatHeroTitle(programme.title)}</h1>
              <span className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                {programme.category}
              </span>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Long Description */}
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

              {/* Additional Details (Partners, Dates, etc.) - Optional but helpful */}
              {programme.partners?.length || programme.locations?.length ? (
                <div className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-foreground">Key Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-foreground">
                        {programme.partners && programme.partners.length > 0 && (
                            <div>
                                <h3 className="font-semibold text-primary mb-2">Partners</h3>
                                <ul className="list-disc list-inside space-y-1">
                                    {programme.partners.map((p, index) => <li key={index} className="text-muted-foreground">{p}</li>)}
                                </ul>
                            </div>
                        )}
                        <div>
                            {programme.locations && programme.locations.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="font-semibold text-primary mb-2">Locations</h3>
                                    <p className="text-muted-foreground">{programme.locations.join(', ')}</p>
                                </div>
                            )}
                            {programme.start_date && (
                                <div className="mb-4">
                                    <h3 className="font-semibold text-primary mb-2">Duration</h3>
                                    <p className="text-muted-foreground">{new Date(programme.start_date).getFullYear()} - {programme.end_date ? new Date(programme.end_date).getFullYear() : 'Present'}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
              ) : null}

              {/* CTA */}
              <div className="text-center pt-8 border-t border-muted-foreground/20">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Support This Programme</h3>
                <p className="text-muted-foreground mb-6">Your contribution can help us expand this programme to more communities</p>
                <Button asChild size="lg">
                  <Link to="/contact#donate">Contribute Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Programmes Section */}
        {relatedProgrammes.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Related Programmes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProgrammes.map((related) => (
                  <Link 
                    key={related.id} 
                    to={related.read_more_url} 
                    className="group"
                    // Ensures clicking the card takes you to the correct detail page
                    onClick={() => {
                        window.scrollTo(0, 0); 
                    }}
                  >
                    <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all h-full flex flex-col">
                      <img 
                        src={`/assets/images/${related.image}`} 
                        alt={related.title.replace(/\n/g, ' ')} 
                        className="w-full h-48 object-cover" 
                      />
                      <div className="p-5 flex flex-col flex-grow">
                        {/* Title and Short Desc Container: Fixed height for alignment */}
                        <div className="h-24 flex flex-col justify-start mb-2">
                           <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
                              {/* Display title, maintaining the line break from JSON */}
                              {related.title.split('\n').map((line, index) => (
                                <span key={index} className="block">{line}</span>
                              ))}
                           </h3>
                           <p className="text-sm text-muted-foreground mt-1 leading-snug">
                              {/* Display description, maintaining the line break from JSON */}
                              {related.short_desc.split('\n').map((line, index) => (
                                <span key={index} className="block">{line}</span>
                              ))}
                           </p>
                        </div>
                        <div className="pt-2 mt-auto">
                           <span className="text-sm font-medium text-primary hover:underline">Read More →</span>
                        </div>
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