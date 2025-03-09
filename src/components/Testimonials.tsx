import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Elite Real Estate exceeded all our expectations, delivering exceptional service and phenomenal results. Their expertise and attention to detail made our home buying experience truly remarkable.",
    },
    {
      name: "Michael Chen",
      role: "Property Investor",
      text: "Working with Elite Real Estate has been transformative for our investment portfolio. Their market insights and professional guidance have been invaluable.",
    },
  ];

  return (
    <section className="py-20 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">Testimonials</h2>
        <Carousel className="max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-6">
                  <blockquote className="text-xl text-estate-600 mb-6">
                    "{testimonial.text}"
                  </blockquote>
                  <div className="flex items-center justify-center space-x-4">
                    <div>
                      <div className="font-semibold text-estate-800">{testimonial.name}</div>
                      <div className="text-estate-500">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;