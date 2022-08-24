import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>That page cannot be found</p>
      <Link to="/">
        <button className="back">Back to the Homepage...</button>
      </Link>
    </div>
  );
};

export default NotFound;
