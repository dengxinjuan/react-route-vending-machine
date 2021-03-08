import { NavLink, Link } from "react-router-dom";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";
import Message from "./Message";

const VendingMachine = () => {
  return (
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}
    >
      <Message>
        This is a vending Machine!Would you like something to eat?
      </Message>

      <Message>
        <p>
          <Link exact to="/soda">
            Soda!
          </Link>
        </p>
        <p>
          <NavLink to="/Chips">Chips!</NavLink>
        </p>
        <p>
          <NavLink to="/Tuna">Tuna! </NavLink>
        </p>
      </Message>
    </div>
  );
};

export default VendingMachine;
