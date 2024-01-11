
import  { useState } from 'react';

import { Link } from "react-router-dom";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
    languages: [],
    role: '',
    grade: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLanguagesChange = (e) => {
    const selectedLanguages = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData({
      ...formData,
      languages: selectedLanguages,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call)
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Sign up to create an account
          </h2>
      <p className="mt-2 text-center text-sm text-gray-600 ">
            Already have an account?{" "}
            <Link
              to="/signin"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Login
            </Link>
          </p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="languages" className="block text-sm font-medium text-gray-600">
            Select Languages (Hold Ctrl/Cmd to select multiple):
          </label>
          <select
            id="languages"
            name="languages"
            multiple
            value={formData.languages}
            onChange={handleLanguagesChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Bengali">Bengali</option>
            <option value="Telugu">Telugu</option>
            <option value="Tamil">Tamil</option>
            <option value="Marathi">Marathi</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-600">
            Select Role:
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md"
            required
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Tutor">Tutor</option>
          </select>
        </div>

        {formData.role === 'Student' && (
          <div className="mb-4">
            <label htmlFor="grade" className="block text-sm font-medium text-gray-600">
              Grade:
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required={formData.role === 'Student'}
              disabled={formData.role !== 'Student'}
            />
          </div>
        )}

        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
