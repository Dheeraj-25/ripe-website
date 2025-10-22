import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProgrammeCardProps {
  id: string;
  title: string;
  category: string;
  short_desc: string;
  image: string;
  read_more_url: string;
}

const ProgrammeCard = ({ id, title, category, short_desc, image, read_more_url }: ProgrammeCardProps) => {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover">
      <div className="relative h-56 overflow-hidden">
        <img
          src={`/assets/images/${image}`}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {category}
          </span>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{short_desc}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6">
        <Link
          to={read_more_url}
          className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProgrammeCard;
