import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, BookOpen, Target } from "lucide-react";

const AboutSection = () => {
  const qualities = [
    "التفكير النقدي",
    "التواصل الفعال", 
    "العمل الجماعي",
    "الدقة والانتباه",
    "التعاطف والرحمة",
    "إدارة الوقت"
  ];

  const interests = [
    { icon: Heart, title: "الرعاية الصحية", desc: "شغوف بتقديم أفضل رعاية للمرضى" },
    { icon: Users, title: "العمل الجماعي", desc: "أؤمن بقوة التعاون في البيئة الطبية" },
    { icon: BookOpen, title: "التعلم المستمر", desc: "أسعى دائماً لتطوير مهاراتي ومعرفتي" },
    { icon: Target, title: "التميز", desc: "ملتزم بتحقيق أعلى معايير الجودة" }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-cairo">
            عن أدهم أحمد
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-cairo">
            تعرف على شخصيتي ورؤيتي في مجال التمريض والرعاية الصحية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Personal Story */}
          <Card className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-cairo">قصتي</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed font-cairo">
              <p>
                منذ صغري وأنا أحلم بأن أكون جزءاً من المجال الطبي. اخترت دراسة التمريض في جامعة القاهرة 
                لأنني أؤمن بأن التمريض هو فن وعلم في آن واحد.
              </p>
              <p>
                أسعى لأن أكون ممرضاً متميزاً يجمع بين المعرفة العلمية والمهارات العملية والتعاطف الإنساني. 
                أؤمن بأن كل مريض يستحق أفضل رعاية ممكنة.
              </p>
              <p>
                أهدف إلى المساهمة في تطوير مجال التمريض في مصر والوطن العربي من خلال التعلم المستمر 
                والممارسة المهنية المتميزة.
              </p>
            </div>
          </Card>

          {/* Skills & Qualities */}
          <Card className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-cairo">المهارات والصفات</h3>
            <div className="grid grid-cols-2 gap-3">
              {qualities.map((quality, index) => (
                <Badge 
                  key={index}
                  variant="secondary" 
                  className="justify-center py-2 text-sm font-cairo hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  {quality}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {interests.map((interest, index) => (
            <Card key={index} className="glass-card p-6 text-center hover-lift group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-glow transition-all duration-300">
                <interest.icon className="text-primary-foreground" size={24} />
              </div>
              <h4 className="font-bold text-foreground mb-2 font-cairo">{interest.title}</h4>
              <p className="text-sm text-muted-foreground font-cairo leading-relaxed">{interest.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;