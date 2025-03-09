import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import ResponsiveImage from "@/components/ui/images/ResponsiveImage";
import ThreeColumnImageGrid from "@/components/ui/images/ThreeColumnImageGrid";
import TwoColumnImageGrid from "@/components/ui/images/TwoColumnImageGrid";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title:
    "Adey ERP System - Utility Management",
  description: "The Adey ERP System includes a Utility Management module designed to streamline and optimize the administration of utility services, such as electricity, water, gas, and telecommunications.",
 icons: {
    icon: [
      {
        media: '(prefers-color-scheme:light)', 
        url: '/images/logo/favicon.ico', 
        href: '/images/logo/favicon.ico',
      },
       {
        media: '(prefers-color-scheme:dark)', 
         url: '/images/logo/favicon.ico', 
        href: '/images/logo/favicon.ico',
      }
    ],
  },
};


export default function Images() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Images" />
      <div className="space-y-5 sm:space-y-6">
        <ComponentCard title="Responsive image">
          <ResponsiveImage />
        </ComponentCard>
        <ComponentCard title="Image in 2 Grid">
          <TwoColumnImageGrid />
        </ComponentCard>
        <ComponentCard title="Image in 3 Grid">
          <ThreeColumnImageGrid />
        </ComponentCard>
      </div>
    </div>
  );
}
