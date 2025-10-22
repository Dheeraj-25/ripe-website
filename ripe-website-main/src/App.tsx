import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Programmes from "./pages/Programmes";
import ProgrammeDetail from "./pages/ProgrammeDetail";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import KnowledgeHub from "./pages/KnowledgeHub";
import Partners from "./pages/Partners";
import WhoWeAre from "./pages/WhoWeAre";
import Governance from "./pages/Governance";
import NotFound from "./pages/NotFound";
import Documents from "./pages/Documents";
// import WhatWeDo from "./pages/whatwedo";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/programmes/:id" element={<ProgrammeDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/knowledge-hub" element={<KnowledgeHub />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/documents" element={<Documents />} />
          {/* <Route path="/programmes" element={<WhatWeDo />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
