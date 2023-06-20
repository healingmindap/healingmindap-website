function Footer() {
  return (
    <div className="bg-black px-4 py-16">
      <footer className="mx-auto flex max-w-screen-xl flex-col justify-center">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <a className="flex items-center gap-4" href="">
              <img
                className="h-auto w-14 object-cover"
                src="/assets/logo.webp"
                alt="logo"
              />
              <h1 className="font-semibold text-white">HEALING MIND</h1>
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <a className="text-white" href="tel:+9168700954">
              9168700954
            </a>
            <a className="text-white" href="tel:+8830324723">
              8830324723
            </a>
            <a className="text-white" href="mailto:healingmindpa@gmail.com">
              healingmindpa@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
