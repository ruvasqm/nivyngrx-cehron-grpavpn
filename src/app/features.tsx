import React from "react";
import IconCard from "./iconCard";
const features = [
  {
    icon: "/message-chat-circle.svg",
    title: "Share team inboxes",
    description:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    alt: "message chat circle",
    iconWidth: 20,
    buttonLink: "/resources/shared-inboxes",
  },
  {
    icon: "/zap.svg",
    title: "Deliver instant answers",
    description:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    alt: "zap",
    buttonLink: "/resources/customer-service",
  },
  {
    icon: "/chart-breakout-square.svg",
    title: "Manage your team with reports",
    description:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    alt: "chart breakout square",
    buttonLink: "/resources/reports",
  },
];

const feature = () => {
  return (
    // instead of a flex div I need a grid, 1 column mobile, 3 desktop
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {features.map((feature, index) => (
        <IconCard
          key={index}
          src={feature.icon}
          alt={feature.alt}
          iconWidth={24}
          iconHeight={24}
          title={feature.title}
          description={feature.description}
          buttonText="Learn More"
          buttonLink={feature.buttonLink}
        />
      ))}
    </div>
  );
};

export default feature;
