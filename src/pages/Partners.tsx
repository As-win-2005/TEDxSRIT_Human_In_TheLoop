import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import Button from '@/components/Button';
import { Link } from 'react-router-dom';

const partners = [
  { name: 'TechCorp India', logo: 'https://via.placeholder.com/200x80?text=TechCorp', tier: 'platinum' },
  { name: 'InnovateLabs', logo: 'https://via.placeholder.com/200x80?text=InnovateLabs', tier: 'platinum' },
  { name: 'FutureWorks', logo: 'https://via.placeholder.com/200x80?text=FutureWorks', tier: 'gold' },
  { name: 'CloudSync', logo: 'https://via.placeholder.com/200x80?text=CloudSync', tier: 'gold' },
  { name: 'DataDrive', logo: 'https://via.placeholder.com/200x80?text=DataDrive', tier: 'gold' },
  { name: 'SmartSolutions', logo: 'https://via.placeholder.com/200x80?text=SmartSolutions', tier: 'silver' },
  { name: 'DigitalFirst', logo: 'https://via.placeholder.com/200x80?text=DigitalFirst', tier: 'silver' },
  { name: 'NextGen Tech', logo: 'https://via.placeholder.com/200x80?text=NextGen', tier: 'silver' },
  { name: 'AI Ventures', logo: 'https://via.placeholder.com/200x80?text=AI+Ventures', tier: 'silver' },
  { name: 'StartUp Hub', logo: 'https://via.placeholder.com/200x80?text=StartUp+Hub', tier: 'bronze' },
  { name: 'Code Academy', logo: 'https://via.placeholder.com/200x80?text=Code+Academy', tier: 'bronze' },
  { name: 'Design Studio', logo: 'https://via.placeholder.com/200x80?text=Design+Studio', tier: 'bronze' },
];

const Partners = () => {
  const platinumPartners = partners.filter(p => p.tier === 'platinum');
  const goldPartners = partners.filter(p => p.tier === 'gold');
  const silverPartners = partners.filter(p => p.tier === 'silver');
  const bronzePartners = partners.filter(p => p.tier === 'bronze');

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 text-center relative overflow-hidden">
        {/* Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] opacity-20 blur-[100px]"
          style={{
            background: 'radial-gradient(circle at center, hsla(348, 100%, 45%, 0.5), transparent 60%)',
          }}
        />
        
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 relative animate-fade-in">
          Our Partners
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto relative animate-slide-up">
          TEDxSRIT events cannot happen without our dedicated partners. 
          Their support helps us bring ideas worth spreading to our community.
        </p>
      </section>

      {/* Platinum Partners */}
      {platinumPartners.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-primary text-center mb-12 uppercase tracking-widest">
              Platinum Partners
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-12">
              {platinumPartners.map((partner) => (
                <div 
                  key={partner.name}
                  className="glass-card p-8 hover:border-primary/50 transition-all duration-300 grayscale hover:grayscale-0"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-16 md:h-20 object-contain opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gold Partners */}
      {goldPartners.length > 0 && (
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <h2 className="text-xl font-bold text-foreground/80 text-center mb-12 uppercase tracking-widest">
              Gold Partners
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {goldPartners.map((partner) => (
                <div 
                  key={partner.name}
                  className="glass-card p-6 hover:border-primary/50 transition-all duration-300 grayscale hover:grayscale-0"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-12 md:h-16 object-contain opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Silver Partners */}
      {silverPartners.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-lg font-bold text-foreground/60 text-center mb-12 uppercase tracking-widest">
              Silver Partners
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {silverPartners.map((partner) => (
                <div 
                  key={partner.name}
                  className="glass-card p-4 hover:border-primary/50 transition-all duration-300 grayscale hover:grayscale-0"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bronze Partners */}
      {bronzePartners.length > 0 && (
        <section className="py-16 px-4 bg-secondary/20">
          <div className="container mx-auto">
            <h2 className="text-base font-bold text-foreground/50 text-center mb-12 uppercase tracking-widest">
              Bronze Partners
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {bronzePartners.map((partner) => (
                <div 
                  key={partner.name}
                  className="glass-card p-3 hover:border-primary/50 transition-all duration-300 grayscale hover:grayscale-0"
                >
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="h-8 md:h-10 object-contain opacity-50 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 px-4 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Partner With Us
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Sponsorship is a great way to get visibility for your product or service 
            in our community. Join us in spreading ideas that matter.
          </p>
          <Link to="/contact">
            <Button variant="primary" size="lg">
              Partner with Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
