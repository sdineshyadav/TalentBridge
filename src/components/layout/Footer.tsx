import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import BrandLogo from "@/components/layout/BrandLogo";
import { footerLinkGroups } from "@/constants/site";

const socialLinks = [
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "X", icon: FaXTwitter },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#082846] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="soft-float absolute -left-32 top-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="soft-float absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <h2 className="pointer-events-none absolute -bottom-0 left-1/2 w-full -translate-x-1/2 text-center text-[52px] font-black leading-none tracking-tight text-white/[0.035] sm:text-[85px] md:text-[120px] lg:text-[160px] xl:text-[200px]">
          TALENTBRIDGE
        </h2>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 py-14 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_2.2fr_1.2fr]">
          {/* Left */}
          <div>
            <BrandLogo placement="footer" />

            <p className="mt-6 max-w-sm leading-7 text-white/65">
              Connecting exceptional talent with world-class companies through
              innovative recruitment solutions.
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <MapPin size={17} />
                Dallas, Texas, USA
              </div>

              <div className="flex items-center gap-3">
                <Phone size={17} />
                9876543210
              </div>

              <div className="flex items-center gap-3">
                <Mail size={17} />
                hr@talentbridge.com
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              {socialLinks.map(({ label, icon: Icon }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-blue-400 hover:bg-blue-500"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Center Links */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {footerLinkGroups.map((group) => (
              <div key={group.title}>
                <h3 className="font-bold text-white">{group.title}</h3>

                <ul className="mt-5 space-y-3">
                  {group.links.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-white/60 transition hover:translate-x-1 hover:text-white"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Right */}
          <div>
            <h3 className="text-lg font-bold">Newsletter</h3>

            <p className="mt-4 leading-7 text-white/65">
              Subscribe to receive hiring trends, recruitment insights and
              weekly job updates.
            </p>

            <div className="mt-5 flex rounded-2xl border border-white/10 bg-white/5 p-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/35"
              />

              <button
                type="button"
                aria-label="Subscribe"
                className="grid h-11 w-11 cursor-pointer place-items-center rounded-xl bg-blue-600 transition hover:bg-blue-700"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="mt-5 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
              <h4 className="font-bold">Need Hiring Help?</h4>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Talk to our recruitment specialists and hire faster with
                pre-screened candidates.
              </p>

              <button
                type="button"
                className="mt-4 cursor-pointer rounded-xl bg-white px-5 py-3 font-semibold text-[#082846] transition hover:scale-105"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="relative z-10 mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} TalentBridge. All Rights Reserved.
          </p>

          <div className="flex gap-8">
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>

            <Link href="#" className="hover:text-white">
              Terms
            </Link>

            <Link href="#" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}