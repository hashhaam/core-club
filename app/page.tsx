import { Hero } from "@/components/sections/hero";
import { Reception } from "@/components/sections/reception";
import { StrengthFloor } from "@/components/sections/strength-floor";
import { Equipment } from "@/components/sections/equipment";
import { WomensHours } from "@/components/sections/womens-hours";
import { TheClub } from "@/components/sections/the-club";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <Reception />
      <StrengthFloor />
      <Equipment />
      {/* TODO Phase 3c/3d: Coaching (04), Membership (05) insert here */}
      <WomensHours />
      <TheClub />
    </>
  );
}
