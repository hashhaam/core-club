import { Button } from "@/components/ui/button";
import { hours } from "@/content/hours";

function formatTime(time: string): string {
  const [hour, minutes] = time.split(":");
  const numericHour = Number(hour);
  const clockHour = numericHour % 12 || 12;
  const minuteLabel = minutes === "00" ? "" : `:${minutes}`;
  return `${clockHour}${minuteLabel} ${numericHour < 12 ? "AM" : "PM"}`;
}

export function WomensHours() {
  // TODO: replace with real photography of the women's training area once available.
  return (
    <section id="womens-hours" className="section-cc bg-surface-1">
      <div className="container-cc grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="t-eyebrow text-muted">06 / WOMEN&apos;S HOURS</p>
          <h2 className="t-h2 headline-solid mt-6">Women&apos;s Hours</h2>
          <p className="t-body mt-6 max-w-[52ch] text-titanium">
            [PLACEHOLDER] Details on dedicated staffing and arrangements pending —
            final wording to come from the content pass.
          </p>

          {hours.verified && (
            <ul className="mt-8">
              {hours.dailySegments.map((segment) => (
                <li
                  key={segment.start}
                  className="flex items-baseline justify-between gap-4 border-b border-hairline py-3"
                >
                  <span className="t-body text-core-white">{segment.label}</span>
                  <span className="t-tabular whitespace-nowrap text-titanium">
                    {formatTime(segment.start)} – {formatTime(segment.end)}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <Button variant="primary" href="/womens-hours" className="mt-8">
            VIEW FULL DETAILS
          </Button>
        </div>

        <div
          aria-hidden="true"
          className="relative aspect-[4/5] overflow-hidden rounded-cc-lg bg-surface-2"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, rgba(185,190,198,0.04) 0px, rgba(185,190,198,0.04) 1px, transparent 1px, transparent 12px)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to top, #1A1C21 20%, transparent 60%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
