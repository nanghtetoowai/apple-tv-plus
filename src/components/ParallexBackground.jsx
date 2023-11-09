"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./ParallexBackground.module.scss";
// import PackageCard from "./PackageCard";
import ReactPlayer from "react-player";
import cx from "classnames";
import Image from "next/image";
import { PackageCard } from "./PackageCard";

export function ParallexBackground() {
  const [url, setUrl] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setUrl("/images/tv-plus-bg.mp4");
    setIsPlaying(true);
  }, []);

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  // if (typeof window !== "undefined") {
  //   var prevScrollpos = window.scrollY;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.scrollY;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("navbar").style.top = "0";
  //       document.getElementById("title").style.display = "block";
  //       document.getElementById("paragraph").style.display = "none";

  //     } else {
  //       document.getElementById("navbar").style.top = "-50px";
  //       document.getElementById("title").style.display = "none";
  //       document.getElementById("paragraph").style.display = "block";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };
  // }

  // const onScroll = useCallback((event) => {
  //   var prevScrollpos = window.scrollY;
  //   window.onscroll = function () {
  //     var currentScrollPos = window.scrollY;
  //     if (prevScrollpos > currentScrollPos) {
  //       document.getElementById("navbar").style.top = "0";
  //       document.getElementById("title").style.display = "block";
  //       document.getElementById("paragraph").style.display = "none";
  //     } else {
  //       document.getElementById("navbar").style.top = "-50px";
  //       document.getElementById("title").style.display = "none";
  //       document.getElementById("paragraph").style.display = "block";
  //     }
  //     prevScrollpos = currentScrollPos;
  //   };
  // }, []);

  // useEffect(() => {
  //   //add eventlistener to window
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   // remove event on unmount to prevent a memory leak with the cleanup
  //   return () => {
  //     window.removeEventListener("scroll", onScroll, { passive: true });
  //   };
  // }, []);

  return (
    <div className="">
      <div className={styles.fullScreen} id="parallex">
        {url && (
          <ReactPlayer
            className="react-player"
            url={url}
            controls
            playing={isPlaying}
            width="100%"
            height="100%"
            loop
            muted={true}
          />
        )}
      </div>

      <div id="title" className={cx(styles.title, "px-24")}>
        <h1 className="lg:text-7xl sm:text-3xl font-bold text-white">
          All Apple Originals.
        </h1>
        <h1 className="lg:text-7xl sm:text-3xl font-bold text-white">
          Only on Apple TV+.
        </h1>
        <button className="lg:my-20 sm:my-10 text-white">Stream Now</button>
        <p className="text-lg flex items-center text-white">
          Watch on the
          <span className="mx-2">
            <Image
              className="rounded"
              src="/images/apple_tv_app_icon.png"
              sizes="100vw"
              width={40}
              height={40}
              style={{
                width: "40px",
                height: "auto",
              }}
              alt="Picture of the author"
            />
          </span>
          app.
        </p>
      </div>

      <div id="paragraph" className={cx(styles.paragraph, "px-52 py-10 text-white")}>
        <p className="text-5xl font-bold">
          New Apple Originals every month - always ad-free.
        </p>
        <p className="text-5xl font-bold my-10">
          Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
          sticks.
        </p>
        <p className="text-5xl font-bold">
          Watch in 4K HDR video with immersive Spatial Audio.<sup>1</sup>
        </p>

        <p className="text-5xl font-bold my-10">
          Share a single subscription with up to five people.
        </p>

        <div className={cx(styles.package, "flex space-x-10")}>
          <PackageCard
            title="Buy an Apple device"
            timePeriod="3 months free."
            description={
              <div>
                Apple TV+ is included for 3 months when you purchase an Apple
                device and redeem the offer within 90 days. <sup>1</sup>
              </div>
            }
            btnText="Check eligibility"
          />
          <PackageCard
            title="Free 7-day trial"
            timePeriod="$4.99/mo."
            description={
              <div>
                A monthly subscription is just $4.99 per month after a free
                7-day trial. Share Apple TV+ with your family.<sup>2</sup>
              </div>
            }
            btnText="Try it free"
          />
          <PackageCard
            title="Free 1‑month trial"
            timePeriod="Apple One"
            description="Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less Learn More"
            btnText="Try Apple One free"
          />
        </div>
      </div>
    </div>
  );
}
