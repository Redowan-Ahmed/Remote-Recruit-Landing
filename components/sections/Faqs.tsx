import { FaqsData } from "@/utility/dummy-data";
import FaqItem from "@/components/FaqItem";
import Link from "next/link";
const Faqs = () => {
  return (
    <section className="container mx-auto mt-16 sm:mt-24 lg:mt-36 px-4 sm:px-6 lg:px-8">
      <h2 className="font-medium text-2xl sm:text-3xl lg:text-[2.5rem] mb-8 sm:mb-12 lg:mb-16">Common Questions</h2>

      <div className="space-y-6 sm:space-y-8 lg:space-y-10">
        {FaqsData.map((faq) => (
          <FaqItem
            key={faq.title}
            title={faq.title}
            details={faq.details}></FaqItem>
        ))}
        <div className="pt-6 sm:pt-8 lg:pt-10">
          <Link
            href={"/"}
            className="inline-block text-[#1E3E85] px-5 sm:px-7 py-4 sm:py-5 border-[#53B4DAB1] border-2 rounded-2xl font-semibold text-sm sm:text-base">
            More Questions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
