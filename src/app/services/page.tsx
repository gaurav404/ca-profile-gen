export default function ServicesPage() {
    const services = [
      "Tax Planning & Filing",
      "Audit & Assurance",
      "Company Registration",
      "GST Compliance",
      "Financial Advisory",
    ];
  
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <ul className="space-y-4">
          {services.map((service, idx) => (
            <li key={idx} className="p-4 bg-gray-100 rounded-lg shadow-sm">
              {service}
            </li>
          ))}
        </ul>
      </div>
    );
  }