// import React from 'react'

const Sidebar = () => {
  return (
    <>
     <div className="w-1/3 h-screen bg-slate-950 md:flex flex-col  " > 
     <a  href="/" className="text-2xl ml-0 py-2 text-center text-white">
        Dashboard
      </a>
      <a href="/courses" className="text-2xl ml-0  py-2 text-center text-white">
      Courses
      </a>
      <a href="/enquiryForm" className="text-2xl ml-0 py-2 text-center text-white">
      EnquiryForm
      </a>
     </div>
    </>
   
  )
}

export default Sidebar

















// import React from "react";
// import { Link } from "react-router-dom";

// const Sidebar = () => {
//   return (
//     <div className="h-screen w-64 bg-gray-800 text-white fixed top-0 left-0">
//       <h2 className="text-2xl font-bold text-center py-4 border-b border-gray-700">
//         Dashboard
//       </h2>
//       <nav className="mt-4">
//         <ul className="space-y-2">
//           <li>
//             <Link
//               to="/courses"
//               className="block px-4 py-2 hover:bg-gray-700 rounded transition"
//             >
//               Courses
//             </Link>
//           </li>
//           <li>
//             <Link
//               to="/enquiryform"
//               className="block px-4 py-2 hover:bg-gray-700 rounded transition"
//             >
//               Enquiry Form
//             </Link>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;
