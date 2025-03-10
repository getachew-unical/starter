import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { EcommerceMetrics } from "@/components/ecommerce/EcommerceMetrics";
import MonthlyTarget from "@/components/ecommerce/MonthlyTarget";
import MonthlySalesChart from "@/components/ecommerce/MonthlySalesChart";
import StatisticsChart from "@/components/ecommerce/StatisticsChart";
import RecentOrders from "@/components/ecommerce/RecentOrders";
import DemographicCard from "@/components/ecommerce/DemographicCard";

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

export default function Ecommerce() {
  return (
    // <div className="grid grid-cols-12 gap-4 md:gap-6">
    <div className="items-center flex flex-col gap-4 md:gap-6">
      <h1 className="text-red-600">Dashboard</h1>
      <p className="text-red-600">The Dashboard will be displayed here</p>
      <p className="text-red-600"> Like the images below</p>
              <Image className="mx-auto"
                width={1100}
                height={900}
                src="/images/dashboard.png"
                alt="dashboard"
              />

              <Image className="mx-auto"
                width={1100}
                height={900}
                src="/images/sample.png"
                alt="dashboard"
              />
      {/* <div className="col-span-12 space-y-6 xl:col-span-7">
        <EcommerceMetrics />

        <MonthlySalesChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <MonthlyTarget />
      </div>

      <div className="col-span-12">
        <StatisticsChart />
      </div>

      <div className="col-span-12 xl:col-span-5">
        <DemographicCard />
      </div>

      <div className="col-span-12 xl:col-span-7">
        <RecentOrders />
      </div> */}
    </div>
  );
}
