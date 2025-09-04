'use client'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteLoaderWrapper({ children }) {
    const pathname = usePathname();
    const [isRouteChanging, setIsRouteCHanging] = useState(false);

  useEffect(() => {
    setIsRouteCHanging(true);  

    const timeout = setTimeout(() => {
      setIsRouteCHanging(false);
    }, 500);
  
    return () => clearTimeout(timeout);
}, [pathname]);

  return(
    <>
        {isRouteChanging && (
                <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center transition-opacity duration-300 ease-out">
                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                </div>
            )}
            {children}
    </>
  )
} 