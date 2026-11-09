import Header from "@/components/Header";
import Splash from "@/components/Splash";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Included from "@/components/Included";
import PerfectFor from "@/components/PerfectFor";
import Fleet from "@/components/Fleet";
import Comparison from "@/components/Comparison";
import HowItWorks from "@/components/HowItWorks";
import Faq from "@/components/Faq";
import CtaBanner from "@/components/CtaBanner";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Splash />
      <Header />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Why />
        <Included />
        <PerfectFor />
        <Comparison />
        <Fleet />
        <HowItWorks />
        <Faq />
        <CtaBanner />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
