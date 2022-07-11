import useNotice from "../../providers/notices";

import { SectionCards } from "./style";

import { FaBackward, FaForward } from "react-icons/fa";
import Card from "../card";

const DivCard = () => {
  const { energy, agro, loadEnergy, loadAgro } = useNotice();
  return (
    <SectionCards>
      <h2>Energia</h2>
      <div>
        <FaBackward />
        <ul>
          {loadEnergy ? (
            <>Carregando...</>
          ) : (
            energy.map((notice) => <Card key={notice.id} notice={notice} />)
          )}
        </ul>
        <FaForward />
      </div>
      <h2>Agronegocio</h2>
      <div>
        <FaBackward />
        <ul>
          {loadAgro ? (
            <>Carregando...</>
          ) : (
            agro.map((notice) => <Card key={notice.id} notice={notice} />)
          )}
        </ul>
        <FaForward />
      </div>
    </SectionCards>
  );
};

export default DivCard;
