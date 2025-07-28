import { Link } from "react-router";

const Links = () => {
  return (
    <div className="flex flex-col gap-3 bg-yellow-100 p-4">
      <div>
        <h3 className="text-lg font-bold">MFE_1 links</h3>

        <ul>
          <li className="text-sm text-blue-500 hover:underline">
            <Link to="/mfe-1/home">Home</Link>
          </li>
          <li className="text-sm text-blue-500 hover:underline">
            <Link to="/mfe-1/showcase">Showcase</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
