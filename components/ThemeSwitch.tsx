"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Loader, Moon, Sun } from "lucide-react";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Loader className=" animate-spin" />;

  if (resolvedTheme === "dark") {
    return <Sun onClick={() => setTheme("light")} />;
  }

  if (resolvedTheme === "light") {
    return <Moon onClick={() => setTheme("dark")} />;
  }

  return <div>ThemeSwitch</div>;
};

export default ThemeSwitch;
