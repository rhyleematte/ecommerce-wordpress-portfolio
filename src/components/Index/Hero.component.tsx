import Image from 'next/image';
import Button from '../UI/Button.component';

/**
 * Renders Hero section for Index page
 * @function Hero
 * @returns {JSX.Element} - Rendered component
 */
const Hero = () => (
  <section className="relative w-full h-[60vh] overflow-hidden">
    <div className="absolute inset-0">
      <Image
        src="/images/hero.jpg"
        alt="Striped Zig Zag pillows in warm colors, arranged on a sofa"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
        quality={90}
      />
      <div className="absolute inset-0 bg-overlay bg-opacity-30" />
    </div>
    
    <div className="relative h-full container mx-auto flex items-center p-4 md:p-0">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
          Striped Zig Zag Pillow Set
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
