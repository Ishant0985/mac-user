import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Motor Auto Care",
  description:
    "Learn more about Motor Auto Care – your trusted bike and e-bike repair service provider. Our expert team ensures quality service and top-notch maintenance for all two-wheelers.",
  keywords: [
    "about Motor Auto Care",
    "bike repair experts",
    "e-bike service team",
    "motorcycle maintenance professionals",
    "trusted bike mechanics",
    "bike shop history",
  ],
  openGraph: {
    title: "About Us - Motor Auto Care",
    description:
      "Discover the story behind Motor Auto Care. Learn about our mission, expert team, and dedication to providing high-quality bike and e-bike repair services.",
    images: [
      {
        url: "/assets/images/about-bg.jpg",
        width: 800,
        height: 600,
        alt: "About Motor Auto Care - Expert Bike & E-Bike Services",
      },
    ],
    type: "website",
    url: "https://motorautocare.com/about",
    siteName: "Motor Auto Care",
  },
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
