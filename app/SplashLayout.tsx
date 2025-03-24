"use client";

import dynamic from "next/dynamic";

const SplashHandler = dynamic(() => import("./components/SplashHandler"), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-gray-100" />,
});

export default function SplashLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SplashHandler>{children}</SplashHandler>;
}
