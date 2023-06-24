// @ts-nocheck

import { Link } from "preact-router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";

function Header() {
  return (
    <>
      <div className="bg-white px-4 py-6 shadow-sm">
        <nav className="flex items-center justify-between max-w-screen-xl mx-auto">
          <ul className="flex items-center gap-5">
            <li>
              <Link className="flex items-center gap-4" href="/">
                <img
                  className="h-auto w-14 object-cover"
                  src="/assets/logo.webp"
                  alt="logo"
                />
                <h1 className="font-semibold text-gray-700">HEALING MIND</h1>
              </Link>
            </li>
            <li>
              <ul className="hidden gap-5 sm:flex">
                <li>
                  <Link
                    className="pb-1 text-gray-700 transition hover:border-b hover:border-gray-700"
                    href="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className="pb-1 text-gray-700 transition hover:border-b hover:border-gray-700"
                    href="/gallery"
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    className="pb-1 text-gray-700 transition hover:border-b hover:border-gray-700"
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="hidden items-center gap-5 sm:flex">
            <li>
              <Link
                className="text-md rounded-full bg-red-900 px-5 py-2.5 text-white transition hover:bg-opacity-80"
                href="/"
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="block sm:hidden">
            <Sheet>
              <SheetTrigger>
                <Menu className="block sm:hidden" />
              </SheetTrigger>
              <SheetContent className="bg-white p-0" position="left" size="xl">
                <SheetHeader>
                  <SheetDescription className="">
                    <ul className="mt-5 divide-y-2">
                      <li className="p-5">
                        <Link
                          className="inline-block border-b border-transparent pb-1 text-gray-700 transition hover:border-gray-700"
                          href="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="p-5">
                        <Link
                          className="inline-block border-b border-transparent pb-1 text-gray-700 transition hover:border-gray-700"
                          href="/gallery"
                        >
                          Gallery
                        </Link>
                      </li>
                      <li className="p-5">
                        <Link
                          className="inline-block border-b border-transparent pb-1 text-gray-700 transition hover:border-gray-700"
                          href="/contact"
                        >
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
