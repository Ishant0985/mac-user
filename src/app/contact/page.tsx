import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Motor Auto Care",
  description:
    "Get in touch with Motor Auto Care for expert bike and e-bike repair services. Visit our shop or contact us for inquiries, appointments, and professional assistance.",
  keywords: [
    "contact Motor Auto Care",
    "bike repair inquiries",
    "e-bike service contact",
    "motorcycle repair support",
    "two-wheeler service booking",
    "bike shop contact",
    "bike maintenance consultation",
  ],
  openGraph: {
    title: "Contact Us - Motor Auto Care",
    description:
      "Have questions about bike or e-bike repairs? Contact Motor Auto Care for expert service, inquiries, and bookings. We're here to help keep your ride in top condition.",
    images: [
      {
        url: "/assets/images/contact-bg.jpg",
        width: 800,
        height: 600,
        alt: "Contact Motor Auto Care - Bike & E-Bike Repair Services",
      },
    ],
    type: "website",
    url: "https://motorautocare.com/contact",
    siteName: "Motor Auto Care",
  },
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
