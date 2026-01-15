import React, { useState } from "react";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const API_URL = "https://portfolio-backend-xncd.onrender.com/api/contact";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields" });
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({
          type: "success",
          message:
            "Message sent successfully. Check your email for confirmation.",
        });

        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 8000);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      console.error("API Error:", error);
      setStatus({
        type: "error",
        message: "Server error. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 bg-white dark:bg-gray-900"
    >
      <div
        className={`max-w-4xl mx-auto w-full transition-all duration-1000 ${
          isVisible.contact
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex items-center justify-center mb-10 sm:mb-16">
          <Mail size={36} className="text-blue-600 mr-3 sm:w-12 sm:h-12" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8 lg:p-12 border border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-10 text-base sm:text-lg lg:text-xl">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>

          {status.message && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 animate-fade-in ${
                status.type === "success"
                  ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700"
                  : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-700"
              }`}
            >
              {status.type === "success" ? (
                <CheckCircle size={20} />
              ) : (
                <AlertCircle size={20} />
              )}
              <p className="text-sm sm:text-base">{status.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="Your Name"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600"
                placeholder="your.email@example.com"
                required
                disabled={isSubmitting}
              />
            </div>

            <div>
              <label className="block text-gray-900 dark:text-white font-semibold mb-2">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-600 resize-none"
                placeholder="Your message here..."
                required
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                isSubmitting
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-blue-700"
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  Send Message <Send size={20} className="ml-2" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <p className="text-sm text-blue-800 dark:text-blue-300 flex items-start gap-2">
              <Mail size={16} className="mt-0.5" />
              You will receive a confirmation email after submitting this form.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-600 text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
              Prefer direct contact?
            </p>
            <a
              href="mailto:shubham.gupta.stack@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:underline font-semibold flex items-center justify-center gap-2"
            >
              <Mail size={16} />
              shubham.gupta.stack@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
