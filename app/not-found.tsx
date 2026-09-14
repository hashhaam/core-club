import type { Metadata } from "next";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="container-cc section-cc flex min-h-[60vh] items-center">
      <div>
        <p className="t-eyebrow text-muted">404</p>
        <h1 className="t-h2 mt-4">Page not found.</h1>
        <p className="t-body mt-4 text-titanium">
          The page you requested does not exist.
        </p>
        <Button href="/" className="mt-8">
          BACK TO HOME
        </Button>
      </div>
    </div>
  );
}
