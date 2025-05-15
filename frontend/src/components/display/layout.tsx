import React from "react";

interface LayoutProps {
    children: React.ReactNode;
    className?: string;
    }

    const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
        return (
            <div
            className={`relative w-full min-h-screen max-w-[560px] flex flex-col items-center mx-auto bg-bg-black   ${className}`}
            style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
            >
                {children}
            </div>
        );
};

export default Layout;
