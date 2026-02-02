
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home(){
  const nav = useNavigate()
  return (
    <div>
<section className="relative w-full overflow-hidden h-[550px] flex items-center justify-center">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/homehero.mp4" type="video/mp4" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* Content */}
  <div className="relative text-center text-white z-10">
    <h1 className="text-5xl font-extrabold mb-4">Welcome to Tails of Bijapur</h1>
    <p className="mb-3 text-lg">Rescue. Rehabilitate. Rehome.</p>
    <p className="mb-3 text-lg">Our mission is to rescue, rehabilitate, and rehome animals in need, providing them
with love, care, and a second chance at a happy life.</p>
<a
  href="/about"
  className="inline-block mt-4 px-6 py-3  text-white font-semibold rounded-full shadow-md hover:bg-orange-500 hover:shadow-lg transition-all duration-300 mb-4"
>
  Know More →
</a>

    <div className="space-x-3">
      <button onClick={() => nav('/adopt')} className="px-4 py-2 bg-orange-500 text-white rounded">Adopt</button>
      <button onClick={() => nav('/donate')} className="px-4 py-2 bg-orange-500 text-white rounded">Donate</button>
      <button onClick={() => nav('/contact')} className="px-4 py-2 bg-orange-500 text-white rounded">Report an incident</button>
    </div>
  </div>
</section>


      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Featured Success Stories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="bg-white p-4 rounded shadow">
  <video
    // src="/videos/Buddyhome.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-40 object-cover rounded"
  ></video>

  <h3 className="mt-2 font-semibold">Buddy's Journey</h3>
  <p className="text-sm">From injured to joyful — adopted and loved.</p>
</div>

          <div className="bg-white p-4 rounded shadow">
              <video
    // src="/videos/Chutkihome.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-40 object-cover rounded"
  ></video>
            <h3 className="mt-2 font-semibold">Chutki's Transformation</h3>
            <p className="text-sm">Rescued Fostered and Treated — a happy tale.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
              <video
    // src="/videos/catshome.mp4"
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-40 object-cover rounded"
  ></video>
            <h3 className="mt-2 font-semibold">Cat family at home</h3>
            <p className="text-sm">A loving home given to the cats.</p>
          </div>
        </div>
      </section>
      <section className="py-12 px-4 sm:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

    {/* ================= LEFT CONTENT ================= */}
    <div className="space-y-6">

      <h2 className="text-3xl font-extrabold mb-4">
        Origins of Indie Dogs 🐾
      </h2>

      <p className="text-gray-700 text-justify">
        Indie dogs, also known as Indian Pariah Dogs, have been an integral part of Indian culture for centuries.
        These resilient and intelligent dogs have thrived alongside human civilizations, adapting to various
        environments and lifestyles. In this blog, we will explore the fascinating history of indie dogs,
        their unique characteristics, and why they make excellent pets.
      </p>

      <p className="text-gray-700 text-justify">
        Indie dogs are considered one of the oldest and most primitive dog breeds in the world.
        Archaeological evidence suggests that these dogs have existed in the Indian subcontinent
        for thousands of years. They are believed to have evolved naturally without any selective
        breeding by humans. Their genetic makeup is closest to the ancient pariah dogs, which were
        free-roaming and lived on the fringes of human settlements.
      </p>

      <p className="text-gray-700 text-justify">
        Indie dogs are often referred to as “landrace” dogs, meaning they developed through natural
        selection rather than human intervention. This natural evolution has equipped them with
        remarkable adaptability, intelligence, and resilience. Unlike many modern breeds that were
        developed for specific purposes, indie dogs have thrived by being versatile and resourceful.
      </p>

      <h2 className="text-3xl font-extrabold mt-8">
        Historical Significance 🐾
      </h2>

      <p className="text-gray-700 text-justify">
        Throughout history, indie dogs have played a significant role in Indian society.
        They were commonly found in villages, where they coexisted with humans and served various
        functions. These dogs acted as guardians, protecting livestock and homes from intruders.
        Their keen senses and alertness made them invaluable in detecting potential threats.
      </p>

      <p className="text-gray-700 text-justify">
        In urban areas, indie dogs adapted to life on the streets. Despite facing numerous challenges,
        they demonstrated remarkable resilience and resourcefulness. They scavenged for food,
        found shelter in unlikely places, and formed packs for protection. Their ability to thrive
        in harsh conditions is a testament to their hardiness and survival instincts.
      </p>

      <h2 className="text-3xl font-extrabold mt-8">
        Characteristics of Indie Breed Dogs🐾
      </h2>

      <p className="text-gray-700 text-justify">
        Indie breed dogs possess several distinctive traits that set them apart from other breeds.
        They are medium-sized dogs with a lean and athletic build, typically weighing between
        15 to 30 kilograms. Their coat is short and dense, providing protection from extreme weather
        conditions. The color of their coat can vary widely, ranging from solid colors to various patterns.
      </p>

      <p className="text-gray-700 text-justify">
        One of the most notable features of indie breed dogs is their keen intelligence.
        They are quick learners and have an exceptional ability to solve problems. This intelligence,
        combined with their natural instincts, makes them highly adaptable to different environments
        and situations. They are known for their loyalty, alertness, and strong sense of territory,
        making them excellent watchdogs.
      </p>

    </div>

    {/* ================= RIGHT CONTENT ================= */}
    <div className="space-y-6">

      <h2 className="text-3xl font-extrabold">
        Why Choose an Indie Dog? 🐾
      </h2>

      {/* Feature Cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-orange-500 font-bold text-lg">Highly Intelligent</p>
          <p className="text-sm text-gray-600">Quick learners & problem solvers</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-orange-500 font-bold text-lg">Low Maintenance</p>
          <p className="text-sm text-gray-600">Naturally healthy & hardy</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-orange-500 font-bold text-lg">Extremely Loyal</p>
          <p className="text-sm text-gray-600">Protective & family-oriented</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow text-center">
          <p className="text-orange-500 font-bold text-lg">Indian Native</p>
          <p className="text-sm text-gray-600">Perfect for Indian climate</p>
        </div>
      </div>

      {/* Image */}
<div className="w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-lg">
  <img
    src="/images/indiedoghome.jpg"
    alt="Indie Dog"
    className="w-full h-full object-cover"
  />
</div>


      <h2 className="text-3xl font-extrabold mt-6">
        Indie Dogs in Modern Times🐾
      </h2>

      <p className="text-gray-700 text-justify">
        In recent years, there has been a growing awareness and appreciation for indie dogs as pets.
        Many people are recognizing the unique qualities and benefits of adopting these native dogs.
        Indie dogs as pets offer several advantages, including their low maintenance requirements
        and robust health. Their genetic diversity and natural evolution have resulted in fewer
        health issues compared to some selectively bred dogs.
      </p>

      <p className="text-gray-700 text-justify">
        Indie dogs are highly adaptable and can thrive in various living environments, from apartments
        to rural settings. They are known for their loyalty and strong bond with their human families.
        Once they form a connection, they become devoted companions who are protective and loving.
      </p>

      <h2 className="text-3xl font-extrabold mt-6">
        Indie Dogs and Animal Welfare🐾
      </h2>

      <p className="text-gray-700 text-justify">
        Despite their resilience, indie dogs face numerous challenges, particularly in urban areas.
        Stray dog populations can sometimes lead to conflicts with humans, resulting in issues related
        to overpopulation and animal welfare. Efforts by animal welfare organizations and volunteers
        have been crucial in addressing these issues.
      </p>

      <p className="text-gray-700 text-justify">
        Initiatives such as sterilization and vaccination programs help control the stray dog population
        and prevent the spread of diseases. Adoption drives and awareness campaigns aim to encourage
        people to consider adopting indie dogs, providing them with loving homes and reducing the
        number of dogs living on the streets.
      </p>

    </div>

  </div>
</section>

<section className="bg-gray-50 py-14 px-4 sm:px-8 lg:px-16">
  <div className="max-w-6xl mx-auto">

    {/* Section Header */}
    <div className="text-center mb-8">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        Understanding Rabies
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto ">
        A guide to prevention, early action, and protecting both humans and animals from a deadly yet preventable disease.
      </p>
    </div>

    {/* Intro */}
    <div className="bg-white rounded-2xl shadow p-6 sm:p-8 mb-10">
      <p className="text-gray-700 text-justify leading-relaxed">
        Rabies is a serious viral disease that affects the nervous system of mammals, including humans.
        While it's almost always fatal once symptoms appear, rabies is entirely preventable through timely
        medical intervention and vaccination. Understanding how this disease spreads and what steps to take
        after potential exposure can save lives.
      </p>
    </div>

    {/* How Rabies Spreads */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">
          How Rabies Spreads
        </h3>

        <ul className="space-y-3 text-gray-700 list-disc list-inside">
          <li>
            <strong>Animal Bites:</strong> The most common route. Dogs cause most human cases worldwide,
            while bats, raccoons, skunks, and foxes are common carriers in some regions.
          </li>
          <li>
            <strong>Scratches & Open Wounds:</strong> Infected saliva entering broken skin or mucous
            membranes (eyes, nose, mouth).
          </li>
          <li>
            <strong>Bat Exposure:</strong> Bat bites may go unnoticed. Any direct contact should be treated
            as potential exposure.
          </li>
        </ul>

        <p className="text-sm text-gray-600">
          The virus cannot pass through intact skin. Casual contact such as petting does not spread rabies.
        </p>
      </div>

      {/* Symptoms */}
      <div className="bg-white rounded-2xl shadow p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Recognizing the Symptoms
        </h3>

        <p className="text-gray-700 mb-4">
          The incubation period usually ranges from one to three months.
          Early symptoms include:
        </p>

        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
          <li>Fever, headache, weakness</li>
          <li>Tingling or discomfort at bite site</li>
          <li>Anxiety and confusion</li>
        </ul>

        <p className="text-gray-700 mb-2 font-semibold">
          Advanced symptoms:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Hallucinations and agitation</li>
          <li>Difficulty swallowing & excessive salivation</li>
          <li>Fear of water (hydrophobia)</li>
          <li>Paralysis leading to respiratory failure</li>
        </ul>

        <p className="mt-4 text-red-600 font-semibold">
          Once symptoms appear, rabies is nearly 100% fatal.
        </p>
      </div>
    </div>

    {/* Prevention */}
    <div className="bg-white rounded-2xl shadow p-6 sm:p-8 mb-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Prevention: Your Best Defense
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
        <p>✔ Vaccinate dogs, cats, and ferrets regularly</p>
        <p>✔ Avoid contact with wild animals</p>
        <p>✔ Secure homes against bats and wildlife</p>
        <p>✔ Teach children to report bites immediately</p>
        <p>✔ Consider pre-exposure vaccination if high-risk</p>
      </div>
    </div>

    {/* First Aid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Immediate First Aid After a Bite
        </h3>

        <ol className="space-y-3 text-gray-700 list-decimal list-inside">
          <li>
            <strong>Wash the wound:</strong> Rinse with running water for at least 15 minutes using soap.
          </li>
          <li>
            <strong>Apply antiseptic:</strong> Use povidone-iodine or alcohol.
          </li>
          <li>
            <strong>Cover loosely:</strong> Use a clean cloth or bandage.
          </li>
          <li>
            <strong>Seek medical help immediately:</strong> Do not wait for symptoms.
          </li>
        </ol>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
        <h3 className="text-xl font-bold text-red-700 mb-4">
          What NOT to Do
        </h3>

        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Do not close the wound unless necessary</li>
          <li>Do not use home remedies or oils</li>
          <li>Do not delay medical treatment</li>
        </ul>
      </div>
    </div>

    {/* PEP */}
    <div className="bg-white rounded-2xl shadow p-5 sm:p-6 mb-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        Medical Vaccination & PEP
      </h3>

      <p className="text-gray-700 mb-3">
        Post-exposure prophylaxis (PEP) is highly effective when given promptly.
      </p>

      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>
          <strong>Unvaccinated:</strong> Rabies immune globulin + 4 vaccine doses (days 0, 3, 7, 14)
        </li>
        <li>
          <strong>Previously vaccinated:</strong> 2 vaccine doses (days 0 and 3)
        </li>
      </ul>
    </div>

    {/* Bottom Highlight */}
<div className="text-center bg-orange-500 text-white rounded-xl px-3 py-2 sm:px-5 sm:py-3">
  <h3 className="text-lg sm:text-xl font-semibold mb-1">
    The Bottom Line
  </h3>
  <p className="max-w-3xl mx-auto text-sm sm:text-base text-justify">
    Rabies is preventable, but only with awareness and quick action.
    Every bite matters. Every minute counts.
  </p>
</div>





  </div>
</section>



      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4 text-center">How You Can Help</h2>
<div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
  {[
    {
      title: "Contact / Report",
      img: "/images/reporthome.jpeg",
      desc: "Reach out to us or report an injured or abandoned animal in your area."
    },
    {
      title: "Adopt",
      img: "/images/adopthome.png",
      desc: "Give a rescued dog a forever home and change a life today."
    },
    {
      title: "Volunteer",
      img: "/images/volhome.png",
      desc: "Join our mission by helping with rescues, care, and community events."
    },
    {
      title: "Donate",
      img: "/images/donhome.png",
      desc: "Support medical treatment, food, and shelter for rescued animals."
    }
  ].map((item, i) => (
        <div
      key={i}
      className="
        backdrop-blur-lg 
        bg-white/20 
        border border-white/30 
        shadow-lg 
        p-4 
        rounded-xl 
        text-center 
        h-[350px] 
        flex flex-col 
        transition 
        hover:bg-white/30 
        hover:shadow-xl
      "
    >
      
      {/* Image area */}
      <div className="h-70 w-full overflow-hidden rounded">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <h3 className="font-semibold mt-3">{item.title}</h3>
      <p className="text-sm px-1">{item.desc}</p>
    </div>
  ))}
</div>


      </section>
    </div>
  )
}
