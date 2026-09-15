import { Hero } from "@/components/sections/hero";
import { Reception } from "@/components/sections/reception";
import { StrengthFloor } from "@/components/sections/strength-floor";
import { WomensHours } from "@/components/sections/womens-hours";
import { TheClub } from "@/components/sections/the-club";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <Reception />
      <StrengthFloor />
      {/* TODO Phase 3b/3c/3d: Equipment (03), Coaching (04), Membership (05) insert here */}
      <WomensHours />
      <TheClub />
    </>
  );
}
