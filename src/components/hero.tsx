function Hero() {
  return (
    <section className="grid aspect-square place-content-center bg-hero-pattern bg-cover px-5 sm:aspect-[2.35/1]">
      <div className="flex flex-col items-center gap-y-4">
        <h1 className="text-center text-4xl text-gray-700">HEALING MIND</h1>
        <h2 className="text-center text-gray-700">WE MAKE WORLD BETTER</h2>
        <p className="text-center text-gray-700">
          It is a platform where you can find solutions for all your problems.
          Take a step forward to help yourself.
        </p>
        <div className="mt-4 flex items-center gap-5">
          <a
            href="tel:+9168700954"
            className="text-md flex rounded-full bg-black px-5 py-2.5 text-white transition hover:border-opacity-80 hover:bg-opacity-80"
          >
            <span className="truncate text-sm sm:text-base">
              Book An Appointment
            </span>
          </a>
          <a
            href="#"
            className="text-md hov flex rounded-full border border-black px-5 py-2.5 text-black transition hover:bg-black hover:bg-opacity-80 hover:text-white"
          >
            <span className="truncate text-sm sm:text-base">Contact Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
