import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Booking = ({ event }: any) => {
  const Router = useRouter();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    nationality: "",
    countryResidence: "",
    documentType: "",
    documentNumber: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      // Save form data to the database or perform other necessary actions
      const response = await axios.post("/api/send-email", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        eventDetails: `Name: ${e.title}\nSession: ${e.session}\nDate: ${e.date}\nTime: ${e.time}`,
      });

      console.log("Email sent:", response.data.message);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        nationality: "",
        countryResidence: "",
        documentType: "",
        documentNumber: "",
      });
      // Redirect to a confirmation page or show a success message
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  return (
    <div className="my-10">
        <div className="bg-[#F6F6F6] px-8 py-10 rounded-2xl">
            <button
            className="text-[#881A38] ml-auto  block inria-serif-font text-[28px]"
            onClick={() => Router.push("/event")}
            >
            Back
            </button>
            <p className="text-[#881A38] mb-6  text-center md:text-left inria-serif-font text-[28px]">
            Event Information
            </p>
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                    </label>
                    <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                    </label>
                    <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    />
                </div>
                <div className="col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                    Date of Birth
                    </label>
                    <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                    Nationality
                    </label>
                    <input
                    type="text"
                    id="nationality"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="countryResidence" className="block text-sm font-medium text-gray-700">
                    Country of Residence
                    </label>
                    <input
                    type="text"
                    id="countryResidence"
                    name="countryResidence"
                    value={formData.countryResidence}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">
                    Document Type
                    </label>
                    <input
                    type="text"
                    id="documentType"
                    name="documentType"
                    value={formData.documentType}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    />
                </div>
                <div className="col-span-2 sm:col-span-1">
                    <label htmlFor="documentNumber" className="block text-sm font-medium text-gray-700">
                    Document Number
                    </label>
                    <input
                    type="text"
                    id="documentNumber"
                    name="documentNumber"
                    value={formData.documentNumber}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                    />
                </div>
                <button
                    type="submit"
                    className="col-span-2 sm:col-span-2 bg-indigo-600 py-2 px-4 rounded-md text-white font-medium hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                >
                    Book Now
                </button>
                </form>

        </div>
    </div>
  );
};

export default Booking;
