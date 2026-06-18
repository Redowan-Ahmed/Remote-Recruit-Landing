"use client";

import { motion, useReducedMotion } from "motion/react";
import CardPrice from "../CardPrice";
import { PricingCardData } from '@/utility/dummy-data'

const FooterPricing = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="mt-20 md:mt-52 w-11/12 md:w-9/12 mx-auto -mb-20 md:-mb-20 lg:-mb-52 z-20 px-4 sm:px-0">
        <motion.h2
          className="text-center font-semibold text-2xl sm:text-3xl lg:text-[2.5rem] mb-8 sm:mb-12"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={prefersReducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Help Is One Click Away
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {
                PricingCardData.map((data, i)=>(
                    <motion.div
                      key={data.package}
                      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.92 }}
                      whileInView={prefersReducedMotion ? {} : { opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
                    >
                        <CardPrice packagee={data.package} buttonName={data.buttonName}  buttonUrl={data.buttonUrl} price={data.price} pricingList={data.pricingList} premium={data.premium}  />
                    </motion.div>
                ))
            }
        </div>
    </div>
  )
}

export default FooterPricing