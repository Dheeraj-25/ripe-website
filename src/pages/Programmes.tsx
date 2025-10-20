import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgrammeCard from "@/components/ProgrammeCard";

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
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    fetch("/data/programmes.json")
      .then((res) => res.json())
      .then((data) => setProgrammes(data))
      .catch((err) => console.error("Error loading programmes:", err));
  }, []);



  // Dynamically generate unique categories from programmes data
  const categories = [
    "All",
    ...Array.from(
      new Set(
        programmes
          .map((p) => p.category && p.category.trim())
          .filter((cat) => !!cat)
      )
    ),
  ];

  const filteredProgrammes =
    filter === "All"
      ? programmes
      : programmes.filter(
          (p) =>
            p.category &&
            p.category.trim().toLowerCase() === filter.trim().toLowerCase()
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
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    filter === category
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-card text-foreground hover:bg-primary/10"
                  }`}
                >
                  {category}
                </button>
              ))}
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
