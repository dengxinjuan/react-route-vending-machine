import { Link } from "react-router-dom";
import Message from "./Message";
import SodaImg from "./SodaImg.png";

const Soda = () => {
  return (
    <div>
      <Message>
        Soda!
        <div style={{ backgroundImage: `url(${SodaImg})`, height: "500px" }}>
          Soda!!!!
        </div>
        <p>
          <Link to="/">Go Back!</Link>
        </p>
      </Message>
    </div>
  );
};

export default Soda;
