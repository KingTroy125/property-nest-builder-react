
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
      title: "Luminous Villa",
      location: "Beverly Hills, CA",
      price: "$8,900,000",
    },
    {
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
      title: "Modern Oasis",
      location: "Miami Beach, FL",
      price: "$5,750,000",
    },
    {
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde",
      title: "Sky Penthouse",
      location: "Manhattan, NY",
      price: "$12,500,000",
    },
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      title: "Coastal Estate",
      location: "Malibu, CA",
      price: "$15,900,000",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {properties.map((property, index) => (
        <div key={index} className="animate-fade-up" style={{ animationDelay: `${index * 200}ms` }}>
          <PropertyCard {...property} />
        </div>
      ))}
    </div>
  );
};

export default PropertyGrid;
