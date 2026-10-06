import { MessageCircle } from "lucide-react";
import SubpageHero from "@/components/ui/SubpageHero";
import ContactFaqs from "./ContactFaqs";
import ContactLocation from "./ContactLocation";
import ContactMethods from "./ContactMethods";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <SubpageHero
        label="Contact TalentBridge"
        title="A faster way to reach the right staffing team"
        description="Connect with TalentBridge for hiring support, candidate questions, product quote help, or general business inquiries."
        icon={MessageCircle}
        actions={[
          { label: "Request a quote", href: "/request-quote" },
          { label: "View services", href: "/services", variant: "secondary" },
        ]}
        metrics={[
          { value: "9-5", label: "Weekday support" },
          { value: "GA", label: "Atlanta office" },
          { value: "Fast", label: "Response routing" },
        ]}
      />

      <ContactMethods />
      <ContactFaqs />
      <ContactLocation />
    </main>
  );
}
