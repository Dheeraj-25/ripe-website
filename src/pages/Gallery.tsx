import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface GalleryImage {
  id: string;
  caption: string;
  src: string;
  category: string;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    fetch("/data/gallery.json")
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error loading gallery:", err));
  }, []);

  const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];
  const filteredImages = filter === "All" ? images : images.filter((img) => img.category === filter);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Media Gallery</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95 animate-fade-in">
              Visual stories of transformation and impact from our programmes across India
            </p>
          </div>
        </section>

        {/* Filter */}
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

        {/* Gallery Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image, index) => (
                <div
                  key={image.id}
                  className="group relative aspect-video overflow-hidden rounded-lg cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={`/assets/images/${image.src}`}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-primary-foreground p-4 text-sm">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl">
          {selectedImage && (
            <div className="relative">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-card p-2 rounded-full hover:bg-muted transition-colors z-10"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={`/assets/images/${selectedImage.src}`}
                alt={selectedImage.caption}
                className="w-full h-auto rounded-lg"
              />
              <div className="mt-4">
                <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium mb-2">
                  {selectedImage.category}
                </span>
                <p className="text-foreground">{selectedImage.caption}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Gallery;
