import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { COUNTRIES } from "@/helper/utilities";

const Booking = ({ type, name, session, date, time }: any) => {
  const Router = useRouter();

  const countryOptions = COUNTRIES;

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

  const [disableButton, setDisableButton] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setDisableButton(true);
    try {
      await axios.post(
        "https://qm-qa-api-uat.microsysx.com/api/EmailService/Send",
        {
          emailTo: formData.email,
          emailBody: `<p>Thank you for the reservation</p>
        <p>Event Details:</p>
        <p>Name: ${name}</p>
        <p>Session: ${session.title}</p>
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>`,
        }
      );
      // Save form data to the database or perform other necessary actions
      // const response = await axios.post("/api/send-email", {
      //   firstName: formData.firstName,
      //   lastName: formData.lastName,
      //   email: formData.email,
      //   dob: formData.dob,
      //   nationality: formData.nationality,
      //   countryResidence: formData.countryResidence,
      //   documentType: formData.documentType,
      //   documentNumber: formData.documentNumber,
      //   event_name:name,
      //   event_session:session.title,
      //   event_date:date,
      //   event_time:time
      // });

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

      window.location.href =
        "https://pay.microsysx.com/Checkout/PaymentCheckout?o=DFtm8Kjm/44J5jzFeNooYRjSvHwu+mYndCrQH4TzNkZfA8jWvj+6ytKKq3T6eYEGXD4fUphVyIFBgQp/CJ3vDI338q8UQsY0TxfuzqDGY8B0bAlJmisbcVLxYQ7DdbPq9sIYc9q+z8aGaTZjF4WoHg==";
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      setDisableButton(false);
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
          Personal Information
        </p>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
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
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="dob"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="nationality"
              className="block text-sm font-medium text-gray-700"
            >
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
            <label
              htmlFor="countryResidence"
              className="block text-sm font-medium text-gray-700"
            >
              Country of Residence
            </label>
            <select
              id="countryResidence"
              name="countryResidence"
              value={formData.countryResidence}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              <option value="" disabled>
                Select Country
              </option>
              {countryOptions.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="documentType"
              className="block text-sm font-medium text-gray-700"
            >
              Document Type
            </label>
            <select
              id="documentType"
              name="documentType"
              value={formData.documentType}
              onChange={handleChange}
              className="mt-1 p-2 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            >
              <option value="" disabled>
                Select Document Type
              </option>
              <option value="Identity Card">Identity Card</option>
              <option value="Passport Number">Passport Number</option>
            </select>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="documentNumber"
              className="block text-sm font-medium text-gray-700"
            >
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
          {disableButton ? (
            <button
              disabled={disableButton}
              type="submit"
              className="col-span-2 mt-5 sm:col-span-2 bg-[#d3d3d3] py-2 px-4 rounded-md text-black font-medium hover:bg-[#d3d3d3] focus:outline-none focus:ring  focus:ring-opacity-50"
            >
              "Submitting ...."
            </button>
          ) : (
            <button
              disabled={disableButton}
              type="submit"
              className="col-span-2 mt-5 sm:col-span-2 bg-[#881A38] py-2 px-4 rounded-md text-white font-medium hover:bg-[#881A38] focus:outline-none focus:ring  focus:ring-opacity-50"
            >
              {type}
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Booking;
