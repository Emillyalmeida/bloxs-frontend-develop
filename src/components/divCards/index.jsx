import useNotice from "../../providers/notices";

import { SectionCards } from "./style";

import { FaBackward, FaForward } from "react-icons/fa";
import Card from "../card";

const DivCard = () => {
  const { energy, agro, loadEnergy, loadAgro, BeforePage, NextPage } =
    useNotice();
  return (
    <SectionCards>
      <h2>Energia</h2>
      <div>
        <FaBackward onClick={() => BeforePage("Energia")} />
        <ul>
          {loadEnergy ? (
            <>Carregando...</>
          ) : (
            energy.map((notice) => (
              <Card key={notice.id} notice={notice} category={energy} />
            ))
          )}
        </ul>
        <FaForward onClick={() => NextPage("Energia")} />
      </div>
      <h2>Agronegocio</h2>
      <div>
        <FaBackward onClick={() => BeforePage("Agro")} />
        <ul>
          {loadAgro ? (
            <>Carregando...</>
          ) : (
            agro.map((notice) => (
              <Card key={notice.id} notice={notice} category={energy} />
            ))
          )}
        </ul>
        <FaForward onClick={() => NextPage("Agro")} />
      </div>
    </SectionCards>
  );
};

export default DivCard;
