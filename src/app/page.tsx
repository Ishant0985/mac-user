import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Motor Auto Care",
  description:
    "Motor Auto Care specializes in expert bike and e-bike repair services. From routine maintenance to advanced repairs, we ensure your ride is smooth and reliable. Visit us for top-notch service and quality care for your two-wheelers.",
  keywords: [
    "bike repair",
    "e-bike service",
    "motorcycle maintenance",
    "battery replacement",
    "two-wheeler servicing",
    "bike tuning",
    "professional bike repair",
  ],
  openGraph: {
    title: "Home - Motor Auto Care",
    description:
      "Get professional bike and e-bike repair services at Motor Auto Care. We provide expert maintenance, battery replacements, and complete servicing to keep your ride in top condition.",
    images: [
      {
        url: "/assets/images/hero-bg.jpg",
        width: 800,
        height: 600,
        alt: "Motor Auto Care - Expert Bike & E-Bike Repair",
      },
    ],
    type: "website",
    url: "https://motorautocare.com/",
    siteName: "Motor Auto Care",
  },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
    </>
  );
}
