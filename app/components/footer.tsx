export default function footer() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-md">
        &copy; 2025 Aaron Seymour - This is a fictional website
      </h1>
      <p>
        All rights reserved to Airbus and its associated entities.{" "}
        <a
          href="https://www.airbus.com/en/products-services/commercial-aircraft/passenger-aircraft/a220-family"
          className="text-blue-300"
        >
          Here is the link to the official Airbus A220 Website
        </a>{" "}
        <br />
        Gallery images were taken from Unsplash and its respective photographers
      </p>
    </div>
  );
}
