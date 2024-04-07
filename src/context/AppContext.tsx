"use client";

import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type ContextType = {
  isMobileClient: boolean | null;
  contrast: boolean;
  setContrast: Dispatch<SetStateAction<boolean>>;
};

const defaultContext: ContextType = {
  isMobileClient: null,
  contrast: false,
  setContrast: () => null,
};

const AppContext = createContext<ContextType>(defaultContext);

const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const [contrast, setContrast] = useState<boolean>(false);

  const isMobileClient = useClientMediaQuery("(max-width: 1020px)");

  return (
    <AppContext.Provider
      value={{
        isMobileClient,
        contrast,
        setContrast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
