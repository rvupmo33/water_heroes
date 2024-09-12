import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="px-4 pt-3">
      <Header />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
