"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Drawer } from "../ui/drawer";
import TopNavigation from "./TopNavigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <>
      <header className="border-b dark:border-base-content/10 z-50 relative">
        <div className="container px-5  flex justify-between items-center h-full">
          <div className="lg:hidden">
            <svg
              onClick={openDrawer}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 font-medium mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <Image
            src={"/images/logo-d.png"}
            width={100}
            height={36}
            alt="logo"
          />
          <TopNavigation />

          <Button
            variant="neutral"
            className="font-medium ml-2 lg:ml-8 lg:mr-auto"
            size="sm"
          >
            <span className="hidden md:inline">ورود | ثبت نام</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 font-medium md:mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
          </Button>
        </div>
        <Drawer
          isOpen={isOpen}
          closable
          width={300}
          onClose={closeDrawer}
          onRequestClose={closeDrawer}
          title={
            <Image
              src={"/images/logo-d.png"}
              width={70}
              height={36}
              alt="logo"
            />
          }
          bodyClass="w-full"
        >
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-white/10">
              <div className="space-y-2 py-6 ">
                <div className="group">
                  <Link
                    href="/"
                    className="-mx-3 flex items-center gap-x-6 rounded-lg p-3 dark:text-base/7 font-semibold dark:text-white group-hover:text-accent-content"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 group-hover:text-accent-content"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                    خانه
                  </Link>
                </div>
                <div className="group">
                  <Link
                    href="/"
                    className="-mx-3 flex items-center gap-x-6 rounded-lg p-3 dark:text-base/7 font-semibold dark:text-white group-hover:text-accent-content"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 group-hover:text-accent-content"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                    دوره ها
                  </Link>
                </div>
                <div className="group">
                  <Link
                    href="/"
                    className="-mx-3 flex items-center gap-x-6 rounded-lg p-3 dark:text-base/7 font-semibold dark:text-white group-hover:text-accent-content"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-5 group-hover:text-accent-content"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                      />
                    </svg>
                    درباره ما
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </header>
    </>
  );
};

export default Header;
