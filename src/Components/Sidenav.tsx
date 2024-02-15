import summary from "../assets/icons/resumo.svg";
import sales from "../assets/icons/vendas.svg";
import webhooks from "../assets/icons/webhooks.svg";
import configs from "../assets/icons/configuracoes.svg";
import contact from "../assets/icons/contato.svg";
import exit from "../assets/icons/sair.svg";
import FintechSVG from "../assets/FintechSVG";
import { NavLink } from "react-router-dom";

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={summary} alt="Summary" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>
        <li>
          <span>
            <img src={sales} alt="Sales" />
          </span>
          <NavLink to="/sales">Vendas</NavLink>
        </li>
        <li>
          <span>
            <img src={webhooks} alt="Webhooks" />
          </span>
          <NavLink to="/">Webhooks</NavLink>
        </li>
        <li>
          <span>
            <img src={configs} alt="Configs" />
          </span>
          <NavLink to="/">Configurações</NavLink>
        </li>
        <li>
          <span>
            <img src={contact} alt="Contact" />
          </span>
          <NavLink to="/">Contato</NavLink>
        </li>
        <li>
          <span>
            <img src={exit} alt="Exit" />
          </span>
          <NavLink to="/">Sair</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
