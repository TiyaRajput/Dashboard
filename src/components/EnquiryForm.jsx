import React, { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
const EnquiryForm = () => {
  const [demo, setDemo] = useState(["yes", "no"]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNo: "",
    course: "",
    demo: "",
  });
  const [editingEnquiry, setEditingEnquiry] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const storedEnquiries = localStorage.getItem("enquiries");
    if (storedEnquiries) {
      setEnquiries(JSON.parse(storedEnquiries));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEnquiry) {
      const updatedEnquiries = enquiries.map((enquiry) =>
        enquiry.id === editingEnquiry.id
          ? { ...formData, id: enquiry.id }
          : enquiry
      );
      setEnquiries(updatedEnquiries);
      localStorage.setItem("enquiries", JSON.stringify(updatedEnquiries));
      setEditingEnquiry(null);
    } else {
      const newEnquiry = { ...formData, id: enquiries.length + 1 };
      const updatedEnquiries = [...enquiries, newEnquiry];
      setEnquiries(updatedEnquiries);
      localStorage.setItem("enquiries", JSON.stringify(updatedEnquiries));
    }
    setFormData({ name: "", email: "", contactNo: "", course: "", demo: "" });
    setIsOpen(false);
  };

  const editStudent = (enquiry) => {
    setFormData(enquiry);
    setEditingEnquiry(enquiry);
    setIsOpen(true);
  };

  return (
    <>
      <button
        onClick={() => {
          setFormData({
            name: "",
            email: "",
            contactNo: "",
            course: "",
            demo: "",
          });
          setEditingEnquiry(null);
          setIsOpen(true);
        }}
        className="bg-black text-white p-2 rounded mt-3"
      >
        Add Enquiry
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg
">
      
          </div>
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-6 text-center">
              {editingEnquiry ? "Edit Enquiry" : "Add Enquiry"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block">Contact:</label>
                <input
                  type="text"
                  name="contactNo"
                  value={formData.contactNo}
                  onChange={handleChange}
                  required
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block">Course:</label>
                <input
                  type="text"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="border p-2 w-full"
                />
              </div>
              <div>
                <label className="block">Demo:</label>
                <select
                  name="demo"
                  value={formData.demo}
                  onChange={handleChange}
                  className="border p-2 w-full"
                >
                  <option value=""></option>
                  {demo.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex justify-between">
                {/* <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="bg-gray-500 text-white p-2 rounded"
                >
                  Cancel
                </button> */}
                <button
                  type="submit"
                  className="bg-black text-white p-2 rounded"
                >
                  {editingEnquiry ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-2xl font-bold text-center mb-6">Enquiry Details</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">S.No</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Contact</th>
              <th className="border p-2">Course</th>
              <th className="border p-2">Demo</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {enquiries.map((enquiry, index) => (
              <tr key={enquiry.id}>
                <td className="border p-2">{index + 1}</td>
                <td className="border p-2">{enquiry.name}</td>
                <td className="border p-2">{enquiry.email}</td>
                <td className="border p-2">{enquiry.contactNo}</td>
                <td className="border p-2">{enquiry.course}</td>
                <td className="border p-2">{enquiry.demo}</td>
                <td className="border p-2">
                  <button
                    onClick={() => editStudent(enquiry)}
                    className="px-2 bg-green-800 text-white rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EnquiryForm;
