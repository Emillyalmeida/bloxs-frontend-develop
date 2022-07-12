import { useCallback, useContext } from "react";
import { createContext, useState } from "react";

const useTheme = () => {
  const context = useContext(ColorContext);

  if (!context) {
    throw new Error(" useTheme must to be used within ");
  }

  return context;
};

export const ColorContext = createContext([]);

export const ColorProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  );
  return (
    <ColorContext.Provider
      value={{ currentTheme, setCurrentTheme, getOpositeTheme }}
    >
      {children}
    </ColorContext.Provider>
  );
};

export default useTheme;
