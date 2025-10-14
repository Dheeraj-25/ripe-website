import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Who We Are</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95 animate-fade-in">
              Leading sustainable rural development in India for over three decades
            </p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div id="about" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">About Us</h2>
                <div className="prose prose-lg max-w-none text-foreground">
                  <p className="mb-4">
                    We are a pioneering organization dedicated to transforming rural India through integrated development
                    approaches. Since our inception, we have worked tirelessly to improve the lives of millions of families
                    across multiple states, focusing on sustainable livelihoods, climate action, and community empowerment.
                  </p>
                  <p className="mb-4">
                    Our holistic approach combines scientific research, grassroots implementation, and policy advocacy to
                    create lasting change in rural communities. We believe in empowering communities with knowledge, resources,
                    and support to build their own sustainable futures.
                  </p>
                  <p>
                    Through partnerships with government agencies, international organizations, and local communities, we
                    implement programmes that address the interconnected challenges of agriculture, climate change, water
                    scarcity, and rural poverty.
                  </p>
                </div>
              </div>

              {/* Mission, Vision, Values */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <Card className="text-center">
                  <CardContent className="pt-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To enhance rural livelihoods through sustainable agriculture, natural resource management, and community development
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Eye className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                    <p className="text-muted-foreground">
                      A thriving rural India where communities are self-reliant, resilient, and living in harmony with nature
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardContent className="pt-8">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                    <p className="text-muted-foreground">
                      Sustainability, community participation, scientific innovation, and social equity guide all our actions
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* History */}
              <div id="history" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-foreground">Our History</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2">1990s - Foundation</h3>
                    <p className="text-muted-foreground">
                      Established with a vision to improve livestock breeding and rural livelihoods through scientific approaches
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2">2000s - Expansion</h3>
                    <p className="text-muted-foreground">
                      Extended programmes to watershed development, organic farming, and women's empowerment across multiple states
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2">2010s - Climate Focus</h3>
                    <p className="text-muted-foreground">
                      Pioneered climate adaptation strategies and biodiversity conservation programmes for smallholder farmers
                    </p>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-semibold mb-2">2020s - Scale & Impact</h3>
                    <p className="text-muted-foreground">
                      Reached over 2.5 million families across 15 states with integrated rural development programmes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhoWeAre;
