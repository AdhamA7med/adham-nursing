import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Stethoscope, Heart, Users, Brain, Computer, Languages } from "lucide-react";

const SkillsSection = () => {
  const technicalSkills = [
    { name: "أساسيات التمريض", level: 90 },
    { name: "الإسعافات الأولية", level: 95 },
    { name: "مراقبة العلامات الحيوية", level: 88 },
    { name: "إدارة الأدوية", level: 85 },
    { name: "العناية بالجروح", level: 87 },
    { name: "استخدام الأجهزة الطبية", level: 82 }
  ];

  const softSkills = [
    { name: "التواصل الفعال", level: 92 },
    { name: "العمل الجماعي", level: 94 },
    { name: "إدارة الوقت", level: 89 },
    { name: "حل المشكلات", level: 86 },
    { name: "التفكير النقدي", level: 88 },
    { name: "التعاطف والرحمة", level: 96 }
  ];

  const languages = [
    { name: "العربية", level: "اللغة الأم", flag: "🇪🇬" },
    { name: "الإنجليزية", level: "جيد جداً", flag: "🇺🇸" },
    { name: "الفرنسية", level: "أساسي", flag: "🇫🇷" }
  ];

  const specializations = [
    {
      icon: Heart,
      title: "العناية المركزة",
      description: "خبرة في مراقبة المرضى في حالات حرجة",
      level: "متوسط"
    },
    {
      icon: Users,
      title: "تمريض المجتمع",
      description: "الرعاية الصحية الوقائية والتثقيف الصحي",
      level: "جيد"
    },
    {
      icon: Brain,
      title: "الصحة النفسية",
      description: "دعم المرضى النفسيين والعلاج السلوكي",
      level: "أساسي"
    },
    {
      icon: Computer,
      title: "التكنولوجيا الطبية",
      description: "استخدام أنظمة المعلومات الصحية",
      level: "جيد"
    }
  ];

  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-cairo">
            المهارات والخبرات
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-cairo">
            نظرة شاملة على مهاراتي التقنية والشخصية في مجال التمريض
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Technical Skills */}
          <Card className="glass-card p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Stethoscope className="text-primary-foreground" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-cairo">المهارات التقنية</h3>
            </div>
            
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-cairo font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground font-inter">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>

          {/* Soft Skills */}
          <Card className="glass-card p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="text-primary-foreground" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-cairo">المهارات الشخصية</h3>
            </div>
            
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-cairo font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground font-inter">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Specializations */}
        <Card className="glass-card p-8 mb-8 hover-lift">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Brain className="text-primary-foreground" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-cairo">التخصصات والمجالات</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {specializations.map((spec, index) => (
              <div key={index} className="border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-all duration-200 hover:shadow-soft">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <spec.icon className="text-accent" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-foreground font-cairo">{spec.title}</h4>
                      <Badge variant="outline" className="text-xs font-cairo">{spec.level}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground font-cairo leading-relaxed">{spec.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Languages */}
        <Card className="glass-card p-8 hover-lift">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Languages className="text-primary-foreground" size={20} />
            </div>
            <h3 className="text-2xl font-bold text-foreground font-cairo">اللغات</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="text-center p-4 border border-border/50 rounded-lg hover:border-primary/30 transition-colors duration-200">
                <div className="text-3xl mb-2">{lang.flag}</div>
                <h4 className="font-bold text-foreground mb-1 font-cairo">{lang.name}</h4>
                <p className="text-sm text-muted-foreground font-cairo">{lang.level}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;