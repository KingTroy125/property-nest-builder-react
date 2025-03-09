import { MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { motion } from "framer-motion";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
}

const PropertyCard = ({ image, title, location, price }: PropertyCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="overflow-hidden group cursor-pointer border-none transition-all duration-300 hover:shadow-2xl">
        <CardContent className="p-0">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <p className="text-2xl font-semibold">{price}</p>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-estate-800 group-hover:text-estate-600 transition-colors">
              {title}
            </h3>
            <div className="flex items-center mt-2 text-estate-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PropertyCard;
