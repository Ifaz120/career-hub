import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! We will get back to you soon.");
    e.target.reset();
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="w-11/12 mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900">Get In Touch</h2>
          <p className="text-gray-500 mt-2 text-lg">Have questions? Our counselors are here to help.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden">
          
          {/*Contact Info */}
          <div className="bg-primary p-10 text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Contact Information</h3>
            <p className="mb-8 opacity-90 text-lg">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full"><FaPhoneAlt /></div>
                <span>+880 1234 567 890</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full"><FaEnvelope /></div>
                <span>support@careerhub.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-4 rounded-full"><FaMapMarkerAlt /></div>
                <span>123 Career Blvd, Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/*  Contact Form */}
          <div className="p-10">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Your Name</span></label>
                <input type="text" placeholder="John Doe" className="input input-bordered w-full focus:outline-primary" required />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Email Address</span></label>
                <input type="email" placeholder="john@example.com" className="input input-bordered w-full focus:outline-primary" required />
              </div>

              <div className="form-control">
                <label className="label"><span className="label-text font-semibold">Message</span></label>
                <textarea className="textarea textarea-bordered h-32 focus:outline-primary" placeholder="How can we help you?" required></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full mt-4 text-white uppercase tracking-widest">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;