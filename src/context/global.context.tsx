import { createContext, useContext, useState, type ReactNode } from "react";

interface GlobalContextType {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const EmptyGlobalState: number = 0;

export const GlobalContext = createContext<GlobalContextType>({
  value: 0,
  setValue: () => {},
});

interface GlobalProviderProps {
  children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [value, setValue] = useState<number>(EmptyGlobalState);

  return (
    <GlobalContext.Provider
      value={{ value, setValue }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
    const context = useContext(GlobalContext);

    if (context.value === 0) {
        throw new Error("useGlobalContext must be used within a GlobalProvider");
    }

    return context;
}
