const AboutUs = () => {
  return (
    <section className="py-20 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">About us</h2>
        <p className="text-estate-500 mb-12 mx-auto max-w-2xl">
          As Elite Real Estate, we provide elevated property solutions, expert guidance, and exceptional service to discerning clientele.
        </p>
        <div className="aspect-[16/9] overflow-hidden rounded-lg max-w-4xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Modern luxury home"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;