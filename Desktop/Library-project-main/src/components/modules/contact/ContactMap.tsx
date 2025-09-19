export default function ContactMap() {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-medium text-gray-700 mb-2">Our location</h4>
      <div className="w-full h-48 rounded overflow-hidden border">
        <iframe
          title="company-location"
          src="https://www.google.com/maps?q=Dhaka+Bangladesh&output=embed"
          className="w-full h-full"
          loading="lazy"
        />
      </div>
    </div>
  );
}
