"use client";

import { useEffect } from "react";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container-cc section-cc flex min-h-[60vh] items-center">
      <div>
        <p className="t-eyebrow text-error">ERROR</p>
        <h1 className="t-h2 mt-4">Something went wrong.</h1>
        <p className="t-body mt-4 text-titanium">
          We could not complete your request. Please try again.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button onClick={reset}>TRY AGAIN</Button>
          <Button variant="ghost" href="/">
            BACK TO HOME
          </Button>
        </div>
      </div>
    </div>
  );
}
