import React from 'react'
import { useNavigate } from 'react-router-dom'

const mock = [
  { id: 1, name: 'Chutki', age: '6 months', gender: 'Female', color: 'Brown', place: 'Bijapur', desc: 'Chutki is playful and adorable.', image: '/images/adopt/chutki.png' },
  { id: 2, name: 'Charlie', age: '1 year', gender: 'Male', color: 'Golden', place: 'Bijapur', desc: 'Charlie loves humans and is very gentle.', image: '/images/adopt/charlie.jpg' },
  { id: 3, name: 'Ginger', age: '5 months', gender: 'Female', color: 'Orange', place: 'Bijapur', desc: 'Ginger is energetic and friendly.', image: '/images/adopt/ginger.jpg' },
  { id: 4, name: 'Max', age: '1.5 years', gender: 'Male', color: 'White', place: 'Bijapur', desc: 'Max is loyal and loves playing fetch.', image: '/images/adopt/max.jpg' },
  { id: 5, name: 'Princess', age: '8 months', gender: 'Female', color: 'Cream', place: 'Bijapur', desc: 'Princess is calm and affectionate.', image: '/images/adopt/princess.jpg' },
  { id: 6, name: 'Rocky', age: '1 year', gender: 'Male', color: 'Black', place: 'Bijapur', desc: 'Rocky is brave and protective.', image: '/images/adopt/rocky.jpg' },
  { id: 7, name: 'Simba', age: '9 months', gender: 'Male', color: 'Brown', place: 'Bijapur', desc: 'Simba is smart and good with kids.', image: '/images/adopt/simba.jpg' },
  { id: 8, name: 'Triplets', age: '2 months', gender: 'Female', color: 'Mixed', place: 'Bijapur', desc: 'Three adorable triplets looking for a home.', image: '/images/adopt/triplets.jpg' }
]

export default function Adopt() {
  const nav = useNavigate()

  return (
    <div className="pb-10">

      {/* 🔶 Banner */}
      <div
        className="relative h-[620px] w-full mb-8 rounded-xl overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/adopt/banner.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Button */}
        <button
          onClick={() => nav('/why-adopt')}
          className="relative z-10 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
        >
          Why Adopt?
        </button>
      </div>

      {/* 🔶 Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {mock.map(p => (
          <div
            key={p.id}
            className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={p.image}
              alt={p.name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-sm text-gray-600">
                {p.age} • {p.gender} • {p.place}
              </p>

              <button
                onClick={() => nav(`/adopt/${p.id}`, { state: p })}
                className="mt-3 px-4 py-2 bg-orange-500 text-white rounded w-full hover:bg-orange-600 transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

