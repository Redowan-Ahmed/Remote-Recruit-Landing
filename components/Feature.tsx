"use client";

import { motion, useReducedMotion } from "motion/react";
import { FeatureProps } from "@/utility/type";
import Image from "next/image";

const Feature = ({flip=false, badge, title, desc,  image}:FeatureProps) => {
  const prefersReducedMotion = useReducedMotion();

  const textDirection = flip ? "slide-right" : "slide-left";
  const imageDirection = flip ? "slide-left" : "slide-right";

  const hidden = { opacity: 0, x: 0, y: 0 };
  if (!prefersReducedMotion) {
    if (textDirection === "slide-left") { hidden.x = -40; }
    else { hidden.x = 40; }
    if (imageDirection === "slide-right") { hidden.x = 40; }
    else { hidden.x = -40; }
  }

  const visible = { opacity: 1, x: 0, y: 0 };

  return (
    <section className={`flex flex-wrap md:flex-nowrap gap-8 sm:gap-12 lg:gap-28 ${flip? 'flex-row-reverse': 'flex-row'} px-4 sm:px-6`}>
      <motion.div
        className="flex-1/2 place-content-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0, x: textDirection === "slide-left" ? -40 : 40 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="wrape">
          <h4 className="bg-feature-badge inline rounded-[1.125rem] py-2.5 px-5 text-[0.75rem] font-semibold">
            {badge}
          </h4>
          <h2 className="mt-9 mb-8 font-medium text-2xl sm:text-3xl lg:text-[2.5rem]">
            {title}
          </h2>
          <p className="font-normal text-sm sm:text-base lg:text-[1.188rem] text-[#11142DA4] leading-7 sm:leading-8 lg:leading-9">
            {desc}
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex-1/2 flex justify-center align-middle items-center select-none"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0, x: imageDirection === "slide-right" ? 40 : -40 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      >
        <Image
          src={image}
          width={451}
          height={500}
          alt={title}
          className="w-full h-auto max-w-[451px]"
        />
      </motion.div>
    </section>
  );
};

export default Feature;
