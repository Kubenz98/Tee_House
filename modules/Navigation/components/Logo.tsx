import Link from "next/link";
import Image from "next/image";
import React, { useLayoutEffect, useState } from "react";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setMounted(true);
  }, []);

  let logo = "/logo.png";
  if (theme === "dark") logo = "/logo_light.png";
  if (!mounted) {
    return null
  }
  return (
    <Link href="/" className="mx-4 w-[160px]">
      <Image src={logo} alt="logo" width={160} height={36} priority />
    </Link>
  );
};

export default Logo;
