import { TrustedBy } from "@/devlink/TrustedBy";
import { HeroSection } from "@/devlink/HeroSection";
import { Features } from "@/devlink/Features";
import { Cta } from "@/devlink/Cta";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <Features />
      <Cta />
    </>
  );
}
