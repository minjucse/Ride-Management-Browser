import { WebBreadcrumb } from "@/components/shared/WebBreadcrumb";

export default function Features() {
  return (
    <>
      <WebBreadcrumb
        title="Features"
        subtitle="Explore our range of services and solutions tailored to meet your logistics needs."
        buttonText="GET STARTED"
        buttonLink="/register"
      />
      <div className="py-16 px-4 container mx-auto">
        <h1> This is Features component </h1>
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