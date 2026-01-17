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
        setTimeout(() => setStatus({ type: "", message: "" }), 8000);
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again.",
        });
      }
    } catch {
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
      className="min-h-screen flex items-center px-4 py-16 bg-[#F9F7F7] dark:bg-[#0F0F0F]"
    >
      <div
        className={`
          max-w-4xl mx-auto w-full
          transition-all duration-700 ease-out
          ${isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-center mb-14">
          <Mail className="w-9 h-9 mr-3 text-[#3F72AF]" />
          <h2 className="text-3xl sm:text-4xl font-bold text-[#112D4E] dark:text-[#F9F7F7]">
            Get In Touch
          </h2>
        </div>

        {/* Card */}
        <div className="rounded-xl bg-[#DBE2EF] dark:bg-[#161616] p-6 sm:p-8 lg:p-12 shadow-sm">
          <p className="text-center text-[#112D4E]/80 dark:text-[#F9F7F7]/80 mb-10 text-base sm:text-lg">
            Have a project in mind or want to collaborate? Feel free to reach
            out.
          </p>

          {/* Status */}
          {status.message && (
            <div
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                status.type === "success"
                  ? "bg-[#3F72AF]/10 text-[#3F72AF]"
                  : "bg-red-500/10 text-red-600"
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

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {["name", "email"].map((field) => (
              <div key={field}>
                <label className="block font-semibold mb-2 text-[#112D4E] dark:text-[#F9F7F7] capitalize">
                  {field}
                </label>
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="
                    w-full px-4 py-3 rounded-lg
                    bg-[#F9F7F7] dark:bg-[#0F0F0F]
                    text-[#112D4E] dark:text-[#F9F7F7]
                    border border-[#3F72AF]/40
                    focus:outline-none focus:border-[#3F72AF]
                    transition
                  "
                />
              </div>
            ))}

            <div>
              <label className="block font-semibold mb-2 text-[#112D4E] dark:text-[#F9F7F7]">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="
                  w-full px-4 py-3 rounded-lg resize-none
                  bg-[#F9F7F7] dark:bg-[#0F0F0F]
                  text-[#112D4E] dark:text-[#F9F7F7]
                  border border-[#3F72AF]/40
                  focus:outline-none focus:border-[#3F72AF]
                  transition
                "
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="
                w-full flex items-center justify-center gap-2
                bg-[#3F72AF] text-[#F9F7F7]
                py-3 rounded-lg font-semibold
                transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-lg
                disabled:opacity-70 disabled:cursor-not-allowed
              "
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Send Message <Send size={18} />
                </>
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-10 pt-8 border-t border-[#3F72AF]/30 text-center">
            <p className="text-sm text-[#112D4E]/70 dark:text-[#F9F7F7]/70 mb-3">
              Prefer direct contact?
            </p>
            <a
              href="mailto:shubham.gupta.stack@gmail.com"
              className="inline-flex items-center gap-2 font-semibold text-[#3F72AF] hover:underline"
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
