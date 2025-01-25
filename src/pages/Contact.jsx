import React, { useState } from "react";
import { motion } from "framer-motion";
import { TextField, Button } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div
      id="Contact"
      className="lg:border-4 border-blue-100 rounded-2xl py-16 px-4 sm:px-6 lg:px-8 mt-5"
    >
      <div className="max-w-7xl mx-auto ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-[#C7C8CC] sm:text-5xl md:text-6xl mb-10">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600">
            Get in touch with us for any questions or concerns
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#758694] rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#373A40',
                  color: '#C7C8CC',
                  paddingX: 8,
                  paddingY: 3,
                  borderRadius: '9px', // Full rounded
                  '&:hover': {
                    backgroundColor: '#2c2f34', // Darker shade for hover state
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-[#758694] rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 ">
              Contact Information
            </h2>
            <div className="space-y-4">
              {/* Address */}

              <div>
                <h3 className="text-lg font-medium text-[#C7B7A3]">Address</h3>
                <p className="text-gray-600">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=123+Fitness+Street,+Gym+City,+GC+12345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C7C8CC] underline"
                  >
                    123 Fitness Street, Gym City, GC 12345
                  </a>
                </p>
                <p className="text-gray-600">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=123+Fitness+Street,+Gym+City,+GC+12345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C7C8CC] underline"
                  >
                    123 Fitness Street, Gym City, GC 12345
                  </a>
                </p>
                <p className="text-gray-600">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=123+Fitness+Street,+Gym+City,+GC+12345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C7C8CC] underline"
                  >
                    123 Fitness Street, Gym City, GC 12345
                  </a>
                </p>
              </div>

              {/* Phone Number */}
              <div>
                <h3 className="text-lg font-medium text-[#C7B7A3]">Phone</h3>
                <a
                  href="tel:+15551234567"
                  className="text-[#C7C8CC] md:hidden underline"
                >
                  +1 (555) 123-4567
                </a>
                <p className="text-[#C7C8CC] hidden md:block ">+1 (555) 123-4567</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-lg font-medium text-[#C7B7A3]">Email</h3>
                <p className="text-[#C7C8CC]">info@yourgym.com</p>
              </div>

              {/* Open and close hours */}
              <div>
                <h3 className="text-lg font-medium text-[#C7B7A3]">Hours</h3>
                <p className="text-[#C7C8CC]">
                  Monday - Friday: 6:00 AM - 10:00 PM
                </p>
                <p className="text-[#C7C8CC]">
                  Saturday - Sunday: 8:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
