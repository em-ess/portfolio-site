"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Profile() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.3,
            }}
          >
            <Image
              src="/headshot.png"
              alt="Michelle headshot"
              width="414"
              height="570"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.15rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
    </section>
  );
}
