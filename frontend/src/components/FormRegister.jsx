import { useState } from "react";
import { inscription } from "../services/Api";

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
        <div className="col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="firstName"
              className="text-gray-700 font-semibold mb-1"
            >
              First name <span className="text-red-500">*</span>
            </label>
            <label
              htmlFor="firstName"
              className="text-gray-700 font-semibold mb-1"
            >
              <span className="text-red-500">*</span> الاسم
            </label>
          </div>
          <input
            required
            type="text"
            id="firstName"
            name="firstn"
            value={formData.firstn}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
          />
        </div>

        <div className="col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="lastName"
              className="text-gray-700 font-semibold mb-1"
            >
              Last name <span className="text-red-500">*</span>
            </label>
            <label
              htmlFor="lastName"
              className="text-gray-700 font-semibold mb-1"
            >
              <span className="text-red-500">*</span> اللقب
            </label>
          </div>
          <input
            required
            type="text"
            id="lastName"
            name="lastn"
            value={formData.lastn}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
          />
        </div>

        <div className="col-span-2">
          <div className="flex justify-between">
            <label htmlFor="email" className="text-gray-700 font-semibold mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <label htmlFor="email" className="text-gray-700 font-semibold mb-1">
              <span className="text-red-500">*</span> البريد الإلكتروني
            </label>
          </div>
          <input
            required
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
          />
        </div>

        <div className="col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="mobile"
              className="text-gray-700 font-semibold mb-1"
            >
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <label
              htmlFor="mobile"
              className="text-gray-700 font-semibold mb-1"
            >
              <span className="text-red-500">*</span> رقم الهاتف
            </label>
          </div>
          <input
            required
            type="text"
            id="mobile"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter mobile number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
          />
        </div>

        <div className="col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="academicLevel"
              className="text-gray-700 font-semibold mb-1"
            >
              Academic Level <span className="text-red-500">*</span>
            </label>
            <label
              htmlFor="academicLevel"
              className="text-gray-700 font-semibold mb-1"
            >
              <span className="text-red-500">*</span> المستوى الدراسي
            </label>
          </div>
          <input
            required
            type="text"
            id="academicLevel"
            name="academiclevel"
            value={formData.academiclevel}
            onChange={handleChange}
            placeholder="Enter your academic level"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
          />
        </div>

        <div className="col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="speciality"
              className="text-gray-700 font-semibold mb-1"
            >
              Speciality <span className="text-red-500">*</span>
            </label>
            <label
              htmlFor="speciality"
              className="text-gray-700 font-semibold mb-1"
            >
              <span className="text-red-500">*</span> التخصص
            </label>
          </div>
          <input
            required
            type="text"
            id="speciality"
            name="speciality"
            value={formData.speciality}
            onChange={handleChange}
            placeholder="Enter your speciality"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
          />
        </div>

        <div className="col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="faculty"
              className="text-gray-700 font-semibold mb-1"
            >
              The Faculty you study at <span className="text-red-500">*</span>
            </label>
            <label
              htmlFor="faculty"
              className="text-gray-700 font-semibold mb-1"
            >
              <span className="text-red-500">*</span> الكلية التي تدرس بها
            </label>
          </div>
          <input
            required
            type="text"
            id="faculty"
            name="faculty"
            value={formData.faculty}
            onChange={handleChange}
            placeholder="Enter faculty"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
          />
        </div>

        <div className="col-span-2">
          <div className="flex justify-between">
            <label htmlFor="hobby" className="text-gray-700 font-semibold mb-1">
              Hobby <span className="text-red-500">*</span>
            </label>
            <label htmlFor="hobby" className="text-gray-700 font-semibold mb-1">
              <span className="text-red-500">*</span> الهواية
            </label>
          </div>
          <input
            required
            type="text"
            id="hobby"
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
            placeholder="Enter your hobby"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
          />
        </div>

        <div className="col-span-2">
          <div className="flex justify-between">
            <label
              htmlFor="clubAnswer"
              className="text-gray-700 font-semibold mb-1"
            >
              What do you know about Badrat Khayr Club?{" "}
              <span className="text-red-500">*</span>
            </label>
            <label
              htmlFor="clubAnswer"
              className="text-gray-700 font-semibold mb-1"
            >
              <span className="text-red-500">*</span> ماذا تعرف عن نادي بذرة
              خير؟
            </label>
          </div>
          <textarea
            id="clubAnswer"
            name="club"
            value={formData.club}
            onChange={handleChange}
            placeholder="Write your answer"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#18A67A]"
          />
        </div>

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
