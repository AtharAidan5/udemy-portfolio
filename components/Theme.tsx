"use client";
import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import { ReactNode } from "react";

const Theme = ({ children }: { children: ReactNode }) => {
    const [state, setState] = useState(false)
    useEffect(() => {
        setState(true)
    }, [])
    if(!state) {
        return null;
    }
    return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
export default Theme;