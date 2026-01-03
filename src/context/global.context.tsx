import { createContext, useContext, useState, type ReactNode } from "react";

//Si yo tengo que compartir informacion entre componentes que no son 
//padre hijo sino hermanos debo de usar el contexto
//En el caso donde sean padre hijo deberiamos de usar Composition Pattern

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

export const GlobalContextProvider = ({ children }: GlobalProviderProps) => {
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

    if (!context.value && context.value !== 0) {
        throw new Error("useGlobalContext must be used within a GlobalContextProvider");
    }

    return context;
}
