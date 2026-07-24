"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/auth.store";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const logged=useAuthStore(state=>state.logged);
  const router=useRouter();

  useEffect(()=>{
    if(logged){
      router.replace("/dashboard");
    }
  },[logged]);
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#F3F4F6",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </main>
    );
}