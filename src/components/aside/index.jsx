import { Menu } from "./style";

import { AiFillHome } from "react-icons/ai";
import { FaBuilding, FaDollarSign } from "react-icons/fa";
import { BsChatLeftTextFill, BsPlayBtnFill, BsGraphUp } from "react-icons/bs";
import {
  IoIosRocket,
  IoIosCalendar,
  IoIosShareAlt,
  IoIosChatbubbles,
} from "react-icons/io";
import { MdHomeRepairService, MdForum } from "react-icons/md";

const Aside = () => {
  return (
    <Menu>
      <h1>
        <b>bloxs</b> for business
      </h1>
      <div>
        <AiFillHome />
        <h3>Home</h3>
      </div>
      <section>
        <h2>Area do Empreendedor</h2>
        <div>
          <BsGraphUp />
          <h3>DashBoard</h3>
        </div>
        <div>
          <FaBuilding />
          <h3>Empresas</h3>
        </div>
        <div>
          <IoIosRocket />
          <h3>Projetos</h3>
        </div>
        <div>
          <IoIosChatbubbles />
          <h3>Chat</h3>
        </div>
        <div>
          <FaDollarSign />
          <h3>Proventos</h3>
        </div>
        <div>
          <IoIosShareAlt />
          <h3>Indicações</h3>
        </div>
      </section>
      <section>
        <h2>Comunidade</h2>
        <div>
          <MdForum />
          <h3>Fórum</h3>
        </div>
        <div>
          <BsPlayBtnFill />
          <h3>Academy</h3>
        </div>
        <div>
          <IoIosCalendar />
          <h3>Eventos</h3>
        </div>
        <div>
          <BsChatLeftTextFill />
          <h3>Notícias</h3>
        </div>
        <div>
          <MdHomeRepairService />
          <h3>Serviços</h3>
        </div>
      </section>
      <button>Submeter projeto</button>
    </Menu>
  );
};

export default Aside;
