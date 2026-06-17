import CardPrice from "../CardPrice";
import { PricingCardData } from '@/utility/dummy-data'

const FooterPricing = () => {
  return (
    <div className="mt-20 md:mt-52 w-11/12 md:w-9/12 mx-auto -mb-52 z-20">
        <h2 className="text-center font-semibold text-[2.5rem] mb-12">Help Is One Click Away</h2>

        <div className="grid grid-cols-2 gap-10">
            {
                PricingCardData.map((data)=>(
                    <CardPrice key={data.package} packagee={data.package} buttonName={data.buttonName}  buttonUrl={data.buttonUrl} price={data.price} pricingList={data.pricingList} premium={data.premium}  />
                ))
            }
        </div>
    </div>
  )
}

export default FooterPricing