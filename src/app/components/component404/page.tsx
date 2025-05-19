"use client";
import { useTheme } from "next-themes";
import Image from "next/image";

const Component404 = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex flex-col justify-center items-center h-80% mt-20 gap-10">
      <Image
        src={"/404.png"}
        alt="error404"
        width={200}
        height={200}
        className={theme === "dark" ? "invert-0" : "invert"}
      />
      <p className="justify-center items-center">
        Opa, parece que não tem nada por aqui
      </p>
    </div>
  );
};

export default Component404;
