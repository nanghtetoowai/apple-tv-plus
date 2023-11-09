import React from "react";
// import styles from "./PackageCard.module.scss";

export function PackageCard({ title, timePeriod, description, btnText }) {
  return (
    <div className="text-white">
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="my-3 text-4xl font-bold">{timePeriod}</p>
      <div className="text-gray-400">{description}</div>
      <button className="bg-slate-50 text-black rounded-full py-3 px-4 mt-5 font-bold">
        {btnText}
      </button>
    </div>
  );
}
