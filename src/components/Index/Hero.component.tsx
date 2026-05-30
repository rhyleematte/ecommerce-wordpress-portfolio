import Button from '../UI/Button.component';

/**
 * Renders Hero section for Index page with video background
 * @function Hero
 * @returns {JSX.Element} - Rendered component
 */
const Hero = () => (
  <section className="relative w-full h-[60vh] overflow-hidden">
    <div className="absolute inset-0">
      <video
        src="/video/8160069-uhd_4096_2160_25fps.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-overlay bg-opacity-30" />
    </div>

    <div className="relative h-full container mx-auto flex items-center p-4 md:p-0">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
          New Men's Collection
        </h1>
        <Button 
          href="/products"
          variant="hero"
        >
          Shop Now
        </Button>
      </div>
    </div>
  </section>
);

export default Hero;
