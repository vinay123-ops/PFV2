import React, { useState } from 'react';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Contact = () => {

  const [formDetails, setFormDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({ success: false, message: '' });

  const onFormUpdate = (field, value) => {
    setFormDetails({
      ...formDetails,
      [field]: value
    });
    setStatus({ success: false, message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
      setStatus({ success: false, message: 'All fields are required!' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formDetails.email)) {
      setStatus({ success: false, message: 'Please enter a valid email address!' });
      return;
    }

    if (!/^\d{10}$/.test(formDetails.phone)) {
      setStatus({ success: false, message: 'Please enter a valid 10-digit phone number!' });
      return;
    }

    localStorage.setItem('formDetails', JSON.stringify(formDetails));
    setStatus({ success: true, message: 'Form submitted successfully!' });

    setFormDetails({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <TrackVisibility>
      {({ isVisible }) => (
        <section
          id="contact"
          className={`py-14 h-auto ${isVisible ? 'animate__animated animate__zoomIn animate__slow' : ''}`}
        >
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full md:w-1/2">
                <div>
                  <img
                    className="w-11/12"
                    src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    alt="Contact Us"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <div>
                  <h2 className="text-4xl font-bold mb-8 text-white">Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap -mx-1">
                      <div className="w-full sm:w-1/2 px-1 mb-3">
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formDetails.firstName}
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                          className="w-full bg-white/10 border border-white/50 rounded-lg text-white placeholder-white px-6 py-4 text-lg font-medium transition focus:border-white focus:text-white focus:outline-white"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 px-1 mb-3">
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formDetails.lastName}
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                          className="w-full bg-white/10 border border-white/50 rounded-lg text-white placeholder-white px-6 py-4 text-lg font-medium transition focus:border-white focus:text-white focus:outline-white"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 px-1 mb-3">
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formDetails.email}
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                          className="w-full bg-white/10 border border-white/50 rounded-lg text-white placeholder-white px-6 py-4 text-lg font-medium transition focus:border-white focus:text-white focus:outline-white"
                        />
                      </div>
                      <div className="w-full sm:w-1/2 px-1 mb-3">
                        <input
                          type="tel"
                          placeholder="Phone No."
                          value={formDetails.phone}
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                          className="w-full bg-white/10 border border-white/50 rounded-lg text-white placeholder-white px-6 py-4 text-lg font-medium transition focus:border-white focus:text-white focus:outline-white"
                        />
                      </div>
                      <div className="w-full px-1 mb-3">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          value={formDetails.message}
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                          className="w-full bg-white/10 border border-white/50 rounded-lg text-white placeholder-white px-6 py-4 text-lg font-medium transition focus:border-white focus:text-white focus:outline-white"
                        ></textarea>
                        <button
                          type="submit"
                          className="mr-8 w-[46rem] mt-4 font-bold text-white border border-white px-8 py-4 text-lg ml-4 bg-transparent transition-all duration-300 hover:bg-white hover:text-hibiscus-600 hover:border-hibiscus-600 relative"
                        >
                          <span>Submit</span>
                        </button>
                      </div>
                      {status.message && (
                        <div className="w-full px-1 mt-4">
                          <p className={status.success ? 'text-green-500' : 'text-red-500'}>{status.message}</p>
                        </div>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </TrackVisibility>
  );
};

export default Contact;
