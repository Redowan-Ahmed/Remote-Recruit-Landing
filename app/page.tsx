import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import CallTOAction from "@/components/sections/CallToAction";
import Faqs from "@/components/sections/Faqs";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <div className="container mx-auto mt-24 space-y-24">
        <Feature
          badge="Global Reach"
          title="The First Fully Global Job Board, Anywhere, Ever"
          desc="RemoteRecruit connects candidates with opportunities around the world. With today’s remote-first workforce, you need to be able to find the best jobs and the best people for them, wherever they may be."
          image="/images/global-reach.png"
        />
        <Feature
          flip={true}
          badge="Actually Fee Free"
          title="Fee-Free Forever"
          desc="We don’t charge you fees and we don’t put up paywalls. We’re the bridge that connects job opportunities with the best candidates, with no middleman involved."
          image="/images/actually-fee-free.png"
        />
        <Feature
          badge="Custom Profile"
          title="Showcase Your Talents"
          desc="Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates."
          image="/images/custom-profile.png"
        />
      </div>

      <CallTOAction/>
      <Faqs/>
      <Footer />
      <ScrollToTop />
    </>
  );
}
