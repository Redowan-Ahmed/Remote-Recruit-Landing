import { FaqItemProp } from "@/utility/type";

const FaqItem = ({title, details}: FaqItemProp) => {
  return (
    <div className="space-y-2 sm:space-y-3">
      <h3 className="font-medium text-sm sm:text-base lg:text-[1.188rem]">{title}</h3>
      <p className="font-normal text-sm sm:text-base lg:text-[1.188rem] text-[#11142DA4] leading-6 sm:leading-7 lg:leading-9">
        {details}
      </p>
    </div>
  );
};

export default FaqItem;
