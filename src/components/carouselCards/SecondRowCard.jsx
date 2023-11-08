import React from "react";
import { FaPlayCircle } from "react-icons/fa";
import styles from "../MovieCarousel.module.scss";
import cx from "classnames";

export function SecondRowCard({ category, title, link }) {
  return (
    <div
      className={cx(
        styles.showIcon,
        "rounded-lg h-40 bg-gray-400 hover:cursor-pointer flex justify-center"
      )}
      style={{
        background: `url(${link}) no-repeat center`,
        width: 330,
      }}
    >
      <div
        className={cx(
          styles.icon,
          "flex justify-center items-center w-full px-5"
        )}
      >
        <button className="flex items-center font-semibold bg-white px-3 py-2 text-xs text-black rounded-full">
          Stream Now <FaPlayCircle size={20} className="mx-2" />
        </button>
      </div>
    </div>
  );
}
