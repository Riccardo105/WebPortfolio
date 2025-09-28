/* this is the componenet for a feature that I offer, intended to be used as a flow cut off */

"use client";

import { motion } from "framer-motion";

export interface Feature {
  title: string;
  text: string;
}

interface Props {
  feature: Feature;
  direction?: "left" | "right"; // optional, default direction
}

export default function FeatureBlock({ feature, direction = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.6 }}
      className="w-full min-h-[170px]  bg-white rounded-3xl shadow-gray-800 shadow-[0_4px_10px_rgba(0,0,0,0.1)] text-[#333333] text-center p-6 font-serif"
    >
      <h2 className="text-3xl font-bold text-[#1A93C1]">{feature.title}</h2>
      <p className="text-lg font-semibold mt-2 mx-4 text-gray-700">
        {feature.text}
      </p>
    </motion.div>
  );
}
