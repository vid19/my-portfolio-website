import { Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vv2466@nyu.edu",
    href: "mailto:your.vv2466@nyu.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (646) 209-2569 ",
    href: "tel:+16462092569",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Brooklyn, NY",
    href: "https://www.google.com/maps?q=Brooklyn,NY",
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 md:mb-12 text-center bg-gradient-primary bg-clip-text text-transparent">
          Spill the Tea (About Your Project!)
        </h2>
        <p className="text-center text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto px-2">
          I’m always excited to discuss new projects, share creative ideas and
          explore opportunities to bring your vision to life.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {contactInfo.map((info, index) => (
            <a key={index} href={info.href} className="block group">
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow hover:scale-105 h-full">
                <CardContent className="pt-6 pb-6 text-center">
                  <div className="mb-3 sm:mb-4 inline-block p-2.5 sm:p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform">
                    <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">
                    {info.label}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground group-hover:text-primary transition-colors break-words px-2">
                    {info.value}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
