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
      <div className="py-16 px-4 container mx-auto">
        <h1> This is FAQ component </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, qui
          eos. Architecto quisquam odit soluta fugit quos ab unde, voluptatem
          eos necessitatibus nesciunt, in neque consequatur adipisci velit
          accusantium illum.
        </p>
      </div>
    </>
  );
}