import { PricingCardProps } from "@/utility/type";
import Image from "next/image";
import Link from "next/link";

const CardPrice = ({
  packagee,
  buttonName,
  buttonUrl,
  price,
  pricingList,
  premium = false,
}: PricingCardProps) => {
  return (
    <div className="p-8 shadow-2xl shadow-[#3159D31F] rounded-3xl space-y-7 flex flex-col justify-between h-full bg-white">
      <div className="grid grid-cols-5 gap-8">
        <div className="bg-[#ECF2FF] flex-col place-content-center items-center text-center col-span-2 rounded-2xl relative">
          <h4
            className={`${premium ? "text-gradient" : "text-[#52B4DA]"} text-3xl font-semibold`}>
            {price}
          </h4>
          <h5 className="font-medium text-2xl text-[#11142D65]">{packagee}</h5>
          {premium ? (
            <div className="absolute -top-4 w-full flex justify-center ">
              <div className="flex gap-3 font-semibold text-center justify-center align-middle items-center py-1 pl-1 pr-4 rounded-full bg-[#C2EEFF]">
                <span className="pt-1.5 px-2.5 pb-0.5 bg-white rounded-full">
                  <Image
                    src={
                      "/images/ade7ac49f7fdef148a91c4fd4ad30d692d01437f (1).png"
                    }
                    width={16}
                    height={27}
                    alt="Premium Package"></Image>
                </span>{" "}
                Premium
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="col-span-3">
          <ul className="space-y-5">
            {pricingList.map((list) => (
              <li
                key={list.info}
                className={`flex gap-3 font-medium ${list.disabled ? "text-[#808191]" : ""}`}>
                <span>
                  {!list.disabled ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://w3.org">
                      <defs>
                        <linearGradient
                          id="customBgGradient"
                          x1="14%"
                          y1="0%"
                          x2="86%"
                          y2="100%">
                          <stop offset="5.63%" stopColor="#52B4DA" />
                          <stop offset="100%" stopColor="#1E3E85" />
                        </linearGradient>
                      </defs>

                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        fill="url(#customBgGradient)"
                      />

                      <path
                        d="M7 12.5l3.5 3.5 6-7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" fill="#e2e8f0" />
                      <path
                        d="M9 9l6 6M15 9l-6 6"
                        stroke="#94a3b8"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>

                {list.info}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center block">
        {
          !premium? (
              <Link className="gradient-link-rounded rounded-3xl p-5 block text-xl font-semibold text-[#1E3E85]" href={buttonUrl}>{buttonName}</Link>
          ):
          (
            <Link className="premium-price-button rounded-3xl p-5 block text-xl font-semibold text-white shadow-[#3159D347] shadow-2xl" href={buttonUrl}>{buttonName}</Link>     
          )
        }
        
      </div>
    </div>
  );
};

export default CardPrice;
