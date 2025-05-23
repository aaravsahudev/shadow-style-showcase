
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="animate-fade-in-left">
              <h2 className="text-5xl md:text-6xl font-bold tracking-wider mb-6">
                <span className="text-black">ABOUT</span>
                <span className="text-gray-400"> ME</span>
              </h2>
              <div className="w-24 h-1 bg-black mb-8"></div>
            </div>

            <div className="space-y-6 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 8 years of experience in the beauty industry, I specialize in creating stunning makeup looks that enhance natural beauty while expressing individual style.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                My passion for makeup artistry began in fashion school, where I discovered the transformative power of cosmetics. Since then, I've worked with celebrities, fashion magazines, and countless clients to create memorable looks.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                I believe that makeup is not just about covering imperfections, but about celebrating what makes each person unique and beautiful.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 animate-fade-in-left" style={{ animationDelay: '0.6s' }}>
              <div>
                <h3 className="text-3xl font-bold text-black mb-2">500+</h3>
                <p className="text-gray-600 font-medium">Happy Clients</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-black mb-2">8+</h3>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in-right">
            <div className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 rounded-none relative overflow-hidden hover-lift">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium tracking-wide">PROFESSIONAL MAKEUP ARTIST</p>
              </div>
            </div>
            
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-black -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
