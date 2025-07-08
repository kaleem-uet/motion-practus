import { useScroll, motion, useSpring, Reorder } from "motion/react";
import { useState } from "react";

export default function ScrollAnimation() {
  const { scrollYProgress } = useScroll();
  const [items, setItems] = useState(food);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div style={container}>
      <motion.div
        style={{
          scaleX: scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
        }}
      />
      <Reorder.Group
        axis="y"
        onReorder={setItems}
        values={items}
      >
        {items.map((item, i) => (
          <Card 
            key={item[0]} 
            item={item} 
            i={i} 
            emoji={item[0]} 
            hueA={item[1]} 
            hueB={item[2]} 
          />
        ))}
      </Reorder.Group>
    </div>
  );
}

function Card({ item, i, emoji, hueA, hueB }) {
  return (
    <Reorder.Item value={item} id={item[0]}>
      <motion.div
        className="flex items-center gap-4 p-4 rounded-lg bg-white border border-neutral-200 mb-4"
        style={{
          background: `linear-gradient(to right, ${hue(hueA)}, ${hue(hueB)})`,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <span className="text-3xl">{emoji}</span>
        <span className="text-lg font-semibold">Food Item {i + 1}</span>
      </motion.div>
    </Reorder.Item>
  );
}

const hue = (h) => `hsl(${h}, 100%, 50%)`;
const container = {
  margin: "100px auto",
  maxWidth: 500,
  paddingBottom: 100,
  width: "100%",
};

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];