import useNotice from "../../providers/notices";

import { SectionCards } from "./style";

import { FaBackward, FaForward } from "react-icons/fa";
import Card from "../card";
import Skeleton from "../skeleton";

const DivCard = () => {
  const { energy, agro, loadEnergy, loadAgro, BeforePage, NextPage } =
    useNotice();
  return (
    <SectionCards>
      <h2>Energia</h2>
      <div>
        <FaBackward onClick={() => BeforePage("Energia")} />
        <ul>
          {loadEnergy
            ? [1, 2, 3].map((num) => <Skeleton key={num} />)
            : energy.map((notice) => (
                <Card key={notice.id} notice={notice} category={energy} />
              ))}
        </ul>
        <FaForward onClick={() => NextPage("Energia")} />
      </div>
      <h2>Agronegócio</h2>
      <div>
        <FaBackward onClick={() => BeforePage("Agro")} />
        <ul>
          {loadAgro
            ? [4, 5, 6].map((num) => <Skeleton key={num} />)
            : agro.map((notice) => (
                <Card key={notice.id} notice={notice} category={energy} />
              ))}
        </ul>
        <FaForward onClick={() => NextPage("Agro")} />
      </div>
    </SectionCards>
  );
};

export default DivCard;
