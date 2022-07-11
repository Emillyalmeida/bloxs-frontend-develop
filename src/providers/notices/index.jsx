import api from "../../services/api";
import { useCallback, useContext } from "react";
import { createContext, useState } from "react";

const useNotice = () => {
  const context = useContext(noticeContext);

  if (!context) {
    throw new Error(" useNotice must to be used within ");
  }

  return context;
};

export const noticeContext = createContext([]);

export const NoticeProvider = ({ children }) => {
  const [loadEnergy, setLoadEnergy] = useState(true);
  const [loadAgro, setLoadAgro] = useState(true);

  const [energy, setEnergy] = useState([]);
  const [agro, setAgro] = useState([]);

  const [pageEnergy, setPageEnergy] = useState(1);
  const [pageAgro, setPageAgro] = useState(1);

  const GetEnergy = useCallback(() => {
    setLoadEnergy(true);
    api
      .get(`?_embed=1&categories=74&page=${pageEnergy}&per_page=3`)
      .then((res) => {
        console.log(res.data);
        setEnergy(res.data);
        setLoadEnergy(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageEnergy]);

  const GetAgro = useCallback(() => {
    setLoadAgro(true);

    api
      .get(`?_embed=1&categories=76&page=${pageAgro}&per_page=3`)
      .then((res) => {
        console.log(res.data);
        setAgro(res.data);
        setLoadAgro(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageAgro]);

  const NextPage = (title) => {
    if (title === "Energia") {
      setPageEnergy(pageEnergy + 1);
      return GetEnergy();
    }

    setPageAgro(pageAgro + 1);
    return GetAgro();
  };

  const BeforePage = (title) => {
    if (title === "Energia") {
      if (pageEnergy !== 1) {
        setPageEnergy(pageEnergy - 1);
        return GetEnergy();
      }
    }
    if (pageAgro !== 1) {
      setPageAgro(pageAgro - 1);
      return GetAgro();
    }
  };
  return (
    <noticeContext.Provider
      value={{
        GetAgro,
        GetEnergy,
        energy,
        agro,
        loadAgro,
        loadEnergy,
        BeforePage,
        NextPage,
      }}
    >
      {children}
    </noticeContext.Provider>
  );
};

export default useNotice;
