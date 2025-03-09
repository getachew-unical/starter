import SignUpForm from "@/components/auth/SignUpForm";
import { Metadata } from "next";
// import GridShape from "@/components/common/GridShape";
// import Image from "next/image";
// import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js SignUp Page | TailAdmin - Next.js Dashboard Template",
  description: "This is Next.js SignUp Page TailAdmin Dashboard Template",
  // other metadata
};

export default function SignUp() {
  return (
    <div>
      <SignUpForm />
      {/* <div className="relative items-center justify-center flex-1 hidden p-8 z-1 bg-brand-950 dark:bg-white/5 lg:flex">
        
        <GridShape />
        
        <div className="flex flex-col items-center max-w-xs">
          <Link href="" className="block mb-4">
            <Image
              src="/images/logo/auth-logo.svg"
              width={231}
              height={48}
              alt="Logo"
            />
          </Link>
          <p className="text-center text-gray-400 dark:text-white/60">
            Free and Open-Source Tailwind CSS Admin Dashboard Template
          </p>
        </div>
      </div> */}
    </div>
  );
}
