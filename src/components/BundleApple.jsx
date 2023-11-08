"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaApple, FaChevronRight } from "react-icons/fa";
import styles from "./BundleApple.module.scss";
import cx from "classnames";

export function BundleApple() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.col1}>
          <Image
            alt="bundle-apple"
            src="/images/bundle.jpg"
            width={600}
            height={430}
            // className={styles.image}
          />
        </div>
        <div className={styles.col2}>
          <h2 className="text-black flex justify-center items-center text-5xl font-semibold">
            <span>
              <FaApple size={40} />
            </span>
            One
          </h2>
          <p className="text-black text-4xl font-bold text-center px-10 my-5">
            Bundle Apple TV+ with up to five other great services. And enjoy
            more for less.
          </p>
          <button className="text-black">Try Apple One free*</button>
          <Link
            href="/"
            className={cx(
              styles.link,
              "text-blue-700 flex items-center"
            )}
          >
            Learn More
            <FaChevronRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
