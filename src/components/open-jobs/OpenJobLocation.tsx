import { MapPin } from "lucide-react";
import Reveal from "@/components/animation/Reveal";

export default function OpenJobLocation() {
  return (
    <Reveal className="premium-card premium-depth mt-8 rounded-[30px] border border-[#E4EAF2] bg-[#F8FBFF] p-7 shadow-[0_18px_50px_rgba(15,47,74,0.08)] md:p-9">
      <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1B63FF]">
        Location
      </p>
      <div className="mt-5 flex gap-4 text-lg leading-8 text-[#667085]">
        <MapPin className="mt-1 shrink-0 text-[#238A72]" size={24} />
        <p>
          TalentBridge
          <br />
          5591 Chamblee Dunwoody Rd, Building 1300, Suite 314
          <br />
          Dunwoody, GA 3033
        </p>
      </div>
    </Reveal>
  );
}
