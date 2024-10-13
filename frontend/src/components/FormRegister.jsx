import { useState } from "react";
import { inscription } from "../services/Api";
import { formFields } from "../services/Details";

const FormRegister = () => {
  const [formData, setFormData] = useState({
    firstn: "",
    lastn: "",
    email: "",
    phone: "",
    academiclevel: "",
    speciality: "",
    faculty: "",
    hobby: "",
    club: "",
  });

  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await inscription(formData);
      if (response) {
        setMessage("Registration successful!");
        setShowModal(true);
        setFormData({
          firstn: "",
          lastn: "",
          email: "",
          phone: "",
          academiclevel: "",
          speciality: "",
          faculty: "",
          hobby: "",
          club: "",
        });
        setTimeout(() => {
          setShowModal(false);
          setMessage("");
        }, 3000);
      }
    } catch (error) {
      setMessage("An error occurred during registration.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center text-green-bk mb-2">
        Register Now!
      </h1>
      <p className="text-center text-gray-600 mb-8">
        to be a part of the team.
      </p>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-x-4 gap-y-6 mb-6"
      >
        {formFields.map((field) => (
          <div key={field.id} className="col-span-2">
            <div className="flex justify-between">
              <label
                htmlFor={field.id}
                className="text-gray-700 font-semibold mb-1"
              >
                {field.label}{" "}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <label
                htmlFor={field.id}
                className="text-gray-700 font-semibold mb-1"
              >
                {field.required && <span className="text-red-500">*</span>}{" "}
                {field.arabicLabel}
              </label>
            </div>
            {field.type === "textarea" ? (
              <textarea
                required={field.required}
                id={field.id}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
              />
            ) : (
              <input
                required={field.required}
                type={field.type}
                id={field.id}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
              />
            )}
          </div>
        ))}
        <div className="text-center col-span-2">
          <button
            type="submit"
            className="bg-green-bk text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#148563] transition"
          >
            Register
          </button>
        </div>
      </form>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="bg-green-100 p-6 rounded-lg shadow-lg">
            <p className="text-center text-green-600 font-bold">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormRegister;
