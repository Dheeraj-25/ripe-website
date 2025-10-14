import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, BookOpen } from "lucide-react";

const KnowledgeHub = () => {
  const publications = [
    {
      title: "Sustainable Livestock Management: A Comprehensive Guide",
      category: "Research Paper",
      year: 2024,
      size: "2.5 MB",
    },
    {
      title: "Climate-Resilient Agriculture Practices",
      category: "Training Manual",
      year: 2024,
      size: "1.8 MB",
    },
    {
      title: "Annual Impact Report 2023",
      category: "Report",
      year: 2023,
      size: "5.2 MB",
    },
    {
      title: "Water Conservation Techniques for Smallholder Farmers",
      category: "Guide",
      year: 2023,
      size: "1.5 MB",
    },
    {
      title: "Women's Empowerment through Self-Help Groups",
      category: "Case Study",
      year: 2023,
      size: "980 KB",
    },
    {
      title: "Biodiversity Conservation in Agriculture",
      category: "Research Paper",
      year: 2022,
      size: "3.1 MB",
    },
  ];

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
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">Publications & Resources</h2>
              <p className="text-muted-foreground">
                Download our research papers, reports, and training materials to learn more about our work
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publications.map((pub, index) => (
                <Card key={index} className="hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <FileText className="w-8 h-8 text-primary" />
                      <span className="text-xs bg-muted px-2 py-1 rounded">{pub.category}</span>
                    </div>
                    <CardTitle className="text-lg mt-4">{pub.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <span>{pub.year}</span>
                      <span>{pub.size}</span>
                    </div>
                    <Button className="w-full" variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Central Research Station</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Leading research in livestock breeding, climate adaptation, and integrated farming systems
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Location:</strong> Maharashtra<br />
                    <strong>Focus Areas:</strong> Livestock, Water Management, Organic Farming
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Regional Research Center</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Specialized research on dryland agriculture and biodiversity conservation
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Location:</strong> Karnataka<br />
                    <strong>Focus Areas:</strong> Dryland Farming, Seed Conservation, Agroforestry
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeHub;
