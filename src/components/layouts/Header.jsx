"use client";

import Link from "next/link";
import React, { useCallback, useEffect, Fragment, useState } from "react";
import styles from "./Header.module.scss";
import {
  FaApple,
  FaChevronDown,
  FaList,
  FaSearch,
  FaShoppingBag,
} from "react-icons/fa";
import { Popover, Transition } from "@headlessui/react";

export function Header() {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(0);

  if (typeof window !== "undefined") {
    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("title").style.display = "block";
        document.getElementById("parallex").style.display = "block";
        document.getElementById("paragraph").style.display = "none";
      } else {
        document.getElementById("navbar").style.top = "-50px";
        document.getElementById("title").style.display = "none";
        document.getElementById("parallex").style.display = "none";
        document.getElementById("paragraph").style.display = "block";
      }
      prevScrollpos = currentScrollPos;
    };
  }

  const onScroll = useCallback((event) => {
    var prevScrollpos = window.scrollY;
    window.onscroll = function () {
      var currentScrollPos = window.scrollY;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0px";
        document.getElementById("title").style.display = "block";
        document.getElementById("parallex").style.display = "block";
        document.getElementById("paragraph").style.display = "none";
      } else {
        document.getElementById("navbar").style.top = "-50px";
        document.getElementById("title").style.display = "none";
        document.getElementById("parallex").style.display = "none";
        document.getElementById("paragraph").style.display = "block";
      }
      prevScrollpos = currentScrollPos;
    };
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, [onScroll]);

  const storeLinks = [
    {
      name: "Shop",
      firstCol: true,
      links: ["Shop the latest", "Mac", "iPad", "iPhone", "Apple Watch"],
    },
    {
      name: "Quick Links",
      links: [
        "Shop Holiday Gifts",
        "Find a Store",
        "Order Status",
        "Apple Trade In",
        "Financing",
      ],
    },
    {
      name: "Shop Special Stores",
      links: [
        "Certified Refurbished",
        "Education",
        "Business",
        "Veterans and Military",
        "Government",
      ],
    },
  ];

  const links = [
    {
      id: 1,
      name: "Store",
      childLinks: [
        {
          name: "Shop",
          firstCol: true,
          links: ["Shop the latest", "Mac", "iPad", "iPhone", "Apple Watch"],
        },
        {
          name: "Quick Links",
          links: [
            "Shop Holiday Gifts",
            "Find a Store",
            "Order Status",
            "Apple Trade In",
            "Financing",
          ],
        },
        {
          name: "Shop Special Stores",
          links: [
            "Certified Refurbished",
            "Education",
            "Business",
            "Veterans and Military",
            "Government",
          ],
        },
      ],
    },

    {
      id: 2,
      name: "Mac",
      childLinks: [
        {
          name: "Explore Mac",
          firstCol: true,
          links: [
            "Explore All Mac",
            "MacBook Air",
            "MacBook Pro",
            "iMac",
            "Mac mini",
            "Mac Studio",
            "Mac Pro",
            "Displays",
            "Compare Mac",
            "Mac Does That",
          ],
        },
        {
          name: "Shop Mac",
          links: ["Shop Mac", "Map Accessories", "Apple Trade In", "Financing"],
        },
        {
          name: "More From Mac",
          links: [
            "Mac Support",
            "AppleCare+ for Mac",
            "macOS Sonoma",
            "Apps by Apple",
            "Continuity",
            "iCloud",
            "Mac for Business",
            "Education",
          ],
        },
      ],
    },
    {
      id: 3,
      name: "iPad",
      childLinks: [
        {
          name: "Explore iPad",
          firstCol: true,
          links: [
            "Explore All iPad",
            "iPad Pro",
            "iPad Air",
            "iPad",
            "iPad mini",
            "Apple Pencil",
            "Keyboards",
            "Compare iPad",
            "Why iPad",
          ],
        },
        {
          name: "Shop iPad",
          links: [
            "Shop iPad",
            "iPad Accessories",
            "Apple Trade In",
            "Financing",
          ],
        },
      ],
    },
    {
      id: 4,
      name: "iPhone",
      childLinks: [
        {
          name: "Explore iPhone",
          firstCol: true,
          links: [
            "Explore All iPhone",
            "iPhone 15 Pro",
            "iPhone 15",
            "iPhone 14",
            "iPhone 13",
            "iPhone SE",
            "Compare iPhone",
            "Switch from Android",
          ],
        },
        {
          name: "Shop iPhone",
          links: [
            "Shop iPhone",
            "iPhone Accessories",
            "Apple Trade In",
            "Carrier Deals at Apple",
            "Financing",
          ],
        },
        {
          name: "More from iPhone",
          links: [
            "iPhone Support",
            "AppleCare+ for iPhone",
            "iOS 17",
            "iPhone Privacy",
            "iCloud+",
            "Wallet, Pay, Card",
            "Siri",
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Watch",
      childLinks: [
        {
          name: "Explore Watch",
          firstCol: true,
          links: [
            "Explore All Watch",
            "Apple Watch Series 9",
            "Apple Watch Ultra 2",
            "Apple Watch SE",
            "Apple Watch Nike",
            "Apple Watch Hermès",
            "Compare Watch",
            "Why Apple Watch",
          ],
        },
        {
          name: "Shop Watch",
          links: [
            "Shop Apple Watch",
            "Apple Watch Studio",
            "Apple Watch Bands",
            "Apple Watch Accessories",
            "Apple Trade In",
            "Financing",
          ],
        },
        {
          name: "More from Watch",
          links: [
            "Apple Watch Support",
            "AppleCare+",
            "watchOS 10",
            "Apps by Apple",
            "Apple Fitness++",
          ],
        },
      ],
    },
    {
      id: 6,
      name: "Vision",
    },
    {
      id: 7,
      name: "AirPods",
      childLinks: [
        {
          name: "Explore AirPods",
          firstCol: true,
          links: [
            "Explore All AirPods",
            "AirPods Pro 2nd generation",
            "AirPods 2nd generation",
            "AirPods 3rd generation",
            "AirPods Max",
            "Compare AirPods",
          ],
        },
        {
          name: "Shop AirPods",
          links: ["Shop AirPods", "AirPods Accessories"],
        },
        {
          name: "More from AirPods",
          links: [
            "AirPods Support",
            "AppleCare+ for Headphones",
            "Apple Music",
          ],
        },
      ],
    },
    {
      id: 8,
      name: "TV & Home",
      childLinks: [
        {
          name: "Explore TV & Home",
          firstCol: true,
          links: [
            "Explore TV & Home",
            "Apple TV 4K",
            "HomePod",
            "HomePod Mini",
          ],
        },
        {
          name: "Shop TV & Home",
          links: [
            "Shop Apple TV 4K",
            "Shop HomePod",
            "Shop HomePod mini",
            "Shop Siri Remote",
            "TV & Home Accessories",
          ],
        },
        {
          name: "More from TV & Home",
          links: [
            "Apple TV Support",
            "HomePod Support",
            "AppleCare+",
            "Apple TV app",
            "Apple TV+",
            "Home app",
            "Apple Music",
            "Siri",
            "AirPlay",
          ],
        },
      ],
    },
    {
      id: 9,
      name: "Entertainment",
      childLinks: [
        {
          name: "Explore Entertainment",
          firstCol: true,
          links: [
            "Explore Entertainment",
            "Apple One",
            "Apple TV+",
            "Apple Music",
            "Apple Arcade",
            "Apple Fitness+",
            "Apple News+",
            "Apple Podcasts",
            "Apple Books",
            "App Store",
          ],
        },
        {
          name: "Support",
          links: ["Apple TV+ Support", "Apple Music Support"],
        },
      ],
    },
    {
      id: 10,
      name: "Accessories",
      childLinks: [
        {
          name: "Shop Accessories",
          firstCol: true,
          links: [
            "Shop All Accessories",
            "Mac",
            "iPad",
            "iPhone",
            "Apple Watch",
            "AirPods",
            "Apple TV & Home",
          ],
        },
        {
          name: "Explore Accessories",
          links: [
            "Shop Holiday Gifts",
            "Made by Apple",
            "Beats by Dr. Dre",
            "AirTag",
          ],
        },
      ],
    },
    {
      id: 11,
      name: "Support",
      childLinks: [
        {
          name: "Explore Support",
          firstCol: true,
          links: [
            "iPhone",
            "Mac",
            "iPad",
            "Watch",
            "AirPods",
            "Music",
            "TV",
            "Explore Support",
          ],
        },
        {
          name: "Get Help",
          links: ["Community", "Check Coverage", "Repair", "Contact Us"],
        },
        {
          name: "Helpful Topics",
          links: [
            "Get AppleCare+",
            "Apple ID & Password",
            "Billing & Subscriptions",
            "Find My",
            "Accessibility",
          ],
        },
      ],
    },
  ];

  return (
    <div className={styles.wrapper} id="navbar">
      <div className=" sm:hidden lg:flex flex justify-between items-center space-x-5 text-xs text-gray-300 py-4 bg-black px-52">
        <Link href="/">
          <FaApple size={20} />
        </Link>
        {links.map((l) => (
          <Popover className="relative" key={l.name}>
            {({ open }) => (
              <>
                <Popover.Button
                  onMouseEnter={() => {
                    setShow(true);
                    setCurrent(l.id);
                  }}
                  onMouseLeave={() => {
                    setShow(false);
                    setCurrent(l.id);
                  }}
                >
                  {l.name}
                </Popover.Button>
                <Transition
                  as={Fragment}
                  show={current === l.id && show}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-5 sm:px-0 lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
                      <div className="relative grid gap-8 bg-zinc-950 p-7 lg:grid-cols-4">
                        {l?.childLinks?.map((item) => (
                          <div key={item.name}>
                            <a
                              href="/"
                              className="flex items-center rounded-lg py-2 transition duration-150 ease-in-out outline-none"
                            >
                              <p className="text-xs font-medium text-gray-400">
                                {item.name}
                              </p>
                            </a>
                            <div className="">
                              {item.links.map((link) => (
                                <div
                                  key={link.name}
                                  href="/"
                                  className={`font-medium text-white ${
                                    item.firstCol ? "text-xl" : "text-xs py-2"
                                  }`}
                                >
                                  <a>{link}</a>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        ))}
        <Link href="/">
          <FaSearch size={18} />
        </Link>
        <Link href="/">
          <FaShoppingBag size={18} />
        </Link>
        <FaList className="sm:block lg:hidden" />
      </div>
      <div className="sm:flex lg:hidden justify-between items-center space-x-5 text-xs text-gray-300 py-4 bg-black w-full px-10">
        <div>
          <Link href="/">
            <FaApple size={20} />
          </Link>
        </div>
        <div className="flex justify-between items-center space-x-4">
          <Link href="/">
            <FaSearch size={18} />
          </Link>
          <Link href="/">
            <FaShoppingBag size={18} />
          </Link>
          <FaList className="sm:block lg:hidden" />
        </div>
      </div>
      <div className="flex justify-between items-center bg-zinc-950 px-52 py-3 relative top-0">
        <Link href="/" className="text-xl font-bold text-white">
          Apple TV+
        </Link>
        <button className="bg-slate-50 text-black rounded-full text-xs px-2 py-1">
          Stream Now
        </button>
      </div>
    </div>
  );
}
