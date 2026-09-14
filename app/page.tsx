import { Hero } from "@/components/sections/hero";
import { Reception } from "@/components/sections/reception";
import { StrengthFloor } from "@/components/sections/strength-floor";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <Hero />
      <Reception />
      <StrengthFloor />
    </>
  );
}
