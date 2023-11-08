import Image from "next/image";
import React from "react";
import styles from "./WatchAnywhere.module.scss";
import cx from "classnames";
import Link from "next/link";

export function WatchAnywhere() {
  return (
    <div className={cx(styles.wrapper, "py-20 px-52")}>
      <div className={styles.watchApp}>
        <Image
          alt="image-apple-tv-app-icon"
          src="/images/apple_tv_app_icon.png"
          width={80}
          height={80}
          className={styles.image}
        />
        <h1 className="text-black text-7xl font-bold text-center my-5">
          Watch Apple TV+ Anywhere on the Apple TV app.
        </h1>
        <p className="text-black">
          Find the Apple TV app on your favorite Apple devices.
        </p>
        <p className="text-black">
          Or watch Apple TV+ online at &nbsp;
          <Link
            href="https://tv.apple.com"
            className="text-blue-500 underline underline-offset-1"
          >
            tv.apple.com.
          </Link>
        </p>
      </div>
      <div className={cx(styles.features, "px-20")}>
        <div>
          <Image
            alt="image-apple-tv-app-icon"
            src="/images/features/apple_tv_icon.jpg"
            width={70}
            height={70}
            className={styles.image}
          />
          <p className="text-black mt-4">Apple TV</p>
        </div>

        <div>
          <Image
            alt="iphone_icon"
            src="/images/features/iphone_icon.jpg"
            width={70}
            height={70}
            className={styles.image}
          />
          <p className="text-black mt-4">iPhone</p>
        </div>
        <div>
          <Image
            alt="ipad_icon"
            src="/images/features/ipad_icon.jpg"
            width={70}
            height={70}
            className={styles.image}
          />
          <p className="text-black mt-4">iPad</p>
        </div>
        <div>
          <Image
            alt="mac_icon"
            src="/images/features/mac_icon.jpg"
            width={70}
            height={70}
            className={styles.image}
          />
          <p className="text-black mt-4">Mac</p>
        </div>
        <div>
          <Image
            alt="airplay_icon"
            src="/images/features/airplay_icon.jpg"
            width={70}
            height={70}
            className={styles.image}
          />
          <p className="text-black mt-4">AirPlay</p>
        </div>
      </div>
      <div className={cx(styles.streamingDevices, "px-52")}>
        <h2 className="text-black text-4xl text-center px-20 font-semibold mb-4">
          See it on your smart TV or streaming device.
        </h2>
        <Link
          className="text-blue-500 underline underline-offset-1"
          href="https://support.apple.com/guide/tvplus/welcome/web"
        >
          Set up your device
        </Link>
      </div>
      <div className={cx(styles.devices, "px-20")}>
        <Image
          alt="samsung"
          src="/images/devices/samsung.jpg"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          alt="lg"
          src="/images/devices/lg.jpg"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          alt="vizio"
          src="/images/devices/vizio.jpg"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          alt="sony"
          src="/images/devices/sony.jpg"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          alt="xfinity"
          src="/images/devices/xfinity.jpg"
          width={100}
          height={100}
          className={styles.image}
        />
      </div>
      <div className={cx(styles.devices, "px-20")}>
        <Image
          alt="roku"
          src="/images/devices/roku.jpg"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          alt="fireTv"
          src="/images/devices/fireTv.jpg"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          alt="google"
          src="/images/devices/google.jpg"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          alt="play-station"
          src="/images/devices/play-station.jpg"
          width={100}
          height={100}
          className={styles.image}
        />
        <Image
          alt="xbox"
          src="/images/devices/xbox.jpg"
          width={100}
          height={100}
          className={styles.image}
        />
      </div>
    </div>
  );
}
