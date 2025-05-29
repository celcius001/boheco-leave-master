import React, { useState } from "react";
import axios from "axios";
import { encrypt } from "@/utils/crypto";

const LoginForm: React.FC = () => {
  // State to store input values
  const [formData, setFormData] = useState<{
    user: string;
    pwd: string;
  }>({
    user: "",
    pwd: "",
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    const data = async () => {
      await axios
        .post("https://bill-inquiry-api.onrender.com/api/v1/login", formData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          window.location.href = "/dashboard";
          sessionStorage.setItem("x-access-token", response.data.token);
          sessionStorage.setItem("id", encrypt(response.data.id));
        });
    };

    data();
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Login
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Username Field */}
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
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900"
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
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-900"
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

export default LoginForm;
