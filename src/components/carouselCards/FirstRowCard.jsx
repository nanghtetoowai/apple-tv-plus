import React from "react";
import { FaPlayCircle } from "react-icons/fa";

export function FirstRowCard({ category, title, link }) {
  return (
    <div
      className="rounded-lg h-96 bg-gray-400"
      style={{
        background: `url(${link}) no-repeat center`,
        width: 720,
      }}
    >
      <div
        className="flex justify-between items-center space-x-5 w-full px-5 text-white"
        style={{ width: '100%', position: "relative", top: "85%" }}
      >
        <p className="text-3xl font-semibold">
          {category} . <span className="text-2xl font-normal">{title}</span>
        </p>
        <button className="flex items-center bg-white p-3 text-xs text-black rounded-full">
          Stream Now <FaPlayCircle size={20} className="mx-2" />
        </button>
      </div>
    </div>
  );
}
