import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  summary: string;
  image: string;
  location?: string;
  category: string;
}

const EventCard = ({ id, title, date, summary, image, location, category }: EventCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  };

  return (
    <Link to={`/events/${id}`}>
      <Card className="group overflow-hidden transition-all duration-300 hover:shadow-card-hover h-full">
        <div className="relative h-48 overflow-hidden">
          <img
            src={`/assets/images/${image}`}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(date)}</span>
            </div>
            {location && (
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span className="truncate">{location}</span>
              </div>
            )}
          </div>
          <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-3">{summary}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
