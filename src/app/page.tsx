"use client";

import { useEffect } from "react";
import { Test } from "@/components/Teste";

export default function Home() {
  useEffect(() => {
    console.log("Ola mundo");
  }, []);
  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-xl font-bold text-blue-500">Page</h1>
      <Test />
    </main>
  );
}
