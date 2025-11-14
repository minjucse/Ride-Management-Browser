import { WebBreadcrumb } from "@/components/shared/WebBreadcrumb";

export default function About() {
  return (
    <>
      <WebBreadcrumb
        title="About Us"
        subtitle="Learn more about our mission, vision, and the team behind CarrGo's success story."
        buttonText="GET STARTED"
        buttonLink="/register"
      />
      <div className="py-16 px-4 container mx-auto">
        <h1> This is About component </h1>
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