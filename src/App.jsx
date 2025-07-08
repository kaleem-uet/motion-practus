import React from "react";
import { useState } from "react";
import "./App.css"; // Assuming you have a CSS file for styles
import * as motion from "motion/react-client"
import NavBar from "./NavBar";
import HoverCard from "./HoverCard";
import ScrollAnimation from "./ScrollAnimation";
import TransitionAnimation from "./TransitionAnimation";
import AnimatePresenceCom from "./AnimatePresenceCom";
const cardData = [
  {
    id: 1,
    title: "Learn React Fast",
    shortDesc: "Master React in 7 days.",
    longDesc: `
    This course helps you master the fundamentals of React including JSX, hooks, and component structure in just one week.This course helps you master the fundamentals of React including JSX, hooks, and component structure in just one week.This course helps you master the fundamentals of React including JSX, hooks, and component structure in just one week.
    This course helps you master the fundamentals of React including JSX, hooks, and component structure in just one week.This course helps you master the fundamentals of React including JSX, hooks, and component structure in just one week.This course helps you master the fundamentals of React including JSX, hooks, and component structure in just one week.
    This course helps you master the fundamentals of React including JSX, hooks, and component structure in just one week.This course helps you master the fundamentals of React including JSX, hooks, and component structure in just one week.This course helps you master the fundamentals of React including JSX, hooks, and component structure in just one week.`,
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/05/05/12/57/flowers-7176104_1280.jpg",
    status: "Play",
  },
  {
    id: 2,
    title: "Tailwind CSS Deep Dive",
    shortDesc: "Explore utility-first CSS.",
    longDesc: `Gain an in-depth understanding of Tailwind CSS to rapidly build modern UIs with responsive design and utility classes Gain an in-depth understanding of Tailwind CSS to rapidly build modern UIs with responsive design and utility classes.
    Gain an in-depth understanding of Tailwind CSS to rapidly build modern UIs with responsive design and utility classes.`,
    thumbnail:
      "https://cdn.pixabay.com/photo/2025/06/25/17/47/arrow-9680464_1280.jpg",
    status: "Play",
  },
  {
    id: 3,
    title: "JavaScript Mastery",
    shortDesc: "Advanced JS concepts.",
    longDesc: `Take your JavaScript skills to the next level by exploring closures, event loops, asynchronous programming, and design patterns.
      Take your JavaScript skills to the next level by exploring closures, event loops, asynchronous programming, and design patterns.
      Take your JavaScript skills to the next level by exploring closures, event loops, asynchronous programming, and design patterns.`,
    thumbnail:
      "https://cdn.pixabay.com/photo/2025/04/16/03/58/tulips-9536635_1280.jpg",
    status: "Play",
  },
  {
    id: 4,
    title: "UI/UX Fundamentals",
    shortDesc: "Design with intent.",
    longDesc:
      "Learn the key principles of UI and UX design to create user-friendly, accessible, and visually appealing digital products.",
    thumbnail:
      "https://cdn.pixabay.com/photo/2024/08/21/10/16/helenium-8985687_1280.jpg",
    status: "Play",
  },
];

const useOutsideClick = (ref, callback) => {
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};
export default function App() {
  const [selectedCard, setSelectedCard] = useState(null);
  const cardRef = React.useRef(null);
  useOutsideClick(cardRef, () => setSelectedCard(null));
  return (
    <div className="py-10  bg-gray-100 relative ">
    <NavBar/>
    <HoverCard/>
    <TransitionAnimation/>
<ScrollAnimation/>
<AnimatePresenceCom/>
      {selectedCard && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3  }} className="fixed z-10 inset-0 w-full  h-full bg-black/50 backdrop:blur-sm  "></motion.div>
      )}
      {selectedCard && (
        <motion.div
        layoutId={`card-${selectedCard.title}`}
          ref={cardRef}
          className="p-2 h-[500px] fixed inset-0 z-20 m-auto bg-white rounded-2xl w-72 border   border-neutral-200 overflow-hidden"
        >
          <motion.img
            layoutId={`thumbnail-${selectedCard.title}`}
            src={selectedCard.thumbnail}
            alt="Thumbnail"
            className="w-full border-b border-neutral-200 rounded-2xl "
          />
          <div className="flex flex-col justify-between items-start px-2">
            <div className=" flex items-start justify-between py-4 w-full gap-2">
              <div className="flex flex-col items-start gap-2">
                <h2 className="font-bold text-xs tracking-tight text-black">
                  {selectedCard.title}
                </h2>
                <p className="text-xs text-neutral-500">
                  {selectedCard.shortDesc}
                </p>
                <motion.p 
                  initial={{ filter: "blur(10px)",opacity: 0 }}
                  animate={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ delay: 0.3  }}
                  layoutId={`longDesc-${selectedCard.title}`}
                
                 className="h-50 overflow-auto  text-[10px] text-neutral-500 pb-20 [mask-image:linear-gradient(to_top,transparent,black,black)] ">
                  {selectedCard.longDesc}
                </motion.p>
              </div>
              <motion.div layoutId={`status-${selectedCard.title}`} className="px-2 py-1 bg-green-500 rounded-full text-white text-xs  ">
                {selectedCard.status}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
      <div className="max-w-lg mx-auto flex flex-col gap-5">
        {cardData.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}`}
            key={index}
            onClick={() => setSelectedCard(card)}
            className="p-4 w-[100%] rounded-lg cursor-pointer flex justify-between items-center bg-white border border-neutral-200"
          >
            <div className="flex items-center gap-4">
              <motion.img
                layoutId={`thumbnail-${card.title}`}
                src={card.thumbnail}
                alt="Thumbnail"
                className="w-12 h-12 rounded-lg"
              />
              <div >
                <h3 className="text-sm font-semibold">{card.title}</h3>
                <motion.p  layoutId={`shortDesc-${card.title}`} className="text-xs text-neutral-500">{card.shortDesc}</motion.p>
              </div>
            </div>
            <motion.div layoutId={`status-${card.title}`} className="bg-green-500 px-2 rounded-full text-white text-xs font-semibold">
              {card.status}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
