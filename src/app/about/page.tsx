"use client"

import { useEffect, useState } from "react";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { db } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

const AboutPage = () => {
  const [breadcrumbDescription, setBreadcrumbDescription] = useState("");

  useEffect(() => {
    const fetchBreadcrumbDescription = async () => {
      const querySnapshot = await getDocs(collection(db, "aboutBreadcrumb"));
      const data = querySnapshot.docs.map((doc) => doc.data());
      if (data.length > 0) {
        setBreadcrumbDescription(data[0].description);
      }
    };
    fetchBreadcrumbDescription();
  }, []);

  return (
    <>
      <Breadcrumb pageName="About Us" description={breadcrumbDescription} />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
