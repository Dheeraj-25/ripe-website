import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Document {
  title: string;
  category: string;
  year: number;
  file_size: string;
  file_url: string;
  description: string;
}

const Documents = () => {
  const [documents, setDocuments] = useState<Document[]>([]);
  const [filteredDocuments, setFilteredDocuments] = useState<Document[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");
  const [uniqueYears, setUniqueYears] = useState<number[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("/data/documents.json")
      .then((res) => res.json())
      .then((data) => {
        // Flatten all document categories into a single array
        const allDocs = [
          ...data.annual_reports,
          ...data.financial_documents,
          ...data.legal_compliance,
          ...data.impact_reports,
          ...data.policies,
          ...data.newsletters,
          ...data.internal_documents,
        ];
        setDocuments(allDocs);
        setFilteredDocuments(allDocs);

        // Get unique years and categories
        const years = [...new Set(allDocs.map((doc: Document) => doc.year))];
        const categories = [...new Set(allDocs.map((doc: Document) => doc.category))];
        setUniqueYears(years.sort((a, b) => b - a));
        setUniqueCategories(categories.sort());
      })
      .catch((error) => console.error("Error loading documents:", error));
  }, []);

  useEffect(() => {
    let filtered = [...documents];

    if (categoryFilter !== "all") {
      filtered = filtered.filter((doc) => doc.category === categoryFilter);
    }

    if (yearFilter !== "all") {
      filtered = filtered.filter((doc) => doc.year === parseInt(yearFilter));
    }

    setFilteredDocuments(filtered);
  }, [categoryFilter, yearFilter, documents]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <FileText className="w-16 h-16 mx-auto mb-6 animate-fade-in" />
            <h1 className="text-5xl font-bold mb-6 animate-fade-in">Documents & Reports</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-95 animate-fade-in">
              Access our organizational documents, reports, and compliance records
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-9 bg-muted">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-lg">
                <Filter className="w-5 h-5 text-muted-foreground" />
                <span className="w-100 h-100 text-muted-foreground">Filter by:</span>
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Categories</SelectLabel>
                    <SelectItem value="all">All Categories</SelectItem>
                    {uniqueCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Select value={yearFilter} onValueChange={setYearFilter}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Select Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Years</SelectLabel>
                    <SelectItem value="all">All Years</SelectItem>
                    {uniqueYears.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Documents Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc, index) => (
                <Card key={index} className="hover:shadow-card-hover transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <FileText className="w-8 h-8 text-primary" />
                      <span className="text-xs bg-muted px-2 py-1 rounded">{doc.category}</span>
                    </div>
                    <CardTitle className="text-lg mt-4">{doc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <span>{doc.year}</span>
                      <span>{doc.file_size}</span>
                    </div>
                    <Button className="w-full" variant="outline" asChild>
                      <a href={doc.file_url} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredDocuments.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No documents found matching your filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;