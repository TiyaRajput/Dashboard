
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="fixed top-16 left-0 w-64 h-full bg-gray-900 text-white shadow-lg p-4 space-y-6">
      <ul>
      <li>
          <Link to="/" className="block text-lg py-3 text-center hover:text-blue-400">
    Dashboard
          </Link>
        </li>
        <li>
          <Link to="/courses" className="block text-lg py-3 text-center hover:text-blue-400">
      Courses
          </Link>
        </li>
        <li>
          <Link to="/enquiry-form" className="block text-lg py-3 text-center hover:text-blue-400">
            Enquiry Form
          </Link>
        </li>
        <li>
          <Link to="/enquiry-details" className="block text-lg py-3 text-center hover:text-blue-400">
         Teachers
          </Link>
        </li>
        <li>
          <Link to="/enquiry-details" className="block text-lg py-3 text-center hover:text-blue-400">
     Reports
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
