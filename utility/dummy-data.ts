import { FaqItemType, PricingCard } from "@/utility/type";
export const FaqsData: FaqItemType[] = [
  {
    title: "Do I have to sign a long-term contract?",
    details:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
  },
  {
    title: "Can I pay for a whole year?",
    details:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage",
  },
  {
    title: "What if I need help?",
    details:
      "Actually beard single-origin coffee, twee 90's PBR Echo Park sartorial try-hard freegan Portland ennui. Selvage jean shorts 90's, Vice American Apparel try-hard food truck Shoreditch fap lomo Wes Anderson. Art party Thundercats High Life Tumblr",
  },
];

export const PricingCardData: PricingCard[] = [
  {
    package: "Basic",
    price: "Free",
    buttonName: "Get Started",
    buttonUrl: "/",
    pricingList: [
      {
        info: "1 Active Job",
      },
      {
        info: "Basic List Placement",
      },
      {
        info: "Unlimited Job Applicants",
        disabled: true
      },
      {
        info: "Invite Anyone to Apply to Your Jobs",
        disabled: true
      },
    ],
  },
    {
    package: "Per Month",
    price: "$79.99",
    buttonName: "Get Started",
    premium: true,
    buttonUrl: "/",
    pricingList: [
      {
        info: "Unlimited Job Posts",
      },
      {
        info: "Instant Job Post Approval",
      },
      {
        info: "Premium List Placement",
      },
      {
        info: "Unlimited Job Applicants",
      },
    ],
  }
];
