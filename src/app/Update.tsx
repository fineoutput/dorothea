"use client";
import React, { useEffect, useState } from "react";

function UpdateProvider({ children }: { children: React.ReactNode }) {
  const [website, setWebsite] = useState({
    isLive: true,
  });
  useEffect(() => {
    const checkWebsiteStatus = async () => {
      const res = await fetch("/api/check-website-status", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const website = await res.json();
      setWebsite(website);
    };
    checkWebsiteStatus();
  }, []);

  return (
    <>
      {website.isLive && <>{children}</>}
      {!website.isLive && (
        <div className="flex flex-col items-center justify-center h-screen">
          <div className="flex flex-col items-center justify-center w-[90%] md:w-[70%] lg:w-[50%] rounded-lg border border-gray-300 p-8 text-center gap-8">
            <h1 className="text-2xl font-bold">
              Oops! Something went wrong with your Hosting Server.
            </h1>
            <p className="text-xs text-gray-300">Please try again later.</p>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateProvider;
