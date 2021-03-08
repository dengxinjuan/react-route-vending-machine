import { Link } from "react-router-dom";
import Message from "./Message";

const Chips = () => {
  return (
    <div>
      <Message>
        I need to eat some Chips!
        <iframe
          src="https://giphy.com/embed/xT39Dl1AHieEwAobq8"
          width="480"
          height="480"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
        <p></p>
        <p>
          <Link to="/">Go Back!</Link>
        </p>
      </Message>
    </div>
  );
};

export default Chips;
