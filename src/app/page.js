import { BundleApple } from "@/components/BundleApple";
import { Faq } from "@/components/Faq";
import { LastRow } from "@/components/LastRow";
import MovieCarousel from "@/components/MovieCarousle";
import { ParallexBackground } from "@/components/ParallexBackground";
import { StudentPlan } from "@/components/StudentPlan";
import { WatchAnywhere } from "@/components/WatchAnywhere";
import { Footer } from "@/components/layouts/Footer";
import { Header } from "@/components/layouts/Header";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <ParallexBackground />
      <MovieCarousel />
      <WatchAnywhere />
      <Faq />
      <BundleApple />
      <StudentPlan />
      <LastRow />
      <Footer />
    </main>
  );
}
