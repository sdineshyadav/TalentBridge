import Link from "next/link";

type BrandLogoProps = {
  placement: "navbar" | "footer";
  priority?: boolean;
};

const logoStyles = {
  navbar: {
    link: "flex shrink-0 items-center justify-center rounded-xl bg-transparent px-1.5 py-1",
    text: "text-[1.5rem] font-black tracking-[-0.06em] text-[#102A43] sm:text-[1.7rem]",
  },
  footer: {
    link: "inline-flex shrink-0 items-center justify-center rounded-2xl bg-transparent p-2",
    text: "text-[2rem] font-black tracking-[-0.06em] text-white sm:text-[2.4rem]",
  },
};

export default function BrandLogo({ placement }: BrandLogoProps) {
  const styles = logoStyles[placement];

  return (
    <Link href="/" className={styles.link} aria-label="TalentBridge home">
      <span className={styles.text}>TalentBridge</span>
    </Link>
  );
}
