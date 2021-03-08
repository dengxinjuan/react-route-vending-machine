import { Link } from "react-router-dom";
import Message from "./Message";

const Tuna = () => {
  return (
    <div>
      <Message>
        You need to eat some tuna!
        <iframe
          src="https://giphy.com/embed/YT8woTY5Zqs7iUo5BS"
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

export default Tuna;
