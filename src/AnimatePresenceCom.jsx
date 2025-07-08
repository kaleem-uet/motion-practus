import { AnimatePresence, motion, useIsPresent ,domAnimation,LazyMotion} from "motion/react";
import { useState } from "react";
import * as m from "motion/react-m"
export default function AnimatePresenceCom() {
  const [show, setShow] = useState(true);
  const isPresent = useIsPresent()
  return (
    <div style={container}>
      <AnimatePresence initial={false}>
        {show ? (
          <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            style={box}
            key="box"
          ></m.div>
          </LazyMotion>
        ) : null}
      </AnimatePresence>

      <motion.button onClick={() => setShow(!show)} style={button}>
        Show
      </motion.button>
      {
        isPresent ? "Here!" : "Exiting..."
      }
      
   
    </div>
  );
}

const container = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  // width: "100%",
};
const button = {
  margin: "20px auto",
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
  padding: "10px 20px",
  color: "#0f1115",
};

const box = {
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
  padding: "10px 20px",
  color: "#0f1115",
  width: "100px",
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "20px",
};
