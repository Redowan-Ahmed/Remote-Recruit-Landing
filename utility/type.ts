export type FeatureProps = {
  flip?: boolean;
  badge: string;
  title: string;
  desc: string;
  image: string;
};

export type FaqItemProp = {
  title: string;
  details: string;
};

export interface FaqItemType {
  title: string;
  details: string;
}
export type PricingCardProps = {
  packagee: string;
  price: string | number;
  buttonName: string;
  buttonUrl: string;
  premium?: boolean;
  pricingList: PriceListItem[];
}
export interface PriceListItem{
  info: string;
  disabled?: boolean;
}


export interface PricingCard {
  package: string;
  price: string | number;
  buttonName: string;
  buttonUrl: string;
  premium?: boolean;
  pricingList: PriceListItem[];

}