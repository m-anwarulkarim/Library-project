import ContactFooter from "@/components/modules/contact/ContactFooter";
import ContactMap from "@/components/modules/contact/ContactMap";
import ContactInfo from "@/components/modules/contact/ContactInfo";
import { motion } from "framer-motion";
import ContactForm from "@/components/modules/contact/ContactForm";

export default function Contact() {
  return (
    <section className="max-w-5xl mx-auto p-6 md:p-10 bg-white rounded-2xl shadow-md">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="text-center mb-8">
          <h2 className="text-3xl font-bold text-indigo-700">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            প্রশ্ন, ফিডব্যাক বা সহযোগিতার প্রস্তাব? নিচে মেসেজ পাঠাও — আমরা
            দ্রুত ফিরতি যোগাযোগ করব।
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ContactInfo />
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-sm">
            <ContactForm />
            <ContactMap />
          </div>
        </div>

        <ContactFooter />
      </motion.div>
    </section>
  );
}
