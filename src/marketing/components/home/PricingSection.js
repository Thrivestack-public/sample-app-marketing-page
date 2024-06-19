import React from "react";
import { CheckCircleIcon } from "@heroicons/react/20/solid";
import { thriveSignupUrl } from "../../../constants";
import HotspotTooltip from "../hotspotTooltip/HotspotTooltip";
import { textConstants } from "../../../textConstants";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    href: thriveSignupUrl,
    price: { monthly: "$0", annually: "$0" },
    description: "Everything necessary to get started.",
    features: [
      "5 products",
      "Up to 1,000 subscribers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    name: "Essential",
    id: "tier-essential",
    href: thriveSignupUrl,
    price: { monthly: "$30", annually: "$24" },
    description:
      "Everything in Basic, plus essential tools for growing your business.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automations",
    ],
  },
  {
    name: "Growth",
    id: "tier-growth",
    href: thriveSignupUrl,
    price: { monthly: "$60", annually: "$48" },
    description:
      "Everything in Essential, plus collaboration tools and deeper insights.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
      "Custom reporting tools",
    ],
  },
];

export default function PricingSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            {textConstants.PRICING_SECTION_CHIP_TEXT}
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            {textConstants.PRICING_SECTION_TITLE}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {textConstants.PRICING_SECTION_DESCRIPTION}
          </p>
        </div>
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier, idx) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3
                  id={tier.id}
                  className="text-base font-semibold leading-7 text-gray-900"
                >
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">
                    {tier.price.monthly}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {tier.price.annually} per month if paid annually
                </p>
                {idx === 1 ? (
                  <HotspotTooltip
                    label={textConstants.PRICING_BUTTON_HOTSPOT_TOOLTIP_TITLE}
                    text={textConstants.PRICING_BUTTON_HOTSPOT_TOOLTIP_TEXT}
                    placement="bottom"
                    number={textConstants.PRICING_BUTTON_HOTSPOT_TOOLTIP_NUMBER}
                    isComingSoon
                  >
                    <a
                      href={tier.href + `?tier=${tier.id}`}
                      aria-describedby={tier.id}
                      className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Signup
                    </a>
                  </HotspotTooltip>
                ) : (
                  <a
                    href={tier.href + `?tier=${tier.id}`}
                    aria-describedby={tier.id}
                    className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Signup
                  </a>
                )}
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
