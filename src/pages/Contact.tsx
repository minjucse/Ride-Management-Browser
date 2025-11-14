import { ContactAndHelpSection } from "@/components/shared/ContactAndHelpSection";
import { ContactCardSection } from "@/components/shared/ContactCardSection";
import { WebBreadcrumb } from "@/components/shared/WebBreadcrumb";

export default function Contact() {
  return (
    <>
      <WebBreadcrumb
        title="Contact "
        subtitle="We're here to help! Reach out to us with any questions, concerns, or feedback. Our dedicated team is ready to assist you."
        buttonText="GET STARTED"
        buttonLink="/register"
      />
      <ContactCardSection />
      <ContactAndHelpSection />
    </>
  );
}