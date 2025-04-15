import React from "react";
import Sidebar from "@/Components/Sidebar";
import Topbar from "@/Components/Topbar";

export default function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-full flex-col dark:bg-gray-800 bg-gray-50">
      {/* BAGIAN TOPBAR */}
      <div className="w-full">
        <Topbar />
      </div>

      {/* BAGIAN KONTEN UTAMA DENGAN SIDEBAR */}
      <div className="flex flex-1 overflow-hidden">
        <div className="w-[260px] dark:border-r-slate dark:bg-gray-950">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto p-6 dark:bg-gray-950 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
