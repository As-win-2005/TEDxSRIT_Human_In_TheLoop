// About Page - Empty file for manual integration
// You can add your About page content here

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Add your About page content here */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About TEDxSRIT
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            This page is ready for your custom content. 
            You can integrate your existing About page TSX content here.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
