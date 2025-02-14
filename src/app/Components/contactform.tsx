'use client'
import { useState } from "react";
import React from 'react';
import { Spin } from 'antd';

export default function ContactForm() {
  const [status, setStatus] = useState<string | JSX.Element>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus(<Spin />);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✔");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        });
      } else {
        setStatus("Failed to send email.");
      }
    } catch (error) {
      setStatus(`Error: ${error instanceof Error ? error.message : "Unknown error"}`);
    } finally {
      setTimeout(() => setIsSubmitting(false), 2000); // Reset button after 2s
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 mb-1">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={formData.firstName}
              required onChange={handleChange}
              placeholder="Enter First Name"
              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-gray-700 mb-1">Last Name:</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              required onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1 lg:mt-10">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={formData.email}
              required onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-1 lg:mt-10">Phone Number:</label>
            <input
              type="text"
              id="phone"
              placeholder="Enter Phone Number"
              value={formData.phone}
              required onChange={handleChange}
              className="border border-gray-300 rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="text-center pt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-black transition-all"
          >
            {isSubmitting ? status : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
}
