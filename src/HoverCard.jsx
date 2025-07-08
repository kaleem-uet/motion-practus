import React from "react";
import * as motion from "motion/react-client";

const cardData = [
  {
    id: 1,
    title: "Learn React Fast",
  },
  {
    id: 2,
    title: "Tailwind CSS Deep Dive",
  },
  {
    id: 3,
    title: "JavaScript Mastery",
  },
  {
    id: 4,
    title: "UI/UX Fundamentals",
  },
  {
    id: 5,
    title: "Advanced CSS Techniques",
  },
  {
    id: 6,
    title: "Node.js for Beginners",
  },
  {
    id: 7,
    title: "Full Stack Development",
  },
  {
    id: 8,
    title: "React Native Essentials",
  },
  {
    id: 9,
    title: "GraphQL in Depth",
  },
  {
    id: 10,
    title: "TypeScript Mastery",
  },
];
export default function HoverCard() {
  const [selectedCard, setSelectedCard] = React.useState(null);
  return (
    <div className=" flex flex-col items-center justify-center bg-gray-100 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-2">
        {cardData.map((card, index) => (
          <a key={index} className="relative group w-full h-full p-2"
          onMouseEnter={() => setSelectedCard(card)}
          onMouseLeave={() => setSelectedCard(null)}
          >
          {selectedCard && selectedCard.id === card.id && (
                <motion.div layoutId="hoverBackground" initial={{ opacity:0 }} animate={{ opacity:1,transition:{
                    duration:0.3
                } }}
                exit={{ opacity:0,transition:{duration:0.3}}}
                 className="w-full h-full absolute inset-0 bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-2xl "></motion.div>
              )}
            <div
              
              className=" cursor-pointer rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20  text-white "
            >
              <p className="text-xs text-neutral-500 group-hover:text-white transition-all duration-300">
                {card.title}
              </p>
              
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
