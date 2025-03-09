
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <nav className="absolute w-full z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-display text-white animate-fade-up">Luxe Haven</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-white hover:text-white/80 transition-colors animate-fade-up" style={{ animationDelay: '100ms' }}>Properties</a>
            <a href="#about" className="text-white hover:text-white/80 transition-colors animate-fade-up" style={{ animationDelay: '200ms' }}>About</a>
            <a href="#testimonials" className="text-white hover:text-white/80 transition-colors animate-fade-up" style={{ animationDelay: '300ms' }}>Testimonials</a>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors animate-fade-up" style={{ animationDelay: '400ms' }}>Contact</a>
            <Button variant="outline" className="text-black border-white bg-white hover:bg-white/90 animate-fade-up" style={{ animationDelay: '500ms' }}>
              Get Started
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#properties" className="text-lg">Properties</a>
                  <a href="#about" className="text-lg">About</a>
                  <a href="#testimonials" className="text-lg">Testimonials</a>
                  <a href="#contact" className="text-lg">Contact</a>
                  <Button className="w-full text-black bg-white hover:bg-white/90">Get Started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
