import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="px-4 py-3">
      <Header />
      <Hero />
      <Features />
    </div>
  );
}
