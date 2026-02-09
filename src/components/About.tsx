import profile from "@/assets/profile.jpeg";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center bg-gradient-primary bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="bg-card border border-border rounded-lg p-4 sm:p-8 shadow-card backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-1 flex justify-center">
                <img
                  src={profile}
                  alt="Vidyarth Venkateswaran"
                  className="w-40 h-40 md:w-48 md:h-48 rounded-lg object-cover shadow-card"
                />
              </div>
              <div className="md:col-span-2">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                  Currently pursuing a Master’s in Computer Science at New York
                  University, I have a strong foundation in programming
                  languages such as Go, Python, Java, and JavaScript, and
                  project expertise in frameworks like Spring Boot, Gin, React.
                  At Toyota, I engineered scalable B2B SaaS platforms,
                  delivering production-grade features that enhanced operational
                  efficiency and customer satisfaction. I have led AI hackathon
                  projects and contributed to cutting-edge applications
                  involving machine learning and computer vision techniques.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new
                  technologies. I believe in continuous learning and staying at
                  the forefront of current trends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
