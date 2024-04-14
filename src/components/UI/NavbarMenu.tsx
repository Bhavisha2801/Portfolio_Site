"use client";
import React from "react";
import { motion } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  item,
  children,
}: {
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black text-blue-1000 hover:opacity-[0.9] dark:text-white font-normal text-base"
      >
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <nav
      className="relative rounded-full boder border-transparent dark:bg-black dark:border-white/[0.2] bg-cyan-500 bg-blend-color shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};
