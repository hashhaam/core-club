import { Hero } from "@/components/sections/hero";
import { Reception } from "@/components/sections/reception";
import { StrengthFloor } from "@/components/sections/strength-floor";
import { Equipment } from "@/components/sections/equipment";
import { Coaching } from "@/components/sections/coaching";
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
      <Coaching />
      {/* TODO Phase 3d: Membership (05) inserts here */}
      <WomensHours />
      <TheClub />
    </>
  );
}
