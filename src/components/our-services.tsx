function OurServices() {
  return (
    <div className="aspect-[2.35/1] bg-gradient-to-b from-green-100 px-5  py-20">
      <section className="mx-auto flex max-w-screen-xl flex-col justify-center">
        <div className="mb-8">
          <h1 className="text-center text-4xl text-gray-700">Our Services</h1>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col items-center gap-5 ">
            <img className="h-40 object-cover" src="/assets/phychometry.webp" />
            <div>
              <div className="text-center text-2xl text-gray-700">
                PSYCHOMETRY
              </div>
              <p className="text-center text-gray-700">
                Psychometry is used to better understand the nature of Problem.
              </p>
            </div>
            <a
              href="tel:+9168700954"
              className="text-md rounded-full bg-black px-4 py-2 text-white transition hover:border-opacity-80 hover:bg-opacity-80"
            >
              Book an Appointment
            </a>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center gap-5 ">
              <img
                className="h-40 object-cover"
                src="/assets/psychotherapy.webp"
              />
              <div>
                <div className="text-center text-2xl text-gray-700">
                  PSYCHOTHERAPY
                </div>
                <p className="text-center text-gray-700">
                  Psychotherapy is a medium where problems is been entangled.
                </p>
              </div>
              <a
                href="tel:+9168700954"
                className="text-md rounded-full bg-black px-4 py-2 text-white transition hover:border-opacity-80 hover:bg-opacity-80"
              >
                Book an Appointment
              </a>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex flex-col items-center gap-5 ">
              <img className="h-40 object-cover" src="/assets/seminar.webp" />
              <div>
                <div className="text-center text-2xl text-gray-700">
                  SEMINAR
                </div>
                <p className="text-center text-gray-700">
                  To better understand PSYCHOLOGY and its aspects.
                </p>
              </div>
              <a
                href="tel:+9168700954"
                className="text-md rounded-full bg-black px-4 py-2 text-white transition hover:border-opacity-80 hover:bg-opacity-80"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurServices;
