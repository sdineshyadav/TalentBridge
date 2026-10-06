type SiteNavLink = {
  label: string;
  href: string;
  icon?: "right";
};

export const siteNavLinks: SiteNavLink[] = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services" },
  { label: "PRODUCTS", href: "/products" },
  { label: "STAFFING CONTRACTS", href: "/staffing-contracts" },
  { label: "CONTACT US", href: "/contact" },
  { label: "REQUEST FOR QUOTE", href: "/request-quote" },
];

export const footerLinkGroups = [
  {
    title: "For Employers",
    links: [
      "Find Talent",
      "Executive Search",
      "Contract Staffing",
      "Permanent Hiring",
    ],
  },
  {
    title: "For Candidates",
    links: ["Browse Jobs", "Career Advice", "Resume Builder", "Interview Tips"],
  },
  {
    title: "Company",
    links: ["About Us", "Industries", "Success Stories", "Careers"],
  },
  {
    title: "Support",
    links: ["Help Center", "Privacy Policy", "Terms & Conditions", "Contact"],
  },
] as const;
