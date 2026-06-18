import { FeatureProps } from "@/utility/type";
import Image from "next/image";

const Feature = ({flip=false, badge, title, desc,  image}:FeatureProps) => {
  return (
    <section className={`flex flex-wrap md:flex-nowrap gap-8 sm:gap-12 lg:gap-28 ${flip? 'flex-row-reverse': 'flex-row'} px-4 sm:px-6`}>
      <div className="flex-1/2 place-content-center">
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
      </div>
      <div className="flex-1/2 flex justify-center align-middle items-center select-none">
        <Image
          src={image}
          width={451}
          height={500}
          alt={title}
          className="w-full h-auto max-w-[451px]"
        />
      </div>
    </section>
  );
};

export default Feature;
