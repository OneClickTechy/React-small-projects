import { useEffect, useState } from "react";

const ToggleTheme = () => {
  const defaultTheme = "light";
  const [theme, setTheme] = useState(() => {
    const findTheme = localStorage.getItem("theme") || defaultTheme;
    console.log(localStorage);
    return findTheme;
  });
  const handleToggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    
    // root.classList.contains("dark-mode")
    //   ? root.classList.remove("dark-mode")
    //   : root.classList.add("dark-mode");
    //   console.log(root.classList);
  };
  
  useEffect(() => {
    localStorage.setItem("theme", theme);
    console.log(localStorage);
    const root = document.documentElement;
    theme === "dark"
      ? root.classList.add("dark-mode")
      : root.classList.remove("dark-mode");
      console.log(root)
  }, [theme]);

  return (
    <section
      className={`bg-background text-text w-full min-h-screen flex justify-center items-center flex-col gap-4`}
    >
      <h1 className="">Toggle Theme </h1>
      <button onClick={handleToggleTheme}>Change Theme</button>
    </section>
  );
};

export default ToggleTheme;
