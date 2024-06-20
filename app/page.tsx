import Cta from '@/components/cta';
import FAQ from '@/components/faq';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Features from '@/components/features';
import Hero from '@/components/hero';
import About from '@/components/about';
import AnimatedNavbar from '@/components/animated-navbar';

export default function Home() {
  return (
    <>
      <AnimatedNavbar>
        <Navbar />
      </AnimatedNavbar>
      <main>
        <Hero />
        <Features />
        <About />
        <Cta />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
