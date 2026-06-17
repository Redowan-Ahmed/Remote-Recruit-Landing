import { FaqItemProp } from "@/utility/type";

const FaqItem = ({title, details}: FaqItemProp) => {
  return (
    <div className="space-y-3">
      <h3 className="font-medium text-[1.188rem]">{title}</h3>
      <p className="font-normal text-[1.188rem] text-[#11142DA4] leading-9">
        {details}
      </p>
    </div>
  );
};

export default FaqItem;
