import React, {useState} from "react";
import {useTrail, a} from "@react-spring/web";
import styles from "./style.module.css";

const Trail = ({open, children}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: {mass: 10, tension: 2500, friction: 300},
    opacity: open ? 1 : 0.6,
    x: open ? 0 : 0,
    height: open ? 300 : 0,
    from: {opacity: 0, x: 64, height: 0},
  });
  return (
    <div>
      {trail.map(({height, ...style}, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{height}}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function LandingTitle() {
  const [open, set] = useState(true);
  return (
    <div className={styles.container} onClick={() => set((state) => !state)}>
      <Trail open={open}>
        <span>Smart</span>
        <span>Financial</span>
        <span>Service</span>
      </Trail>
    </div>
  );
}
