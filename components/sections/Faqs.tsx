import { FaqsData } from "@/utility/dummy-data";
import FaqItem from "@/components/FaqItem";
import Link from "next/link";
const Faqs = () => {
  return (
    <section className="container mx-auto mt-36">
      <h2 className="font-medium text-[2.5rem] mb-16">Common Questions</h2>

      <div className="space-y-10">
        {FaqsData.map((faq) => (
          <FaqItem
            key={faq.title}
            title={faq.title}
            details={faq.details}></FaqItem>
        ))}
        <div className="pt-10">
          <Link
            href={"/"}
            className="text-[#1E3E85] px-7 py-5 border-[#53B4DAB1] border-2 rounded-2xl font-semibold">
            More Questions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
