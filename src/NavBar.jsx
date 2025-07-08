import React from "react";
import * as motion from "motion/react-client";

const navItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "Blog",
    path: "/blog",
  },
];
export default function NavBar() {
  const [activeIndex, setActiveIndex] = React.useState(null);
  return (
    <nav className="p-4">
      <div className="max-w-xl mx-auto bg-gray-400 rounded-full text-back flex items-center justify-between px-4 py-2">
        {navItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => {
              setActiveIndex(index);
            }}
            onMouseLeave={() => {
              setActiveIndex(null);
            }}
            className="w-full relative group text-center py-3 text-xs text-neutral-500"
          >
            <p
              href={item.path}
              className="relative group-hover:text-neutral-400 text-white z-20"
            >
              {item.title}
            </p>
            {activeIndex === index && (
              <motion.div
                layoutId="hover"
                className="absolute inset-0 bg-black rounded-full  text-white "
              ></motion.div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
