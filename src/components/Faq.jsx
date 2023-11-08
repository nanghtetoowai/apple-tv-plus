"use client";

import Link from "next/link";
import React, { useState } from "react";
import styles from "./Faq.module.scss";
import cx from "classnames";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { Accordion } from "./Accrodion";

export function Faq() {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);
  const [isActive5, setIsActive5] = useState(false);
  const [isActive6, setIsActive6] = useState(false);
  const [isActive7, setIsActive7] = useState(false);

  return (
    <div className={cx(styles.wrapper, "py-20 px-52")}>
      <h1 className="text-black font-bold text-center text-7xl mb-16">
        Questions? Answers.
      </h1>
      {/* <div className={styles.accordion}>
      <div className={styles.accordion}>
        <div className="flex justify-between items-center hover:cursor-pointer">
          <button
            className="text-black"
            onClick={() => setIsActive7(!isActive7)}
          >
            Can I download to watch offline?
          </button>
          {isActive7 ? (
            <FaChevronUp
              onClick={() => setIsActive7(!isActive7)}
              size={25}
              className="text-gray-500"
            />
          ) : (
            <FaChevronDown
              onClick={() => setIsActive7(!isActive7)}
              size={25}
              className="text-gray-500"
            />
          )}
        </div>
        {isActive7 && (
          <p className={styles.content}>
            Absolutely. Download your favorite Apple Originals to your Apple
            device and watch them anywhere, anytime without a Wi-Fi connection.
          </p>
        )}
      </div> */}

      <div className={cx(styles.main, "text-black")}>
        <div className={styles.accordion}>
          <Accordion
            title=" What is Apple TV+?"
            text=" Apple TV+ is a streaming service featuring Apple Originals —
            award-winning series, compelling dramas, groundbreaking
            documentaries, kids’ entertainment, comedies, and more — with new
            Apple Originals added every month."
          />
          <Accordion
            title="How can I watch it?"
            text="Watch Apple TV+ on the Apple TV app, which is already on your
            favorite Apple devices. Just open the app, click or tap Apple TV+,
            and enjoy the shows and movies. You can also watch Apple TV+ on
            streaming platforms, popular smart TVs, and AirPlay-enabled TVs with
            the Apple TV app — or watch online at tv.apple.com."
          />
          <Accordion
            title="What does it cost?"
            text="That all depends on which offer you choose. (1) If you buy an Apple
            device, Apple TV+ is included free for 3 months.1 (2) A monthly
            subscription is just $4.99 per month after a free seven-day trial.2
            (3) Apple TV+ is included in Apple One, which bundles up to five
            other Apple services into a single monthly subscription. Apple One
            plans start at $14.95 per month. (4) The Apple Music Student Plan
            comes with a free subscription to Apple TV+.3 Friday Night Baseball
            is free for a limited time — an Apple TV+ subscription is not
            required."
          />
          <Accordion
            title="Can I share with my family?"
            text="Of course. Apple TV+ lets you share your subscription with up to
            five family members."
          />
          <Accordion
            title="Are there commercials? And can I watch on demand?"
            text="Apple Originals are always commercial-free. Some shows release all
            episodes at once. Other shows add new episodes every Friday. You can
            then watch them on demand anytime, anywhere. Friday Night Baseball
            may include commercials depending on location or region."
          />
          <Accordion
            title="Do I need an Apple TV 4K?"
            text={
              <p className={styles.content}>
                No, you don’t. While Apple TV 4K — with 4K HDR and Dolby Atmos
                sound — is the ultimate way to experience Apple TV+, the
                original shows and movies on Apple TV+ are always available on
                the Apple TV app on your favorite devices.
                <Link href="/">See all supported devices</Link>
              </p>
            }
          />
          <Accordion
            title="Can I download to watch offline??"
            text=" Absolutely. Download your favorite Apple Originals to your Apple
            device and watch them anywhere, anytime without a Wi-Fi connection."
          />
        </div>
      </div>
    </div>
  );
}
