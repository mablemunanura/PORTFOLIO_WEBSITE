import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Mail, Phone } from "lucide-react";

emailjs.init("THBbeTRg3I_SIvpNN");

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (sent) {
      const timer = setTimeout(() => setSent(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [sent]);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setSent(false);
    setError(null);

    const nameInput = formRef.current.querySelector<HTMLInputElement>(
      "input[name='name']"
    );
    const emailInput = formRef.current.querySelector<HTMLInputElement>(
      "input[name='email']"
    );
    const subjectInput = formRef.current.querySelector<HTMLInputElement>(
      "input[name='subject']"
    );
    const messageInput = formRef.current.querySelector<HTMLTextAreaElement>(
      "textarea[name='message']"
    );

    if (!nameInput || !emailInput || !subjectInput || !messageInput) {
      setError("Form fields not found!");
      setSending(false);
      return;
    }

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      subject: subjectInput.value,
      message: messageInput.value,
    };

    try {
      await emailjs.send(
        "service_d465fvt",
        "template_zrhn5ue",
        formData,
        "THBbeTRg3I_SIvpNN"
      );
      setSent(true);
      formRef.current.reset();
    } catch (err) {
      console.error("Email sending error:", err);
      setError("Message failed to send. Please check your EmailJS setup.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="min-h-screen px-6 py-20 bg-[#f7f5f3]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-[#264E36] mb-12 text-shadow-lg">
          Contact Me
        </h2>

        <div className="flex flex-col lg:flex-row lg:space-x-8">
          {/* CONTACT CARDS */}
          <div className="flex flex-col space-y-6 mb-10 lg:mb-0 lg:w-1/3">
            <div className="flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-gray-300 shadow-lg">
              <Phone className="mb-2 text-[#264E36]" size={28} />
              <p className="font-semibold text-[#264E36]">Call me</p>
              <p className="text-gray-700 mt-1">+256 759 656 324</p>
            </div>

            <div className="h-0.5 bg-[#BB9476] w-full lg:hidden"></div>

            <div className="flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-gray-300 shadow-lg">
              <Mail className="mb-2 text-[#264E36]" size={28} />
              <p className="font-semibold text-[#264E36]">Email me</p>
              <p className="text-gray-700 mt-1">mablemunanura@gmail.com</p>
            </div>
          </div>

          {/* VERTICAL DIVIDER */}
          <div className="hidden lg:block w-0.5 bg-[#BB9476]"></div>

          {/* CONTACT FORM */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white/20 backdrop-blur-md border border-gray-300 rounded-2xl p-8 space-y-5 lg:w-2/3 shadow-lg flex flex-col"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                name="name"
                required
                placeholder="Your name"
                className="border border-gray-300 rounded-md p-3 w-full
                  placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-[#BB9476]"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Your email"
                className="border border-gray-300 rounded-md p-3 w-full
                  placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-[#BB9476]"
              />
            </div>

            <input
              name="subject"
              required
              placeholder="Subject"
              className="border border-gray-300 rounded-md p-3 w-full
                placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-[#BB9476]"
            />

            <textarea
              name="message"
              required
              rows={5}
              placeholder="Your message"
              className="border border-gray-300 rounded-md p-3 w-full flex-1
                placeholder-gray-500
                focus:outline-none focus:ring-2 focus:ring-[#BB9476]"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-[#264E36] text-white py-3 rounded-md transition hover:bg-[#1f3a27]"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>

            {sent && (
              <p className="text-green-700 text-center font-medium">
                ✅ Message sent successfully
              </p>
            )}
            {error && (
              <p className="text-red-600 text-center font-medium">
                ❌ {error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
