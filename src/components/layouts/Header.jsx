"use client";

import Link from "next/link";
import React, { useCallback, useEffect } from "react";
import styles from "./Header.module.scss";
import { FaApple, FaSearch, FaShoppingBag } from "react-icons/fa";

export function Header() {
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
  }, []);

  return (
    <div className={styles.wrapper} id="navbar">
      <div className="flex justify-between items-center space-x-5 text-xs text-gray-300 py-4 bg-black px-52">
        <Link href="/">
          <FaApple size={20} />
        </Link>
        <Link href="/">Store</Link>
        <Link href="/">Mac</Link>
        <Link href="/">iPad</Link>
        <Link href="/">iPhone</Link>
        <Link href="/">Watch</Link>
        <Link href="/">Vision</Link>
        <Link href="/">AirPods</Link>
        <Link href="/">TV & Home</Link>
        <Link href="/">Entertainment</Link>
        <Link href="/">Accessories</Link>
        <Link href="/">Support</Link>
        <Link href="/">
          <FaSearch size={18} />
        </Link>
        <Link href="/">
          <FaShoppingBag size={18} />
        </Link>
      </div>
      <div className="flex justify-between items-center bg-zinc-950 px-52 py-3 relative top-0">
        <Link href="/" className="text-xl font-bold">
          Apple TV+
        </Link>
        <button className="bg-slate-50 text-black rounded-full text-xs px-2 py-1">
          Stream Now
        </button>
      </div>
    </div>
  );
}
