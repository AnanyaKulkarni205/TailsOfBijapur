"use client";
import React from "react";
import volunteers from "../data/volunteers.json";

export default function About() {
  return (
    <div>

      {/* HERO SECTION */}
      <section className="relative h-[500px] rounded-lg overflow-hidden">
        <video
          src="/videos/Abouthero.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative flex items-center justify-center h-full">
          <div className="text-center text-white p-6 rounded">
            <h1 className="text-3xl font-bold">Our Journey: A Heartfelt Mission</h1>
            <p className="mt-2">
              We rescue, rehabilitate and provide second chances for animals in Bijapur.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("team-section")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
            >
              Meet Our Team
            </button>
          </div>
        </div>
      </section>

{/* OUR VALUES */}
{/* OUR VALUES */}
<section className="mt-14 py-14 bg-[#FAF7F2] rounded-2xl">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-900">
      Our Values
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

    {[
      {
        title: "Adopt",
        text: "Every adoption gives a rescued animal a second chance at life and a loving home."
      },
      {
        title: "Vaccinate",
        text: "Preventive care protects both animals and communities from life-threatening diseases."
      },
      {
        title: "Educate",
        text: "Spreading awareness builds responsible pet care and compassionate neighborhoods."
      },
      {
        title: "Coexist",
        text: "Humans and animals can live safely together through understanding and respect."
      },
    ].map((item) => (
      <div
        key={item.title}
        className="
          bg-white
          border border-[#E7E1D8]
          p-8
          rounded-2xl
          shadow-sm
          text-center
          transition
          hover:shadow-md
        "
      >
        <h3 className="text-2xl font-semibold text-gray-900">
          {item.title}
        </h3>

        <div className="h-1 w-12 bg-orange-400 rounded-full mx-auto my-4" />

        <p className="text-gray-600 text-sm leading-relaxed">
          {item.text}
        </p>
      </div>
    ))}

  </div>
</section>






      {/* OUR STORY */}
      <section className="mt-14 py-14 bg-[#FAF7F2] rounded-lg">
      <div className="max-w-4xl mx-auto px-6">
        
      <h2 className="text-3xl font-semibold text-[#1F2933] mb-6 text-center">
      How Tails of Bijapur Began </h2>

    <div className="space-y-6 text-[#4B5563] text-lg leading-relaxed">
      <p>
        Tails of Bijapur was started by Anirudha Gudi on 20th June 2025 with a clear
        purpose: to ensure that injured, abandoned, and vulnerable animals in Bijapur
        receive timely care and a fair chance at life. What began as a personal effort
        soon revealed a much larger need within the city.
      </p>

      <p>
        Many compassionate individuals were already helping animals in their own ways,
        rescuing, feeding, fostering, and arranging medical care independently. Tails of
        Bijapur brought these animal lovers together under one roof, creating a fresh
        wave of collective responsibility and coordinated action.
      </p>

      <p>
        Today, Tails of Bijapur stands as a community-driven initiative that connects
        volunteers, veterinarians, and caregivers to respond faster, work smarter, and
        ensure animals receive dignity, medical support, and the second chances they
        truly deserve.
      </p>
    </div>


          </div>
        </section>


      {/* TEAM */}
      <section id="team-section" className="mt-16 py-10 bg-white rounded-lg relative">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Meet Our Team</h2>
          <p className="text-lg text-gray-700">The Hearts Behind the Mission</p>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-max">
            {volunteers.map((vol, index) => (
              <div
                key={index}
                className="min-w-[220px] bg-[#f9efe5] p-6 rounded-xl shadow text-center flex flex-col items-center"
              >
                <img
                  src={vol.photo}
                  className="h-24 w-24 rounded-full mb-4 border-2 border-orange-400"
                  alt={vol.name}
                />
                <h3 className="text-xl font-semibold">{vol.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{vol.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="mt-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Our Impact in Numbers</h2>
          <p className="text-lg text-gray-700">Impact. Measured in Wags</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          {[
            ["2+", "Vaccination Drives"],
            ["10+", "Happy Adoptions"],
            ["30+", "Volunteers"],
            ["50+", "Successful Rescues"],
          ].map(([num, label]) => (
            <div key={label} className="p-6 bg-white rounded shadow text-center">
              <div className="text-3xl text-orange-500 font-bold">{num}</div>
              <div>{label}</div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
