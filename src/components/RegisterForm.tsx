import React, { useState } from "react";
import axios from "axios";

const RegisterForm: React.FC = () => {
  // State to store input values
  const [formData, setFormData] = useState<{
    user: string;
    email: string;
    pwd: string;
    verify: number;
  }>({
    user: "",
    pwd: "",
    email: "",
    verify: 0,
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    console.log(formData.email);

    const data = async () => {
      await axios
        .post("http://192.168.1.210/verify", formData.email, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          window.location.href = "/";
          sessionStorage.setItem("x-access-token", response.data.token);
        });
    };

    data();
    // console.log(formData);
    // You can integrate an API call here for login authentication
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="user"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="user"
              name="user"
              value={formData.user}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="pwd"
              name="pwd"
              value={formData.pwd}
              onChange={handleInputChange}
              required
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 py-2 text-white transition duration-300 hover:bg-blue-700"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
