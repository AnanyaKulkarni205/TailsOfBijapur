const WhyAdopt = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      <h1 className="text-4xl font-bold text-center mb-8 text-orange-600">
        Why Adopt a Pet?
      </h1>

      <p className="text-lg text-gray-700 text-center mb-10">
        <span className="font-semibold">Adopt, Don’t Shop</span> — because every animal deserves a loving home.
      </p>

      {/* Impact on Humans */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🐾 Benefits of Adoption for Humans</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Reduces stress, anxiety, and depression</li>
          <li>• Improves mental well-being and emotional health</li>
          <li>• Encourages physical activity through walks and play</li>
          <li>• Provides companionship and reduces loneliness</li>
          <li>• Builds empathy, responsibility, and routine</li>
        </ul>
      </section>

      {/* Impact on Animals */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">❤️ Impact of Adoption on Animals</h2>
        <p className="text-gray-700 leading-relaxed">
          Adoption saves lives. Animals in shelters often come from difficult backgrounds.
          By adopting, you give them a second chance — a warm bed, proper care, love, and security.
          Your home becomes their forever home.
        </p>
      </section>

      {/* Adopt Don't Shop */}
      <section className="mb-10 bg-orange-50 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4 text-orange-600">
          🚫 Adopt, Don’t Shop
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Buying pets fuels unethical breeding and puppy mills.
          Adoption helps control overpopulation and supports ethical animal welfare.
          Choosing adoption is choosing compassion.
        </p>
      </section>

      {/* Responsibility */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📌 Responsibility of a Pet Parent</h2>
        <ul className="space-y-3 text-gray-700">
          <li>• Regular feeding and clean water</li>
          <li>• Veterinary care and vaccinations</li>
          <li>• Daily exercise and mental stimulation</li>
          <li>• Love, patience, and lifelong commitment</li>
        </ul>
      </section>

      {/* After Adoption Guide */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🏡 Care Guide After Adoption</h2>
        <p className="text-gray-700 leading-relaxed">
          Give your pet time to adjust. Create a safe environment, establish routines,
          use positive reinforcement, and shower them with love.
          Remember, adoption is not a rescue — it’s the beginning of a beautiful friendship.
        </p>
      </section>

    </div>
  )
}

export default WhyAdopt
