import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  let logo = "/logo_light.png";
  if (theme === "light") logo = "/logo.png";
  if (!mounted) logo = "/logo.png";
  return (
    <Link href="/" className="mx-4 w-[160px]">
      <Image src={logo} alt="logo" width={160} height={36} priority />
    </Link>
  );
};

export default Logo;
