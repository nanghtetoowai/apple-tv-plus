import { React, useState } from "react";
import { useSpring, animated } from "react-spring";
import style from "./Faq.module.scss";
import { FaChevronDown } from "react-icons/fa";

export function Accordion(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };

  //conditional styling
  const styles = {
    //if open is true, change color of title
    accordionTitle: {
      color: open ? "#000" : "#000",
      fontWeight: "bold",
      fontSize: "23px",
    },
  };
  //open animation with react spring

  const openAnimation = useSpring({
    from: { opacity: "1", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "200px" : "25px" },
    config: { duration: "300" },
  });

  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#000",
    },
    to: {
      transform: open ? "rotate(180deg)" : "rotate(0deg)",
      color: open ? "#000" : "#000",
    },
    config: { duration: "120" },
  });

  return (
    <animated.div className={style.accordion__item} style={openAnimation}>
      {/* <div className={style.accordion__item} style={openAnimation}> */}
      <div className={style.accordion__header} onClick={toggleHandler}>
        <h4 style={styles.accordionTitle}>{props.title}</h4>
        <animated.i style={iconAnimation}>
          <FaChevronDown />
        </animated.i>
      </div>
      <div className={style.accordion__content}>{props.text}</div>
      {/* </div> */}
    </animated.div>
  );
}
