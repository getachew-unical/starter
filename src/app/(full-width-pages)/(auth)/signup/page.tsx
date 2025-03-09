import SignUpForm from "@/components/auth/SignUpForm";
import GridShape from "@/components/common/GridShape";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

export default function SignUp() {
  return (
    <div className="relative flex w-full h-screen overflow-hidden bg-white z-1 dark:bg-gray-900">
      <SignUpForm />
      <div className="relative items-center justify-center flex-1 hidden p-8 z-1 bg-brand-950 dark:bg-white/5 lg:flex">
        {/* <!-- ===== Common Grid Shape Start ===== --> */}
        <GridShape />
        {/* <!-- ===== Common Grid Shape End ===== --> */}
        <div className="flex flex-col items-center max-w-xs">
          <Link href="" className="block mb-4">
            <Image
              src="/images/logo/favicon.ico"
              width={231}
              height={48}
              alt="Logo"
            />
          </Link>
          <p className="text-center text-gray-400 dark:text-white/60">
            Adey ERP System- Utility Management
          </p>
        </div>
      </div>
    </div>
  );
}
