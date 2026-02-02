import React from 'react'

export default function About(){
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

  <div className="absolute inset-0 bg-black/30"></div>

  <div className="relative flex items-center justify-center h-full">
    <div className="text-center text-white p-6 rounded">
      <h1 className="text-3xl font-bold">Our Journey: A Heartfelt Mission</h1>
      <p className="mt-2">
        We rescue, rehabilitate and provide second chances for animals in Bijapur.
      </p>

      <button
        onClick={() => {
          document.getElementById("team-section")?.scrollIntoView({
            behavior: "smooth"
          });
        }}
        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded"
      >
        Meet Our Team
      </button>
    </div>
  </div>
</section>


{/* OUR VALUES */}
<section className="mt-10 py-10 bg-[#f9efe5] rounded-lg">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold">Our Values</h2>
    <p className="text-lg text-gray-700">Guiding Principles</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-4">

    <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-md flex flex-col items-center text-center min-h-[260px]">
      <img src="/icons/compassion.png" alt="Compassion" className="h-20 mb-4 opacity-80" />
      <h3 className="font-semibold text-xl">Compassion</h3>
      <p className="text-gray-600 mt-1">Unconditional love for all animals.</p>
    </div>

    <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-md flex flex-col items-center text-center min-h-[260px]">
      <img src="/icons/rehab.png" alt="Rehabilitation" className="h-20 mb-4 opacity-80" />
      <h3 className="font-semibold text-xl">Rehabilitation</h3>
      <p className="text-gray-600 mt-1">Healing minds, healing hearts.</p>
    </div>

    <div className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-md flex flex-col items-center text-center min-h-[260px]">
      <img src="/icons/community.png" alt="Community" className="h-20 mb-4 opacity-80" />
      <h3 className="font-semibold text-xl">Community</h3>
      <p className="text-gray-600 mt-1">Together, we save lives.</p>
    </div>

  </div>
</section>


{/* OUR STORY / BACKGROUND */}
<section className="mt-14 py-12 bg-white rounded-lg">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-4">How Tails of Bijapur Began</h2>
    <p className="text-gray-700 leading-relaxed text-lg text-justify">
      Tails of Bijapur was born from a deeply personal place and a simple act of
      compassion. In 2023, its founder began caring for dogs in their locality,
      fostering vulnerable puppies with the hope of finding them permanent,
      loving homes. To support this effort, a small page was created, dedicated
      primarily to adoptions.
      <br /><br />
      What started as a way to rehome a few foster puppies soon grew into
      something much bigger. Every puppy found a family through the page, and
      gradually, more people began reaching out for help with adoptions.
      <br /><br />
      Over time, like-minded animal lovers found one another through this shared
      space. Many were already helping animals independently, each in their own
      small but meaningful ways. As rescue cases began coming in, the need for
      collaboration became clear.
      <br /><br />
      Tails of Bijapur naturally evolved into a common platform—bringing
      compassionate individuals together, strengthening their impact, and
      working as a united team to give animals the care, dignity, and second
      chances they deserve.
    </p>
  </div>
</section>


{/* MEET OUR TEAM */}
<section id="team-section" className="mt-16 py-10 bg-white rounded-lg">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold">Meet Our Team</h2>
    <p className="text-lg text-gray-700">The Hearts Behind the Mission</p>
  </div>

  <div className="overflow-hidden relative">
    <div
      className="flex gap-6 animate-scroll whitespace-nowrap"
      style={{ animationDuration: "18s" }}
    >
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map((n) => (
        <div
          key={n}
          className="min-w-[220px] bg-[#f9efe5] p-6 rounded-xl shadow text-center flex flex-col items-center"
        >
          <img
            src="/icons/user-placeholder.png"
            alt="Volunteer"
            className="h-24 w-24 object-cover rounded-full mb-4 border-2 border-orange-400"
          />
          <h3 className="text-xl font-semibold">Volunteer {n}</h3>
          <p className="text-gray-600 text-sm mt-1">TOB Volunteer</p>
        </div>
      ))}
    </div>
  </div>

  <div className="pointer-events-none absolute left-0 top-0 h-full w-14 bg-gradient-to-r from-white"></div>
  <div className="pointer-events-none absolute right-0 top-0 h-full w-14 bg-gradient-to-l from-white"></div>
</section>


{/* IMPACT */}
<section className="mt-6">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold">Our Impact in Numbers</h2>
    <p className="text-lg text-gray-700">Impact. Measured in Wags</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4">
    <div className="p-6 bg-white rounded shadow text-center">
      <div className="text-3xl text-orange-500 font-bold">2+</div>
      <div>Vaccination Drives</div>
    </div>

    <div className="p-6 bg-white rounded shadow text-center">
      <div className="text-3xl text-orange-500 font-bold">10+</div>
      <div>Happy Adoptions</div>
    </div>

    <div className="p-6 bg-white rounded shadow text-center">
      <div className="text-3xl text-orange-500 font-bold">30+</div>
      <div>Volunteers</div>
    </div>

    <div className="p-6 bg-white rounded shadow text-center">
      <div className="text-3xl text-orange-500 font-bold">50+</div>
      <div>Successful Rescues</div>
    </div>
  </div>
</section>

    </div>
  )
}
