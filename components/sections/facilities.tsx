import { Reveal } from "@/components/motion/reveal";
import { amenities, type Amenity } from "@/content/amenities";

function FacilityItem({
  item,
  compact = false,
  spacious = false,
  wide = false,
}: {
  item: Amenity;
  compact?: boolean;
  spacious?: boolean;
  wide?: boolean;
}) {
  return (
    <li className={spacious ? "flex min-w-0 flex-1 items-center border-b border-hairline py-5" : wide ? "min-w-0 sm:col-span-2" : compact ? "min-w-0" : "min-w-0 py-4"}>
      <p className={spacious ? "text-lg font-semibold text-core-white" : "t-small font-semibold text-core-white"}>{item.name}</p>
      {item.description && (
        <p className="t-small mt-1 text-titanium">{item.description}</p>
      )}
    </li>
  );
}

export function Facilities() {
  if (!amenities.verified || amenities.groups.length === 0) return null;

  return (
    <section id="facilities" aria-labelledby="facilities-heading" className="mt-20 scroll-mt-24 border-t border-hairline pt-16 lg:mt-24 lg:pt-20">
      <Reveal>
        <p className="t-eyebrow text-gold-lift">FACILITIES & AMENITIES</p>
        <h2 id="facilities-heading" className="t-h2 mt-5 max-w-[22ch] text-core-white">
          Facilities that support the full session.
        </h2>
        <p className="t-body mt-5 max-w-[64ch] text-titanium">
          Fuel, recovery, classes, lockers and member services sit alongside the
          training floor at Core Club.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {amenities.groups.map((group, index) => (
          <Reveal
            as="article"
            key={group.slug}
            delay={(index % 2) * 0.08}
            className="flex h-full min-w-0 flex-col rounded-cc-md border border-hairline bg-surface-1 p-6 sm:p-8"
          >
            <h3 className="t-eyebrow text-gold-lift">{group.name}</h3>
            {group.slug === "club-convenience" ? (
              <div className="mt-6 border-t border-hairline">
                <ul className="grid gap-x-6 gap-y-5 py-5 sm:grid-cols-2">
                  {group.items.slice(0, 3).map((item, itemIndex) => (
                    <FacilityItem key={item.slug} item={item} compact wide={itemIndex === 2} />
                  ))}
                </ul>
                <ul className="grid gap-x-6 gap-y-4 border-t border-hairline pt-5 sm:grid-cols-2">
                  {group.items.slice(3).map((item) => (
                    <FacilityItem key={item.slug} item={item} compact />
                  ))}
                </ul>
              </div>
            ) : group.slug === "classes-movement" ? (
              <ul className="mt-6 flex flex-1 flex-col border-t border-hairline">
                {group.items.map((item) => (
                  <FacilityItem key={item.slug} item={item} spacious />
                ))}
              </ul>
            ) : (
              <ul className="mt-6 divide-y divide-hairline border-t border-hairline">
                {group.items.map((item) => (
                  <FacilityItem key={item.slug} item={item} />
                ))}
              </ul>
            )}
            {group.note && (
              <p className="t-small mt-auto border-t border-hairline pt-6 text-titanium">
                {group.note}
              </p>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
