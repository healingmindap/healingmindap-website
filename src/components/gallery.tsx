function Gallery() {
  return (
    <section className="px-5 mt-10">
      <div className="flex flex-col gap-y-4 max-w-screen-xl mx-auto">
        <h1 className="text-4xl text-gray-700">
          A collection of our services provided to the clients.
        </h1>
        <p className="text-gray-700">
          Our team has conducted Multiple Webinars, Therapy session and
          psychometry assessments.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <figure className="group w-full h-full relative flex flex-col">
            <img
              className="h-full object-cover w-full"
              src="/assets/bigger-logo.webp"
            />
            <figcaption className="absolute bottom-0 inset-x-0 group-hover:visible invisible transition bg-black bg-opacity-50 p-1.5 text-white">
              HEALING MIND
            </figcaption>
          </figure>
          <figure className="group w-full h-full relative flex flex-col">
            <img
              className="h-full object-cover w-full"
              src="/assets/prochaska-stages.webp"
            />
            <figcaption className="absolute bottom-0 inset-x-0 group-hover:visible invisible transition bg-black bg-opacity-50 p-1.5 text-white">
              OUR SERVICES
            </figcaption>
          </figure>
          <figure className="group w-full h-full relative flex flex-col">
            <img
              className="h-full object-cover w-full"
              src="/assets/visiting-card.webp"
            />
            <figcaption className="absolute bottom-0 inset-x-0 group-hover:visible invisible transition bg-black bg-opacity-50 p-1.5 text-white">
              VISITING CARD
            </figcaption>
          </figure>
          <figure className="group w-full h-full relative flex flex-col">
            <img
              className="h-full object-cover w-full"
              src="/assets/work-shop-1.webp"
            />
            <figcaption className="absolute bottom-0 inset-x-0 group-hover:visible invisible transition bg-black bg-opacity-50 p-1.5 text-white">
              WORKSHOP DAY 1
            </figcaption>
          </figure>
          <figure className="group w-full h-full relative flex flex-col">
            <img
              className="h-full object-cover w-full"
              src="/assets/work-shop-2.webp"
            />
            <figcaption className="absolute bottom-0 inset-x-0 group-hover:visible invisible transition bg-black bg-opacity-50 p-1.5 text-white">
              WORKSHOP DAY 2
            </figcaption>
          </figure>
          <figure className="group w-full h-full relative flex flex-col">
            <img
              className="h-full object-cover w-full"
              src="/assets/work-shop-3.webp"
            />
            <figcaption className="absolute bottom-0 inset-x-0 group-hover:visible invisible transition bg-black bg-opacity-50 p-1.5 text-white">
              WORKSHOP DAY 3
            </figcaption>
          </figure>
        </div>
        <div className="mt-10">
          <h1 className="text-4xl text-gray-700">Clients</h1>
          <div className="mt-4 flex flex-nowrap space-x-2">
            <figure className="group w-1/4 relative flex flex-col">
              <img
                className="h-full object-cover w-full"
                src="/assets/parents.webp"
              />
              <figcaption className="absolute bottom-0 inset-x-0 group-hover:visible invisible transition bg-black bg-opacity-50 p-1.5 text-white">
                PATIENTS
              </figcaption>
            </figure>
            <figure className="group w-1/4 relative flex flex-col">
              <img
                className="h-full object-cover w-full"
                src="/assets/inters.webp"
              />
              <figcaption className="absolute bottom-0 inset-x-0 group-hover:visible invisible transition bg-black bg-opacity-50 p-1.5 text-white">
                INTERNS
              </figcaption>
            </figure>
            <figure className="group w-1/4 relative flex flex-col">
              <img
                className="h-full object-cover w-full"
                src="/assets/children.webp"
              />
              <figcaption className="absolute bottom-0 inset-x-0 group-hover:visible invisible transition bg-black bg-opacity-50 p-1.5 text-white">
                CHILDREN
              </figcaption>
            </figure>
            <figure className="group w-1/4 relative flex flex-col">
              <img
                className="h-full object-cover w-full"
                src="/assets/couple.webp"
              />
              <figcaption className="absolute bottom-0 inset-x-0 group-hover:visible invisible transition bg-black bg-opacity-50 p-1.5 text-white">
                COUPLE
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
