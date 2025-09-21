import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Stethoscope, Download, Mail, Phone, MapPin, Star, Award, Users } from "lucide-react";
import heroBackground from "@/assets/hero-modern.jpg";

const HeroSection = () => {
  const stats = [
    { icon: Star, value: "3.8", label: "المعدل الأكاديمي" },
    { icon: Award, value: "5+", label: "شهادات متخصصة" },
    { icon: Users, value: "50+", label: "مريض تم التعامل معه" },
  ];

  const highlights = [
    "طالب متميز في كلية التمريض",
    "خبرة عملية في التدريب الميداني",
    "شغوف بتطوير مهاراتي المهنية",
    "ملتزم بأعلى معايير الرعاية"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Advanced Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />
      </div>
      
      {/* Floating Medical Elements */}
      <div className="absolute top-20 right-10 text-primary/20 float animate-pulse">
        <Stethoscope size={60} strokeWidth={1} />
      </div>
      <div className="absolute bottom-32 left-16 text-accent/20 float" style={{ animationDelay: '1s' }}>
        <Heart size={50} strokeWidth={1} />
      </div>
      <div className="absolute top-1/3 left-20 text-primary/15 float" style={{ animationDelay: '2s' }}>
        <Award size={40} strokeWidth={1} />
      </div>
      
      {/* Geometric Patterns */}
      <div className="absolute top-40 right-1/4 w-32 h-32 border border-primary/10 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-24 h-24 border border-accent/10 rounded-lg rotate-45 float"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Content */}
          <div className="text-center lg:text-right space-y-8 fade-in">
            
            {/* Badge */}
            <div className="flex justify-center lg:justify-end">
              <Badge className="bg-accent/10 text-accent border-accent/20 px-4 py-2 text-sm font-cairo">
                🏥 طالب طب تمريض متميز
              </Badge>
            </div>
            
            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground font-cairo leading-tight">
                أدهم<span className="text-transparent bg-gradient-primary bg-clip-text"> أحمد</span>
              </h1>
              <div className="text-2xl lg:text-3xl text-primary font-cairo font-medium">
                طالب في كلية التمريض
              </div>
              <div className="text-lg text-muted-foreground font-cairo">
                جامعة القاهرة • مصر
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed font-cairo">
              طالب طموح ومتحمس في مجال التمريض، أسعى لتقديم أفضل الخدمات الصحية والمساهمة في تطوير 
              <span className="text-primary font-semibold"> القطاع الطبي </span>
              بالشغف والعلم والإنسانية
            </p>
            
            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl mx-auto lg:mx-0">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="font-cairo">{highlight}</span>
                </div>
              ))}
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 font-cairo font-medium text-lg px-8"
              >
                <Download className="ml-2" size={20} />
                تحميل السيرة الذاتية
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 font-cairo font-medium text-lg px-8"
              >
                <Mail className="ml-2" size={20} />
                تواصل معي
              </Button>
            </div>
            
            {/* Quick Contact */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <Mail size={16} className="text-primary" />
                <span className="font-inter">adham.ahmed@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 hover:text-primary transition-colors cursor-pointer">
                <Phone size={16} className="text-primary" />
                <span className="font-inter">01153903786</span>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Card */}
          <div className="flex justify-center lg:justify-start slide-up">
            <Card className="relative p-8 max-w-md w-full bg-card/80 backdrop-blur-lg border border-border/50 hover-lift group">
              
              {/* Profile Avatar */}
              <div className="relative mx-auto w-40 h-40 mb-6">
                <div className="absolute inset-0 bg-gradient-primary rounded-full p-1 group-hover:shadow-glow transition-all duration-500">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary font-cairo">أ.أ</div>
                  </div>
                </div>
                {/* Floating Badge */}
                <div className="absolute -top-2 -right-2">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center border-2 border-card">
                    <Heart size={16} className="text-accent-foreground" />
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200">
                    <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="text-primary-foreground" size={16} />
                    </div>
                    <div className="text-xl font-bold text-foreground font-inter">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-cairo">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              {/* Professional Summary */}
              <div className="text-center space-y-3">
                <h3 className="text-xl font-bold text-foreground font-cairo">نبذة مهنية</h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-cairo">
                  طالب في السنة الرابعة من كلية التمريض، جامعة القاهرة. متخصص في الرعاية الصحية الشاملة مع التركيز على الجودة والتميز المهني.
                </p>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-4 left-4 w-16 h-16 border border-primary/10 rounded-full opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border border-accent/10 rounded-lg opacity-50 rotate-45"></div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
