import { useContext } from "react";
import { ColorContext } from "../../providers/theme";
import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { Btn } from "./style";

const BtnMode = () => {
  const { currentTheme, setCurrentTheme, getOpositeTheme } =
    useContext(ColorContext);
  return (
    <Btn onClick={() => setCurrentTheme(getOpositeTheme())}>
      {currentTheme === "light" ? <BsMoonFill /> : <FaSun />}
    </Btn>
  );
};

export default BtnMode;
