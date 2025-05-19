"use client";
import { useTheme } from "next-themes";

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="sticky top-0 z-50 flex w-full justify-end p-10">
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="p-2"
      >
        {theme === "dark" ? "🌙" : "🌞"}
      </button>
    </div>
  );
};

export default Footer;
