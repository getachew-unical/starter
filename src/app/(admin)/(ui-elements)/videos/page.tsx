import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import VideosExample from "@/components/ui/video/VideosExample";
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


export default function VideoPage() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Videos" />

      <VideosExample />
    </div>
  );
}
