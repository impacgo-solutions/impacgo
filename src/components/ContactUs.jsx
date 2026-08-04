import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Phone,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

import ContactCard from "./ContactCard";
import Footer from "./Footer";
import Header from "./Header";
import SEO from "../components/SEO";


const WEB3FORMS_ACCESS_KEY = "70949111-6e73-4de6-8dee-c571c73dee66";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  // status states: '' | 'sending' | 'success' | 'error'
  const [status, setStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("🟦 1. Submit clicked. Form data:", formData);

  setStatus("sending");
  setErrorMessage("");

  try {
    console.log("🟦 2. Calling Web3Forms with key:", WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        phone: formData.phone || "Not provided",
        message: formData.message,
        subject: `New Contact Form Submission from ${formData.name}`,
        from_name: "Impacgo Website Contact Form",
      }),
    });

    console.log("🟦 3. Response received. Status:", response.status, "OK:", response.ok);

    const data = await response.json();
    console.log("🟦 4. Response body:", data);

    if (response.ok && data.success) {
      console.log("✅ SUCCESS");
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setStatus(""), 6000);
    } else {
      console.log("❌ Web3Forms returned an error:", data.message);
      setStatus("error");
      setErrorMessage(data.message || "Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("❌ NETWORK / FETCH ERROR:", error);
    setStatus("error");
    setErrorMessage(
      "Failed to send message. Please check your internet connection or email us directly."
    );
  }
};

  // Scroll to top on route change
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };

  return (
    <div>
      <SEO
  title="Contact Impacgo Solutions | Microsoft Dynamics 365 Partner India"
  description="Get in touch with Impacgo Solutions — Microsoft Dynamics 365 and Power Platform implementation partner in India. Free consultation for D365FO, Impacgo ERP, MES, AI automation, and digital transformation."
  keywords="contact Impacgo Solutions, D365FO consultation India, Microsoft partner contact India, ERP consultation Visakhapatnam"
  path="/contact"
/>
      <ScrollToTop />
      <Header alwaysSolid />

      <section id="contact" className="py-20 bg-blue-50 min-h-screen">
        <div className="container mx-auto px-4 pt-16">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or want to discuss a project? Fill out the form
              below and we'll get back to you as soon as possible.
            </p>
          </div>

          <form
            className="max-w-lg mx-auto bg-white/70 backdrop-blur-xl border border-white/60 p-8 rounded-2xl shadow-glass"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="contactus-name" className="flex items-center mb-2 text-gray-700">
                <User className="mr-2 text-blue-600" size={20} />
                Name
              </label>
              <input
                id="contactus-name"
                type="text"
                name="name"
                className="w-full p-3 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/90 transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "sending"}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="contactus-email" className="flex items-center mb-2 text-gray-700">
                <Mail className="mr-2 text-blue-600" size={20} />
                Email
              </label>
              <input
                id="contactus-email"
                type="email"
                name="email"
                className="w-full p-3 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/90 transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "sending"}
                required
              />
            </div>

            {/* Phone (optional) */}
            <div className="mb-6">
              <label htmlFor="contactus-phone" className="flex items-center mb-2 text-gray-700">
                <Phone className="mr-2 text-blue-600" size={20} />
                Phone{" "}
                <span className="text-sm text-gray-500 ml-2">(optional)</span>
              </label>
              <input
                id="contactus-phone"
                type="tel"
                name="phone"
                className="w-full p-3 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/90 transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                disabled={status === "sending"}
              />
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="contactus-message" className="flex items-center mb-2 text-gray-700">
                <MessageSquare className="mr-2 text-blue-600" size={20} />
                Message
              </label>
              <textarea
                id="contactus-message"
                name="message"
                className="w-full p-3 bg-white/60 backdrop-blur-sm border border-white/80 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/90 transition-all duration-300 disabled:bg-gray-100 disabled:cursor-not-allowed"
                rows="4"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                disabled={status === "sending"}
                required
              ></textarea>
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 active:scale-95 transition-all duration-300 shadow-md disabled:bg-blue-400 disabled:cursor-not-allowed disabled:active:scale-100 flex items-center justify-center"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>

            {/* Success state */}
            {status === "success" && (
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                <CheckCircle2
                  className="text-green-600 mr-3 flex-shrink-0 mt-0.5"
                  size={20}
                />
                <div>
                  <p className="font-semibold text-green-800">
                    Message sent successfully!
                  </p>
                  <p className="text-sm text-green-700 mt-1">
                    Thank you for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error state */}
            {status === "error" && (
              <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                <AlertCircle
                  className="text-red-600 mr-3 flex-shrink-0 mt-0.5"
                  size={20}
                />
                <div>
                  <p className="font-semibold text-red-800">
                    Failed to send message
                  </p>
                  <p className="text-sm text-red-700 mt-1">
                    {errorMessage} You can also email us directly at{" "}
                    <a
                      href="mailto:bhushanedd@gmail.com"
                      className="underline font-medium"
                    >
                      bhushanedd@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>

        <ContactCard />
        <Footer />
      </section>
    </div>
  );
}
