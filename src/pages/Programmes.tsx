import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgrammeCard from "@/components/ProgrammeCard";
import { Button } from "@/components/ui/button";

interface Programme {
  id: string;
  title: string;
  category: string;
  short_desc: string;
  image: string;
  read_more_url: string;
}

const Programmes = () => {
  const [programmes, setProgrammes] = useState<Programme[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data/programmes.json")
      .then((res) => res.json())
      .then((data: Programme[]) => {
        // Remove duplicates based on id
        const uniqueProgrammes = data.filter((programme, index, self) => 
          index === self.findIndex(p => p.id === programme.id)
        );
        setProgrammes(uniqueProgrammes);
        
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(uniqueProgrammes.map((programme: Programme) => programme.category))
        ).filter((cat): cat is string => Boolean(cat && cat.trim())).sort();
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error("Error loading programmes:", err));
  }, []);

  const filteredProgrammes = programmes.filter((programme) => 
    selectedCategory === "all" || programme.category === selectedCategory
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Our Programmes</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95 animate-fade-in">
              Comprehensive initiatives driving sustainable development and community empowerment
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 bg-muted border-b">
          <div className="container mx-auto px-4">
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
          </div>
        </section>

        {/* Programmes Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProgrammes.map((programme, index) => (
                <div
                  key={programme.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ProgrammeCard {...programme} />
                </div>
              ))}
            </div>
            {filteredProgrammes.length === 0 && (
              <p className="text-center text-muted-foreground text-lg py-12">
                No programmes found in this category.
              </p>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Programmes;
