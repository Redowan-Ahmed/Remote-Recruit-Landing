"use client";

import { motion, useReducedMotion } from "motion/react";
import { FaqsData } from "@/utility/dummy-data";
import FaqItem from "@/components/FaqItem";
import Link from "next/link";

const Faqs = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="container mx-auto mt-16 sm:mt-24 lg:mt-36 px-4 sm:px-6 lg:px-8">
      <motion.h2
        className="font-medium text-2xl sm:text-3xl lg:text-[2.5rem] mb-8 sm:mb-12 lg:mb-16"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
        whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Common Questions
      </motion.h2>

      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {FaqsData.map((faq, i) => (
          <motion.div
            key={faq.title}
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
          >
            <FaqItem
              title={faq.title}
              details={faq.details} />
          </motion.div>
        ))}
        <motion.div
          className="pt-6 sm:pt-8 lg:pt-10"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: FaqsData.length * 0.1 }}
        >
          <Link
            href={"/"}
            className="inline-block text-[#1E3E85] px-5 sm:px-7 py-4 sm:py-5 border-[#53B4DAB1] border-2 rounded-2xl font-semibold text-sm sm:text-base transition-all duration-200 hover:bg-[#1E3E85] hover:text-white">
            More Questions
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Faqs;
