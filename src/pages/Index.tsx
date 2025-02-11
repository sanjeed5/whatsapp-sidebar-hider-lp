
import { useEffect } from "react";
import { ArrowLeftRight, Eye, EyeOff, CheckSquare, Rocket } from "lucide-react";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-lg z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-semibold text-xl">WhatsApp Sidebar Hider</div>
          <a
            href="https://chrome.google.com/webstore"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary px-4 py-2 rounded-full text-primary-foreground font-medium transition-all hover:scale-105 active:scale-95"
          >
            Install Extension
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Enhance Your WhatsApp Web Experience
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            A Cleaner WhatsApp Interface
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Hide the WhatsApp Web sidebar with a single click for a more focused chat experience and better screen space utilization.
          </p>
          <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt="WhatsApp Sidebar Hider Demo"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature
              icon={<ArrowLeftRight className="w-6 h-6" />}
              title="One-Click Toggle"
              description="Instantly hide or show the sidebar with a single click, whenever you need it."
            />
            <Feature
              icon={<CheckSquare className="w-6 h-6" />}
              title="Persistent Settings"
              description="Your preference is saved and remembered across sessions."
            />
            <Feature
              icon={<Eye className="w-6 h-6" />}
              title="Clean Design"
              description="Seamlessly integrates with WhatsApp Web's existing interface."
            />
            <Feature
              icon={<Rocket className="w-6 h-6" />}
              title="Lightning Fast"
              description="Lightweight implementation ensures optimal performance."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Getting started with WhatsApp Sidebar Hider is simple and straightforward.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Step
              number="1"
              title="Install Extension"
              description="Add WhatsApp Sidebar Hider to Chrome from the Web Store."
            />
            <Step
              number="2"
              title="Open WhatsApp Web"
              description="Navigate to web.whatsapp.com in your Chrome browser."
            />
            <Step
              number="3"
              title="Toggle Sidebar"
              description="Click the extension icon to hide or show the sidebar."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>WhatsApp Sidebar Hider © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

const Feature = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="animate-on-scroll opacity-0 p-6 rounded-xl bg-background border transition-all hover:shadow-lg">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Step = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="animate-on-scroll opacity-0 text-center">
    <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl flex items-center justify-center mx-auto mb-4">
      {number}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

export default Index;
