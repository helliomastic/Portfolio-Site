
import { AnimatedElement, StaggerChild, StaggeredContainer } from "../motion/AnimatedElement";
import { Button } from "../ui/button";
import { Download } from "lucide-react";

const AboutSection = () => {
  const handleDownloadCV = () => {
    console.log('Downloading CV...');
  };

  return (
    <section id="about" className="section-container py-12 sm:py-14 md:py-16 lg:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 lg:gap-20 items-center">
        <AnimatedElement direction="left" className="relative">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl shadow-portfolio-purple/20 border border-white/10 aspect-square max-w-xs sm:max-w-md md:max-w-full mx-auto">
            <img
              src="/lovable-uploads/05e8e318-39fa-4b62-8dc9-6a5eb38f0cfa.png"
              alt="Profile"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="absolute inset-0 bg-portfolio-purple/20 rounded-lg transform translate-x-2 sm:translate-x-4 translate-y-2 sm:translate-y-4 -z-10"></div>
        </AnimatedElement>

        <div>
          <AnimatedElement>
            <h2 className="section-title mb-4 sm:mb-6 text-center md:text-left">About Me</h2>
          </AnimatedElement>
          <StaggeredContainer className="space-y-4 sm:space-y-5 md:space-y-6 px-2 xs:px-0">
            <StaggerChild>
              <p className="text-white/80 text-sm sm:text-base md:text-lg">
                Hey there! I'm a creative professional who loves turning ideas into reality. 
                Passionate about design, technology, and creating meaningful experiences.
              </p>
            </StaggerChild>
            <StaggerChild>
              <p className="text-white/80 text-sm sm:text-base md:text-lg">
                With a background in web development and UI/UX design, I specialize in crafting 
                intuitive and visually appealing digital solutions that solve real-world problems.
              </p>
            </StaggerChild>
            <StaggerChild>
              <p className="text-white/80 text-sm sm:text-base md:text-lg">
                When I'm not coding or designing, you'll find me exploring new technologies, 
                enjoying outdoor adventures, and always learning something new.
              </p>
            </StaggerChild>
            <StaggerChild>
              <div className="pt-2 sm:pt-3 md:pt-4 flex justify-center md:justify-start">
                <Button 
                  className="bg-portfolio-purple hover:bg-portfolio-purple/90 px-5 sm:px-7 py-2 sm:py-3 w-full sm:w-auto text-sm sm:text-base"
                  onClick={handleDownloadCV}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </Button>
              </div>
            </StaggerChild>
          </StaggeredContainer>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
