'use client'
import { FaCloudMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa6";
import { useTheme } from "next-themes";
import classNames from "classnames";
import { useEffect, useState } from "react";

const DarkLight = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null; // Prevents mismatched icons during hydration

    return (
        <div onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')} className="fixed top-4 right-4 w-12 h-[18px] rounded-full bg-[#808080] flex items-center">
            <span className={classNames(
                "w-7 h-7 flex items-center justify-center rounded-full transition-all duration-300",
                {
                    'bg-black': resolvedTheme === 'light',
                    'bg-white': resolvedTheme === 'dark',
                    'ml-5': resolvedTheme === 'dark'
                }
            )}
            >
                {resolvedTheme === 'light' ? (
                    <FaCloudMoon className="text-white" size={14} />
                ) : (
                    <FaSun className="text-black" size={14} />
                )}
            </span>
        </div>
    )
}
export default DarkLight;