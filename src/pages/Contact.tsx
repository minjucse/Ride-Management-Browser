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
      <div className="py-16 px-4 container mx-auto">
        <h1> This is Contact component </h1>
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