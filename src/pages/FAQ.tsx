import { FaqSection } from "@/components/shared/FaqSection";
import { QuickHelpSection } from "@/components/shared/QuickHelpSection";
import { WebBreadcrumb } from "@/components/shared/WebBreadcrumb";

export default function FAQ() {
  return (
    <>
      <WebBreadcrumb
        title="Help You? "
        subtitle="Find answers to common questions about RideShare Pro. Can't find what you're looking for? Contact our support team."
        buttonText="GET STARTED"
        buttonLink="/register"
      />
      <div>
        <QuickHelpSection />
        <FaqSection />
      </div>
      <div className="py-16 px-4 container mx-auto">

      </div>
    </>
  );
}