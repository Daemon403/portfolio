import React from "react";

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#060312] text-gray-400 p-4">
      <div className="bg-[#0d061f] shadow-lg rounded-2xl p-8 w-full max-w-md border border-yellow-400">
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6 border-b-4 border-yellow-400 pb-2">
          Contact Me
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-300 font-medium">Name</label>
            <input
              type="text"
              className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-[#1a1228] text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-[#1a1228] text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-300 font-medium">Message</label>
            <textarea
              className="w-full mt-1 p-2 border border-gray-600 rounded-lg bg-[#1a1228] text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Your Message"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-[#060312] py-2 rounded-lg font-semibold hover:bg-yellow-500 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
