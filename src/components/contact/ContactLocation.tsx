import {
  Building2,
  Clock,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Reveal from "@/components/animation/Reveal";
import PageSection from "@/components/ui/PageSection";

export default function ContactLocation() {
  return (
    <PageSection>
      <div
        id="location"
        className="premium-card grid gap-8 overflow-hidden rounded-[30px] border border-[#E4EAF2] bg-white shadow-[0_24px_80px_rgba(15,47,74,0.12)] lg:grid-cols-[1fr_1.1fr]"
      >
        <Reveal className="p-8 md:p-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EAF2FF] px-4 py-2 text-sm font-black text-[#1B63FF]">
            <Building2 size={17} />
            Office Details
          </div>

          <h2 className="mt-6 text-3xl font-black text-[#102A43] md:text-4xl">
            TalentBridge
          </h2>

          <div className="mt-7 space-y-5 text-base leading-8 text-[#667085]">
            <p className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-[#238A72]" size={21} />
              <span>
                6595 Roswell Road Suite G2201 Atlanta, GA 30328 United States
              </span>
            </p>
            <p className="flex gap-3">
              <Clock className="mt-1 shrink-0 text-[#238A72]" size={21} />
              <span>Monday - Friday: 9am - 5pm. Saturday - Sunday: Closed.</span>
            </p>
            <p className="flex gap-3">
              <ShieldCheck
                className="mt-1 shrink-0 text-[#238A72]"
                size={21}
              />
              <span>
                Open today <strong>09:00 am - 05:00 pm</strong>.
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal direction="right" className="min-h-[420px]">
  <div className="premium-map-frame relative h-full overflow-hidden rounded-r-[30px] bg-[#102A43]">
    {/* Top Badge */}
    <div className="absolute left-6 top-6 z-20 rounded-full bg-white/95 px-4 py-2 shadow-lg backdrop-blur">
      <div className="flex items-center gap-2">
        <MapPin size={18} className="text-[#238A72]" />
        <span className="text-sm font-bold text-[#102A43]">
          TalentBridge
        </span>
      </div>
    </div>

    {/* Live Google Map */}
    <iframe
      src="https://www.google.com/maps?q=6595+Roswell+Road+Suite+G2201+Atlanta+GA+30328&output=embed"
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      className="absolute inset-0 h-full w-full border-0"
    />

    {/* Bottom Glass Card */}
    <div className="absolute bottom-6 left-6 right-6 z-20 rounded-[22px]  p-5 ">
    
      <a
        href="https://maps.google.com/?q=6595+Roswell+Road+Suite+G2201+Atlanta+GA+30328"
        target="_blank"
        rel="noopener noreferrer"
        className="premium-sheen premium-depth mt-5 inline-flex items-center gap-2 rounded-xl bg-[#102A43] px-5 py-3 text-sm font-bold text-white"
      >
        <MapPin size={16} />
        Open in Google Maps
      </a>
    </div>
  </div>
</Reveal>
      </div>
    </PageSection>
  );
}
