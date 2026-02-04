import React from "react";

const doctors = [
  {
    name: "Dr Salman Mustafa",
    clinic: "Pet Health Partners Veterinary Clinic",
    phone: "08618592163",
    address: "Bedrekar Complex Near Mediplus Medical Shop Bagalkot Road, Vijayapura, Karnataka 586109",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=RPF9+54+Vijayapura+Karnataka",
  },
  {
    name: "Dr Sohail Bademgol",
    clinic: "Bijapur Pets Mart",
    phone: "9901598754",
    address: "Ainapur Cross, Main Road, Siddasiri Downstairs, Jala Nagar, Vijayapura, Karnataka 586101",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=RP5F+8M+Vijayapura+Karnataka",
  },
  {
    name: "Dr Ashok Walikar",
    clinic: "Arshit's Pet Clinic",
    phone: "08217055847",
    address: "Ashram Rd, Opposite Blossom Photo Studio Neela Nagar, Vijayapura, Karnataka 586103",
    mapLink:
      "https://www.google.com/maps/search/?api=1&query=VP39+MP+Vijayapura+Karnataka",
  },
];


const ALL_VETS_MAP =
  "https://www.google.com/maps/search/?api=1&query=Veterinary+clinic+in+Vijayapura";


const Doctors = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#1F2933]">
          Veterinary Support
        </h1>

        <p className="mt-4 text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
          Verified veterinary professionals who support animal rescue,
          emergency care, and on-spot treatment in and around Vijayapura.
        </p>

        {/* View all map CTA */}
        <a
          href={ALL_VETS_MAP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View all veterinary clinics on Google Maps (opens in a new tab)"
          className="inline-block mt-6 px-6 py-3 text-sm font-medium rounded-md bg-[#C2410C] text-white hover:bg-[#9A3412] transition"
        >
          View all vets on map
        </a>
      </div>

      {/* Doctor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {doctors.map((doc) => (
          <div
            key={doc.name}
            className="bg-white border-l-4 border-[#C2410C] rounded-xl p-7 shadow-sm hover:shadow-md transition"
          >

            {/* Name */}
            <h2 className="text-xl font-semibold text-[#1F2933]">
              {doc.name}
            </h2>

            {/* Clinic */}
            <p className="mt-1 text-sm font-medium text-[#6B7280]">
              {doc.clinic}
            </p>

            {/* Address */}
            <p className="mt-4 text-sm text-[#4B5563] leading-relaxed">
              📍 {doc.address}
            </p>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`tel:${doc.phone.replace(/\D/g, '')}`}
                aria-label={`Call ${doc.name} at ${doc.phone}`}
                className="px-5 py-2.5 text-sm font-medium rounded-md border border-[#C2410C] text-[#C2410C] hover:bg-[#C2410C] hover:text-white transition"
              >
                Call Doctor
              </a>

              <a
                href={doc.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open directions to ${doc.clinic}`}
                className="px-5 py-2.5 text-sm font-medium rounded-md bg-[#FAF7F2] text-[#1F2933] hover:bg-[#F1ECE5] transition"
              >
                Get Directions
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="mt-14 text-center text-xs text-[#6B7280] max-w-3xl mx-auto">
        Disclaimer: Tails of Bijapur is not affiliated with any clinic. Details
        are shared solely to help animals receive timely medical care.
      </p>

      
    </section>
  );
};

export default Doctors;
