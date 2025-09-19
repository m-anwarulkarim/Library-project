import { useState, ChangeEvent, FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

type Status = {
  loading: boolean;
  success: string | null;
  error: string | null;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>({
    loading: false,
    success: null,
    error: null,
  });

  // ✅ validate ফাংশন
  const validate = (): FormErrors => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "নাম দিতে হবে";
    if (!form.email.trim()) errs.email = "ইমেইল লাগবে";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "ভুল ইমেইল";
    if (!form.subject.trim()) errs.subject = "সাবজেক্ট দিন";
    if (!form.message.trim() || form.message.trim().length < 10)
      errs.message = "কমপক্ষে 10 অক্ষরের বার্তা দিন";
    return errs;
  };

  // ✅ ইনপুট পরিবর্তন
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((s) => ({ ...s, [e.target.name]: undefined }));
  };

  // ✅ সাবমিট করার লজিক
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setStatus({
        loading: false,
        success: null,
        error: "ফর্মটি ঠিক করে পুরণ করুন",
      });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      setForm({ name: "", email: "", subject: "", message: "" });
      setStatus({
        loading: false,
        success: "তোমার বার্তা সফলভাবে পাঠানো হয়েছে — ধন্যবাদ!",
        error: null,
      });
    } catch {
      setStatus({
        loading: false,
        success: null,
        error: "সার্ভারে সমস্যা হচ্ছে — বিকল্প পাঠানো হবে",
      });

      // fallback → mailto
      const mailto = `mailto:hello@yourdomain.com?subject=${encodeURIComponent(
        form.subject || "Contact from website"
      )}&body=${encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
      )}`;
      window.location.href = mailto;
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      {/* Name + Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className={`mt-2 p-3 rounded border focus:outline-none focus:ring-2 ${
              errors.name
                ? "border-red-300 focus:ring-red-200"
                : "border-gray-200 focus:ring-indigo-100"
            }`}
            placeholder="Tom Brady"
          />
          {errors.name && (
            <span className="text-xs text-red-600 mt-1">{errors.name}</span>
          )}
        </label>

        <label className="flex flex-col">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={`mt-2 p-3 rounded border focus:outline-none focus:ring-2 ${
              errors.email
                ? "border-red-300 focus:ring-red-200"
                : "border-gray-200 focus:ring-indigo-100"
            }`}
            placeholder="name@example.com"
          />
          {errors.email && (
            <span className="text-xs text-red-600 mt-1">{errors.email}</span>
          )}
        </label>
      </div>

      {/* Subject */}
      <label className="flex flex-col mt-4">
        <span className="text-sm font-medium text-gray-700">Subject</span>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className={`mt-2 p-3 rounded border focus:outline-none focus:ring-2 ${
            errors.subject
              ? "border-red-300 focus:ring-red-200"
              : "border-gray-200 focus:ring-indigo-100"
          }`}
          placeholder="আপনার বিষয়ের সংক্ষিপ্ত সারাংশ"
        />
        {errors.subject && (
          <span className="text-xs text-red-600 mt-1">{errors.subject}</span>
        )}
      </label>

      {/* Message */}
      <label className="flex flex-col mt-4">
        <span className="text-sm font-medium text-gray-700">Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={6}
          className={`mt-2 p-3 rounded border focus:outline-none focus:ring-2 ${
            errors.message
              ? "border-red-300 focus:ring-red-200"
              : "border-gray-200 focus:ring-indigo-100"
          }`}
          placeholder="আপনার বার্তা এখানে লিখুন..."
        />
        {errors.message && (
          <span className="text-xs text-red-600 mt-1">{errors.message}</span>
        )}
      </label>

      {/* Submit */}
      <div className="flex items-center justify-between mt-5">
        <button
          type="submit"
          disabled={status.loading}
          className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-60"
        >
          {status.loading ? "পাঠানো হচ্ছে..." : "Send Message"}
        </button>

        <div>
          {status.success && (
            <p className="text-sm text-green-600">{status.success}</p>
          )}
          {status.error && (
            <p className="text-sm text-red-600">{status.error}</p>
          )}
        </div>
      </div>
    </form>
  );
}
