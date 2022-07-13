import { BsMoonFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";

import useTheme from "../../providers/theme";

import { Btn } from "./style";

const BtnMode = () => {
  const { currentTheme, setCurrentTheme, getOpositeTheme } = useTheme();
  return (
    <Btn onClick={() => setCurrentTheme(getOpositeTheme())}>
      {currentTheme === "light" ? <BsMoonFill /> : <FaSun />}
    </Btn>
  );
};

export default BtnMode;
