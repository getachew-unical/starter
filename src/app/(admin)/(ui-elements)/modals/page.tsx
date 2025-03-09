import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import DefaultModal from "@/components/example/ModalExample/DefaultModal";
import FormInModal from "@/components/example/ModalExample/FormInModal";
import FullScreenModal from "@/components/example/ModalExample/FullScreenModal";
import ModalBasedAlerts from "@/components/example/ModalExample/ModalBasedAlerts";
import VerticallyCenteredModal from "@/components/example/ModalExample/VerticallyCenteredModal";
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

export default function Modals() {
  return (
    <div>
      <PageBreadcrumb pageTitle="Modals" />
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2 xl:gap-6">
        <DefaultModal />
        <VerticallyCenteredModal />
        <FormInModal />
        <FullScreenModal />
        <ModalBasedAlerts />
      </div>
    </div>
  );
}
