import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen, Phone, Mail, MapPin } from "lucide-react";

interface Publication {
  title: string;
  category: string;
  year: number;
  size: string;
  description: string;
  file_url: string;
  authors: string[];
}

interface ResearchStation {
  name: string;
  location: string;
  description: string;
  focus_areas: string[];
  facilities: string[];
  contact: {
    email: string;
    phone: string;
  };
}

const KnowledgeHub = () => {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [researchStations, setResearchStations] = useState<ResearchStation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data/knowledge-hub.json")
      .then((res) => res.json())
      .then((data) => {
        setPublications(data.publications);
        setResearchStations(data.research_stations);
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(data.publications.map((pub: Publication) => pub.category))
        ).sort() as string[];
        setCategories(uniqueCategories);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading knowledge hub data:", err);
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6 animate-fade-in" />
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Knowledge Hub</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95 animate-fade-in">
              Research, publications, and resources for sustainable rural development
            </p>
          </div>
        </section>

        {/* Publications Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Publications & Resources</h2>
              <p className="text-muted-foreground">
                Download our research papers, reports, and training materials to learn more about our work
              </p>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === "all" ? "default" : "outline"}
                  onClick={() => setSelectedCategory("all")}
                  className={`text-sm ${selectedCategory === "all" ? "bg-[#004225] hover:bg-[#004225]/90" : ""}`}
                >
                  All Categories
                </Button>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={`text-sm ${selectedCategory === category ? "bg-[#004225] hover:bg-[#004225]/90" : ""}`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading publications...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">{error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {publications
                  .filter((pub) => selectedCategory === "all" || pub.category === selectedCategory)
                  .map((pub, index) => (
                  <Card key={index} className="hover:shadow-card-hover transition-shadow flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <FileText className="w-8 h-8 text-primary" />
                        <span className="text-xs bg-muted px-2 py-1 rounded">{pub.category}</span>
                      </div>
                      <CardTitle className="text-lg mt-4">{pub.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <div className="flex-grow">
                        <p className="text-sm text-muted-foreground mb-4">{pub.description}</p>
                        <div className="text-sm text-muted-foreground">
                          <p className="mb-2">Authors: {pub.authors.join(", ")}</p>
                          <div className="flex justify-between items-center">
                            <span>{pub.year}</span>
                            <span>{pub.size}</span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 mt-auto">
                        <Button className="w-full" variant="outline" asChild>
                          <a href={pub.file_url} target="_blank" rel="noopener noreferrer">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Research Stations Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Research Stations</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our field research stations conduct cutting-edge research in sustainable agriculture and rural development
              </p>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading research stations...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">{error}</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {researchStations.map((station, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{station.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{station.description}</p>
                      <div className="space-y-4">
                        <p className="text-sm text-muted-foreground flex items-start">
                          <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                          <span><strong>Location:</strong> {station.location}</span>
                        </p>
                        <p className="text-sm text-muted-foreground flex items-start">
                          <BookOpen className="w-4 h-4 mr-2 mt-0.5" />
                          <span><strong>Focus Areas:</strong> {station.focus_areas.join(", ")}</span>
                        </p>
                        {station.contact && (
                          <div className="space-y-2">
                            {station.contact.phone && (
                              <p className="text-sm text-muted-foreground flex items-center">
                                <Phone className="w-4 h-4 mr-2" />
                                {station.contact.phone}
                              </p>
                            )}
                            {station.contact.email && (
                              <p className="text-sm text-muted-foreground flex items-center">
                                <Mail className="w-4 h-4 mr-2" />
                                {station.contact.email}
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeHub;
