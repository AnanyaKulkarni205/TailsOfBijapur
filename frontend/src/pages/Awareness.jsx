import React from "react";

const Awareness = () => {
  return (
    <div className="bg-[#FAF7F2]">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">


        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            Building a Healthier{" "}
            <span className="text-orange-500">Safer Community</span>
          </h1>  

        <p className="mt-6 text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
          Through vaccination, responsible feeding, and public awareness,
          we can protect both animals and people while creating harmony
          within our neighborhoods.
        </p>
      </section>

      {/* VACCINATION SECTION */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-center text-[#C2410C] mb-14">
            Importance of Vaccination
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="p-8 rounded-2xl border hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#1F2933] mb-4">
                Anti-Rabies Vaccine
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                Rabies is 100% preventable through vaccination. Immunizing
                street and pet dogs protects the entire community and reduces
                the risk of fatal transmission.
              </p>
            </div>

            <div className="p-8 rounded-2xl border hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-[#1F2933] mb-4">
                DHPPi (9-in-1) Vaccine
              </h3>
              <p className="text-[#4B5563] text-sm leading-relaxed">
                Protects dogs from life-threatening diseases like Distemper,
                Parvovirus, Hepatitis, and Leptospirosis. Regular vaccination
                improves immunity and prevents outbreaks.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* OUR IMPACT SECTION */}
<section className="bg-[#FAF7F2] py-20">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-14">
      <h2 className="text-3xl font-semibold text-[#1F2933]">
        What We Have Achieved So Far
      </h2>

      <p className="mt-4 text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
        For the first time in Vijayapura, Tails of Bijapur initiated 
        organized mass vaccination drives for community dogs. 
      </p>

       <p className="mt-4 text-[#4B5563] max-w-3xl mx-auto leading-relaxed"> 
        Many street dogs remain unvaccinated simply due to lack of 
        awareness and access not neglect. We wanted to change that.

        Through coordinated efforts, veterinary collaboration, and 
        volunteer participation.
        We have conducted two vaccination 
        drives so far, protecting over 100+ community dogs with both 
        Anti-Rabies and DHPPi (9-in-1) vaccines.

        These drives are not just medical campaigns,they are steps 
        toward long-term public safety, disease prevention, and 
        compassionate coexistence.
    </p>
</div>


    {/* Photo Placeholder Section */}
    <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white h-64 rounded-2xl flex items-center justify-center border text-[#9CA3AF]">
        Vaccination Drive Image 1
      </div>
      <div className="bg-white h-64 rounded-2xl flex items-center justify-center border text-[#9CA3AF]">
        Vaccination Drive Image 2
      </div>
      <div className="bg-white h-64 rounded-2xl flex items-center justify-center border text-[#9CA3AF]">
        Vaccination Drive Image 3
      </div>
    </div>

  </div>
</section>


      {/* FEEDING SECTION */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[#C2410C] mb-8">
            Responsible Feeding & Feeding Points
          </h2>

          <p className="text-[#4B5563] leading-relaxed mb-10 max-w-3xl mx-auto">
            Feeding street dogs should be structured and hygienic to maintain
            peace within the community while ensuring animals receive proper care.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              "Choose fixed feeding locations away from traffic",
              "Maintain cleanliness after feeding",
              "Provide fresh water daily",
              "Avoid blocking entrances or public pathways",
              "Coordinate respectfully with residents",
              "Keep feeding timings consistent",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border"
              >
                <p className="text-sm text-[#4B5563] leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SAFE ENVIRONMENT CTA */}
      <section className="bg-[#1F2933] py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">
            Creating a Safe Environment for Everyone
          </h2>

          <p className="text-sm leading-relaxed text-gray-300">
            Vaccinated, sterilized, and properly fed dogs are healthier,
            calmer, and less aggressive. Awareness and humane treatment
            reduce dog bites, prevent disease spread, and build trust
            between humans and animals.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Awareness;
