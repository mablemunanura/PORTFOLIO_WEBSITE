import React, { useState } from "react";
import { Mail, PhoneCall } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Replace with your EmailJS credentials
    const SERVICE_ID = "service_d465fvt";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const USER_ID = "YOUR_PUBLIC_KEY";

    emailjs.send(SERVICE_ID, TEMPLATE_ID, formData, USER_ID)
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.error("Email sending error:", error);
          setSending(false);
        }
      );
  };

  return (
    <section className="w-screen min-h-screen bg-[#f7f5f3] px-6 md:px-20 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-[#264E36] text-center mb-12">
        Contact Me
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-16">
        {/* LEFT: Contact Info */}
        <div className="flex-1 flex flex-col justify-start space-y-8 items-center md:items-start">
          <h3 className="text-xl md:text-2xl font-semibold text-[#264E36] mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-700 text-base md:text-lg mb-4 text-center md:text-left">
            I’m always open to discussing new projects, creative ideas, or opportunities. Let’s connect!
          </p>

          {/* Pills container */}
          <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto justify-center md:justify-start items-center">
            {/* Call Me Pill */}
            <div className="flex flex-col items-center px-8 py-6 rounded-2xl bg-green-500/20 backdrop-blur-md border border-green-400/30 shadow-lg w-60">
              <PhoneCall size={28} className="mb-2 text-green-800" />
              <span className="font-semibold text-base md:text-lg text-green-900">Call Me</span>
              <span className="text-sm md:text-base mt-1 text-green-800">+256 700 000 000</span>
            </div>

            {/* Email Me Pill */}
            <div className="flex flex-col items-center px-8 py-6 rounded-2xl bg-green-500/20 backdrop-blur-md border border-green-400/30 shadow-lg w-60">
              <Mail size={28} className="mb-2 text-green-800" />
              <span className="font-semibold text-base md:text-lg text-green-900">Email Me</span>
              <span className="text-sm md:text-base mt-1 text-green-800">mablemunanura@gmail.com</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="flex-1 relative pl-6 border-l-2 border-[#BB9476]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BB9476]/70 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="flex-1 px-4 py-3 rounded border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BB9476]/70 transition"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BB9476]/70 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 rounded border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#BB9476]/70 transition"
              required
            />
            <button
              type="submit"
              disabled={sending}
              className="px-6 py-3 bg-[#264E36] text-white font-medium rounded w-full md:w-auto"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
            {success && (
              <p className="text-green-600 mt-2 font-medium text-center">
                ✅ Your message has been sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
