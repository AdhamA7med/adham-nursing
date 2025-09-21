import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "adham.ahmed@example.com",
      link: "mailto:adham.ahmed@example.com"
    },
    {
      icon: Phone,
      title: "رقم الهاتف",
      value: "+20 123 456 789",
      link: "tel:+20123456789"
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "القاهرة، مصر",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-600"
    },
    {
      icon: Facebook,
      name: "Facebook", 
      url: "#",
      color: "hover:text-blue-500"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <section id="contact" className="py-16 px-4 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 slide-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 font-cairo">
            تواصل معي
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-cairo">
            أتطلع للتواصل معك ومناقشة الفرص المتاحة في مجال التمريض
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="glass-card p-8 hover-lift">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-cairo">أرسل رسالة</h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground font-cairo">الاسم</label>
                  <Input placeholder="اسمك الكامل" className="font-cairo" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground font-cairo">البريد الإلكتروني</label>
                  <Input type="email" placeholder="example@email.com" className="font-inter" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground font-cairo">الموضوع</label>
                <Input placeholder="موضوع الرسالة" className="font-cairo" />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground font-cairo">الرسالة</label>
                <Textarea 
                  placeholder="اكتب رسالتك هنا..."
                  className="min-h-[120px] font-cairo"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 font-cairo font-medium"
                size="lg"
              >
                <Send className="ml-2" size={20} />
                إرسال الرسالة
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-cairo">معلومات التواصل</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground font-cairo">{info.title}</h4>
                      <a 
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 font-inter"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Media */}
            <Card className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold text-foreground mb-6 font-cairo">تابعني على</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                    title={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </Card>

            {/* Call to Action */}
            <Card className="glass-card p-8 hover-lift bg-gradient-card">
              <div className="text-center">
                <h3 className="text-xl font-bold text-foreground mb-4 font-cairo">
                  هل تبحث عن ممرض متميز؟
                </h3>
                <p className="text-muted-foreground mb-6 font-cairo leading-relaxed">
                  أنا مستعد للانضمام إلى فريقك والمساهمة في تقديم أفضل خدمات الرعاية الصحية
                </p>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground hover:shadow-glow transition-all duration-300 font-cairo font-medium"
                >
                  <Phone className="ml-2" size={20} />
                  اتصل بي الآن
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;