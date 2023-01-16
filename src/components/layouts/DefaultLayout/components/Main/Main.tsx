import type { PropsWithChildren } from "react";
import type React from "react";

export const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex-1">
      <div className="m-auto max-w-screen-lg py-6 px-4">
        {children}
      </div>
    </main>
  )
}