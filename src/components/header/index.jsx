import { DivHeader } from "./style";

import { FaUserAlt, FaQuestion, FaBell } from "react-icons/fa";

const Header = ({ title }) => {
  return (
    <DivHeader>
      <h2>{title}</h2>
      <div>
        <FaBell />
        <FaQuestion />
        <div>
          <FaUserAlt />
        </div>
      </div>
    </DivHeader>
  );
};
export default Header;
