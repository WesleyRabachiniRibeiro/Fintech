import React from "react";
import useFetch from "../Hooks/useFetch";

type IDataContext = {
  data: ISale[] | null;
  loading: boolean;
  error: string | null;
  startDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  endDate: string;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
}

export type ISale = {
  id: string;
  nome: string;
  data: string;
  preco: number;
  status: "pago" | "processando" | "falha";
  pagamento: string;
  parcelas: number | null;
}

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error("useData needs to be in DataContextProvider");
  return context;
};

function getDate(n: number) {
  const date = new Date();
  date.setDate(date.getDate() - n);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const [startDate, setStartDate] = React.useState(getDate(30));
  const [endDate, setEndDate] = React.useState(getDate(0));

  const { data, loading, error } = useFetch<ISale[]>(
    `https://data.origamid.dev/vendas/?inicio=${startDate}&end=${endDate}`
  );

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
