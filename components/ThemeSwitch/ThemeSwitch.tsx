import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const themeSwitcher = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <button onClick={themeSwitcher}>
      <div className="p-1.5 rounded-lg bg-neutral-700 desktop:mr-2 dark:bg-zinc-300">
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
      </div>
    </button>
  );
};

export default ThemeSwitch;
