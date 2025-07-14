import { ReactNode } from "react";

interface ServerLayoutProps {
  children: ReactNode;
}

/**
 * Server-side layout wrapper - handles SSR-friendly static elements
 * This component contains elements that don't need client-side JavaScript
 */
export default function ServerLayout({ children }: ServerLayoutProps) {
  return (
    <div className="min-h-screen">
      {/* Any static layout elements that can be server-rendered */}
      {children}
    </div>
  );
}
