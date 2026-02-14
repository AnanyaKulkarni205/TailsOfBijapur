import React from "react";

const Awareness = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-semibold text-[#1F2933]">
          Animal Health & Community Awareness
        </h1>

        <p className="mt-4 text-[#4B5563] max-w-2xl mx-auto leading-relaxed">
          Protecting street animals through vaccination, responsible feeding,
          and community cooperation creates a safer and healthier Vijayapura
          for both animals and people.
        </p>
      </div>

      {/* Vaccination Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
        <h2 className="text-2xl font-semibold text-[#C2410C]">
          Importance of Vaccination
        </h2>

        <div className="mt-6 space-y-6 text-[#4B5563] text-sm leading-relaxed">
          <div>
            <h3 className="font-semibold text-[#1F2933]">
              Anti-Rabies Vaccine
            </h3>
            <p>
              Rabies is a fatal but preventable viral disease. Vaccinating
              street and pet dogs protects both animals and humans. Regular
              anti-rabies vaccination significantly reduces the risk of
              transmission and helps maintain public safety.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#1F2933]">
              DHPPi (9-in-1) Vaccine
            </h3>
            <p>
              The DHPPi 9-in-1 vaccine protects dogs against multiple serious
              diseases such as Distemper, Parvovirus, Hepatitis, Parainfluenza,
              and Leptospirosis. These diseases can be deadly, especially for
              puppies and unvaccinated dogs.
            </p>
            <p className="mt-2">
              Regular vaccination improves immunity, reduces outbreaks, and
              promotes a healthier stray population.
            </p>
          </div>
        </div>
      </div>

      {/* Feeding Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border mb-12">
        <h2 className="text-2xl font-semibold text-[#C2410C]">
        Responsible Feeding & Creating Feeding Points
        </h2>

        <div className="mt-6 space-y-4 text-[#4B5563] text-sm leading-relaxed">
          <p>
            Feeding street dogs is an act of compassion. However, it should be
            done responsibly to avoid conflict and maintain cleanliness.
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Choose fixed feeding locations away from traffic.</li>
            <li>Maintain cleanliness after feeding.</li>
            <li>Provide fresh water along with food.</li>
            <li>Avoid overcrowding residential entrances.</li>
            <li>Coordinate with local residents for mutual understanding.</li>
          </ul>

          <p className="mt-4">
            Creating designated feeding points helps reduce aggression, keeps
            dogs settled in one area, and builds trust between the community
            and animals.
          </p>
        </div>
      </div>

      {/* Safe Environment Section */}
      <div className="bg-[#FAF7F2] rounded-2xl p-10 text-center">
        <h2 className="text-2xl font-semibold text-[#1F2933]">
          🏘️ Creating a Safe Environment for Everyone
        </h2>

        <p className="mt-4 text-[#4B5563] max-w-3xl mx-auto leading-relaxed text-sm">
          A vaccinated, sterilized, and regularly fed dog is less aggressive,
          healthier, and more protective of its territory. Community awareness,
          cooperation, and humane treatment reduce dog bites, disease spread,
          and unnecessary fear.
        </p>

        <p className="mt-4 text-[#4B5563] max-w-3xl mx-auto leading-relaxed text-sm">
          Compassion and responsibility together build harmony between humans
          and animals.
        </p>
      </div>
    </section>
  );
};

export default Awareness;
