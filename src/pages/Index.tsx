
import { useEffect } from "react";
import { ArrowLeftRight, Eye, EyeOff, CheckSquare, Rocket, Focus, Monitor } from "lucide-react";

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
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary px-4 py-2 rounded-full text-primary-foreground font-medium transition-all hover:scale-105 active:scale-95"
            >
              Install Extension
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            Boost Your Productivity on WhatsApp Web
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Focus on What Matters:<br />A Cleaner WhatsApp Experience
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Minimize distractions and maximize screen space with one click. Perfect for remote workers, 
            productivity enthusiasts, and anyone seeking a more focused chat experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://chrome.google.com/webstore"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary px-6 py-3 rounded-full text-primary-foreground font-medium transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              Add to Chrome - It's Free
            </a>
            <a
              href="#how-it-works"
              className="px-6 py-3 rounded-full border border-border hover:bg-secondary transition-colors w-full sm:w-auto"
            >
              See How It Works
            </a>
          </div>
          <div className="relative w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
              alt="WhatsApp Web with and without sidebar comparison"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose WhatsApp Sidebar Hider?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Feature
              icon={<ArrowLeftRight className="w-6 h-6" />}
              title="Instant Toggle"
              description="Switch between full and focused view with a single click, whenever you need it."
            />
            <Feature
              icon={<CheckSquare className="w-6 h-6" />}
              title="Secure & Private"
              description="No data tracking, no permissions required. Your privacy comes first."
            />
            <Feature
              icon={<Monitor className="w-6 h-6" />}
              title="More Screen Space"
              description="Maximize your viewing area for a better chat experience on any device."
            />
            <Feature
              icon={<Rocket className="w-6 h-6" />}
              title="Zero Performance Impact"
              description="Lightweight implementation ensures WhatsApp Web runs smoothly."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">Simple Setup</span>
            <h2 className="text-3xl font-bold mb-4">Get Started in Seconds</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to enhance your WhatsApp Web experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Step
              number="1"
              title="Install Extension"
              description="Add WhatsApp Sidebar Hider to Chrome with one click - completely free."
            />
            <Step
              number="2"
              title="Open WhatsApp Web"
              description="Navigate to web.whatsapp.com in your Chrome browser as usual."
            />
            <Step
              number="3"
              title="Toggle Sidebar"
              description="Click the extension icon to instantly hide or show the sidebar."
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Trusted by Productivity-Focused Users</h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-primary" />
              <span className="font-medium">100% Free</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-primary" />
              <span className="font-medium">No Ads</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckSquare className="w-5 h-5 text-primary" />
              <span className="font-medium">Regular Updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            WhatsApp Sidebar Hider © {new Date().getFullYear()} - Enhance your WhatsApp Web experience
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </div>
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
