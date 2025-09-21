import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Stethoscope, Download, Mail, Phone, MapPin } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Floating Medical Icons */}
      <div className="absolute top-20 left-10 text-primary/20 float">
        <Stethoscope size={48} />
      </div>
      <div className="absolute bottom-32 right-16 text-accent/20 float" style={{ animationDelay: '1s' }}>
        <Heart size={40} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <Card className="hero-card p-8 lg:p-12 fade-in hover-lift">
          <div className="space-y-8">
            {/* Avatar/Profile */}
            <div className="relative mx-auto w-32 h-32 rounded-full bg-gradient-primary p-1 hover-glow">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <div className="text-4xl font-bold text-primary">أ.أ</div>
              </div>
            </div>
            
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground font-cairo">
                أدهم أحمد
              </h1>
              <div className="text-xl lg:text-2xl text-primary font-inter font-medium">
                طالب في كلية التمريض
              </div>
              <div className="text-lg text-muted-foreground font-cairo">
                جامعة القاهرة
              </div>
            </div>
            
            {/* Brief Description */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-cairo">
              طالب طموح ومتحمس في مجال التمريض، أسعى لتقديم أفضل الخدمات الصحية والمساهمة في تطوير القطاع الطبي
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>adham.ahmed@example.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+20 123 456 789</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>القاهرة، مصر</span>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 font-cairo font-medium"
              >
                <Download className="ml-2" size={20} />
                تحميل السيرة الذاتية
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-cairo font-medium"
              >
                <Mail className="ml-2" size={20} />
                تواصل معي
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default HeroSection;