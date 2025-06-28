import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";

const ContactWithMeSection = () => {
  return (
    <section className="bg-[#212428] py-20 px-4 sm:px-6 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">Contact With Me</h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-5 gap-10">
          {/* Left Side - Contact Info */}
          <div className="bg-[#1c1e22] col-span-2 p-8 rounded-xl shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e]">
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
              alt="profile"
              className="rounded-md mb-6"
            />
            <h3 className="text-xl font-bold mb-1">Md. Abu Syeed Abdullah</h3>
            <p className="text-sm text-gray-400 mb-4">Front-End Developer</p>
            {/* <p className="text-sm text-gray-400 mb-4">
              I am available for freelance work. Connect with me and call in to
              my account.
            </p> */}

            <p className="text-sm text-gray-400">
              <span className="font-semibold text-white">Phone:</span> +880 1521751725
            </p>

            <p className="text-sm text-gray-400 mb-6">
              <span className="font-semibold text-white">Email:</span>{" "}
              abusyeedabdullah@gmail.com
            </p>

            <h4 className="uppercase text-sm text-gray-400 mb-3 font-semibold tracking-wide">
              Find with me
            </h4>
            <div className="flex gap-4">
              <div className="bg-[#212428] hover:bg-[#f9004d] hover:text-black p-3 rounded shadow-inner transition">
                <FaEnvelope />
              </div>
              <div className="bg-[#212428] hover:bg-[#f9004d] hover:text-black p-3 rounded shadow-inner transition">
                <FaFacebookF />
              </div>
              <div className="bg-[#212428] hover:bg-[#f9004d] hover:text-black p-3 rounded shadow-inner transition">
                <FaLinkedinIn />
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="bg-[#212428] col-span-3 p-8 rounded-xl shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">Your Name</label>
                <input
                  type="text"
                  className="bg-[#191b1e] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#f9004d] shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)_inset,_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)_inset]"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-gray-400 mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  className="bg-[#191b1e] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#f9004d] shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)_inset,_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)_inset]"
                  placeholder="Phone"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2">Email</label>
              <input
                type="email"
                className="bg-[#191b1e] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#f9004d] shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)_inset,_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)_inset]"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2">Subject</label>
              <input
                type="text"
                className="bg-[#191b1e] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#f9004d] shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)_inset,_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)_inset]"
                placeholder="Subject"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-2">Your Message</label>
              <textarea
                rows="5"
                className="bg-[#191b1e] text-white p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#f9004d] shadow-[1px_4px_2px_-3px_rgba(0,0,0,0.7)_inset,_-1px_-3px_3px_-2px_rgba(255,255,255,0.2)_inset]"
                placeholder="Type your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 mt-4 bg-gradient-to-br from-[#1e2024] to-[#23272b] shadow-[10px_10px_19px_#1c1e22,_-10px_-10px_19px_#262a2e] hover:bg-[#f9004d] hover:text-black transition rounded text-white font-semibold tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactWithMeSection;
