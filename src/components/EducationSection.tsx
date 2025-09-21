import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "بكالوريوس التمريض",
      institution: "جامعة القاهرة - كلية التمريض",
      year: "2021 - 2025",
      status: "حالياً",
      gpa: "3.8/4.0",
      achievements: [
        "الحاصل على منحة التفوق الأكاديمي",
        "عضو في الجمعية العلمية للتمريض",
        "مشارك في برنامج التدريب الصيفي",
        "حاصل على شهادة الإسعافات الأولية"
      ]
    }
  ];

  const courses = [
    "أساسيات التمريض",
    "علم التشريح وعلم وظائف الأعضاء",
    "علم الأدوية",
    "تمريض البالغين",
    "تمريض الأطفال",
    "تمريض الصحة النفسية",
    "إدارة التمريض",
    "أخلاقيات المهنة"
  ];

  const certifications = [
    {
      title: "شهادة الإسعافات الأولية",
      issuer: "الهلال الأحمر المصري",
      date: "2023"
    },
    {
      title: "دورة مكافحة العدوى",
      issuer: "وزارة الصحة",
      date: "2023"
    },
    {
      title: "أساسيات الحاسوب الطبي",
      issuer: "معهد التكنولوجيا الطبية",
      date: "2022"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-cairo">
            التعليم والشهادات
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-cairo">
            رحلتي التعليمية في مجال التمريض والرعاية الصحية
          </p>
        </div>

        {/* Main Education */}
        <div className="mb-12">
          {education.map((edu, index) => (
            <Card key={index} className="hero-card p-8 hover-lift">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="text-primary-foreground" size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground font-cairo">{edu.degree}</h3>
                      <p className="text-lg text-primary font-cairo">{edu.institution}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2 lg:mt-0">
                      <Calendar size={16} className="text-muted-foreground" />
                      <span className="text-muted-foreground font-inter">{edu.year}</span>
                      <Badge variant="secondary" className="ml-2 font-cairo">{edu.status}</Badge>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="outline" className="text-accent border-accent font-inter">
                      المعدل: {edu.gpa}
                    </Badge>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {edu.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <Award size={16} className="text-accent flex-shrink-0" />
                        <span className="text-muted-foreground font-cairo">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Courses */}
          <Card className="glass-card p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <BookOpen className="text-primary-foreground" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-cairo">المقررات الدراسية</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {courses.map((course, index) => (
                <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground font-cairo">{course}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications */}
          <Card className="glass-card p-8 hover-lift">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Award className="text-primary-foreground" size={20} />
              </div>
              <h3 className="text-2xl font-bold text-foreground font-cairo">الشهادات والدورات</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div key={index} className="border border-border/50 rounded-lg p-4 hover:border-primary/30 transition-colors duration-200">
                  <h4 className="font-bold text-foreground mb-1 font-cairo">{cert.title}</h4>
                  <p className="text-primary font-cairo">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground font-inter">{cert.date}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;