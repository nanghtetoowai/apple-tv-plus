import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./StudentPlan.module.scss";

export function StudentPlan() {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.col1}>
            <p className="text-black text-4xl">
              The Apple Music Student Plan comes with Apple TV+ for free.
              <sup>5</sup>
            </p>
            <button className="text-black mt-5">Try Apple Music free</button>
          </div>
          <div className={styles.col2}>
            <Image
              alt="bundle-apple"
              src="/images/student-plan.jpg"
              width={450}
              height={380}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
