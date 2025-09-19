import { Link } from "react-router";

export default function ContactInfo() {
  return (
    <div className="md:col-span-1 flex flex-col gap-4">
      <div className="p-5 bg-indigo-50 rounded-lg">
        <h4 className="font-semibold text-indigo-700">Address</h4>
        <p className="text-sm text-gray-700 mt-1">
          House 12/A, Mirpur, Dhaka, Bangladesh
        </p>
      </div>

      <div className="p-5 bg-indigo-50 rounded-lg">
        <h4 className="font-semibold text-indigo-700">Email</h4>
        <Link
          to="mailto:hello@yourdomain.com"
          className="text-sm text-gray-700 mt-1 inline-block"
        >
          hello@yourdomain.com
        </Link>
      </div>

      <div className="p-5 bg-indigo-50 rounded-lg">
        <h4 className="font-semibold text-indigo-700">Phone</h4>
        <Link
          to="tel:+8801712345678"
          className="text-sm text-gray-700 mt-1 inline-block"
        >
          +880 17 1234 5678
        </Link>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-600">Social</p>
        <div className="flex gap-3 mt-2">
          {/* Twitter */}
          <Link
            aria-label="Twitter"
            to="#"
            className="p-2 rounded-lg hover:bg-indigo-100"
          >
            {/* SVG code */}
          </Link>
          {/* GitHub */}
          <Link
            aria-label="GitHub"
            to="#"
            className="p-2 rounded-lg hover:bg-indigo-100"
          >
            {/* SVG code */}
          </Link>
        </div>
      </div>
    </div>
  );
}
