import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./LastRow.module.scss";
import { FaChevronRight } from "react-icons/fa";

export function LastRow() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div className={styles.col1}>
          <Image
            alt="apple_tv_4k_logo"
            src="/images/apple_tv_4k_logo.png"
            width={116}
            height={35}
            className={styles.img1}
          />
          <p className="text-4xl text-black">The Apple experience.</p>
          <p className="text-4xl text-black mb-4">Cinematic in every sense.</p>

          <div className={styles.btnGroup}>
            <button>Buy</button>
            <div className={styles.link}>
              <Link href="/">
                Learn More <FaChevronRight />
              </Link>
            </div>
          </div>
          <Image
            alt="apple_tv_4k_remote"
            src="/images/apple_tv_4k_remote.jpg"
            width={539}
            height={400}
            style={{ height: 500 }}
          />
        </div>
        <div className={styles.col2}>
          <h3 className="mt-4">AirPlay</h3>
          <p className="text-4xl text-black my-5">
            Bring Apple TV+ to a screen near you.
          </p>
          <div className={styles.link}>
            <Link href="/">Learn More</Link>
          </div>
          <Image
            alt="air_play"
            src="/images/air_play.jpg"
            width={539}
            height={600}
            style={{ height: 532, width: "100%" }}
            className={styles.img2}
          />
        </div>
      </div>
    </div>
  );
}
