function Header() {
  return (
    <div className="bg-white px-4 py-6 shadow-sm">
      <nav className="flex items-center justify-between">
        <ul className="flex items-center gap-5">
          <li>
            <a className="flex items-center gap-4" href="">
              <img
                className="h-auto w-14 object-cover"
                src="/assets/logo.webp"
                alt="logo"
              />
              <h1 className="font-semibold text-gray-700">HEALING MIND</h1>
            </a>
          </li>
          <li>
            <a
              className="pb-1 text-gray-700 transition hover:border-b hover:border-gray-700"
              href="#"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="pb-1 text-gray-700 transition hover:border-b hover:border-gray-700"
              href="#"
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              className="pb-1 text-gray-700 transition hover:border-b hover:border-gray-700"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
        <ul className="flex items-center gap-5">
          <li>
            <a
              className="text-md rounded-full bg-red-900 px-5 py-2.5 text-white transition hover:bg-opacity-80"
              href="#"
            >
              Contact Us
            </a>
          </li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
