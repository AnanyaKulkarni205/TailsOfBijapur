import React, { useState } from "react";

export default function Donate() {
  const [oneTime, setOneTime] = useState("$25");
  const [recurring, setRecurring] = useState("$10/mo");

  const oneTimeOptions = ["Rs.250", "Rs500", "Rs.1000", "Rs.2500", "Other"];
  const recurringOptions = ["Rs.100/mo", "Rs.250/mo", "Rs.500/mo", "Rs.1000/mo", "Other"];

  return (
    <div className="py-10 px-4 max-w-5xl mx-auto">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-3">
        Your Kindness Can Save Lives
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Your generous donation helps us provide food, shelter, and medical care
        for animals in need. Every contribution, big or small, makes a world of difference.
      </p>

      {/* Donation Box */}
      <div className="bg-white rounded-2xl shadow p-6 md:p-10 mb-12">

        {/* One-Time Donation */}
        <h2 className="font-semibold mb-3">One-Time Donation</h2>
        <div className="flex flex-wrap gap-3 mb-6">
          {oneTimeOptions.map((amt) => (
            <button
              key={amt}
              onClick={() => setOneTime(amt)}
              className={`px-5 py-2 rounded-full border transition ${
                oneTime === amt
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {amt}
            </button>
          ))}
        </div>
        {/* Recurring Donation */}
        <h2 className="font-semibold mb-3">Recurring Donation</h2>
        <div className="flex flex-wrap gap-3">
          {recurringOptions.map((amt) => (
            <button
              key={amt}
              onClick={() => setRecurring(amt)}
              className={`px-5 py-2 rounded-full border transition ${
                recurring === amt
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {amt}
            </button>
          ))}
        </div>

        {/* Proceed Button */}
        <div className="flex justify-center mt-8">
          <button className="px-8 py-3 bg-orange-500 text-white rounded-full shadow hover:bg-orange-600 transition flex items-center gap-2">
            Proceed to Donate →
          </button>
        </div>

        {/* UPI / QR Option */}
        <div className="mt-10 border-t pt-8">
          <h3 className="font-semibold mb-2">UPI / QR</h3>
          <p className="text-gray-600">
            A QR code and UPI payment link will appear here when payment backend is connected.
          </p>
        </div>
      </div>

      {/* Sponsor Section */}
      <h2 className="text-2xl font-semibold text-center mb-6">Sponsor a Cause</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Sponsor Card 1 */}
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-sm text-orange-600 font-medium mb-1">Sponsor a Pet</p>
          <h3 className="font-bold text-lg mb-2">Give a Loving Home</h3>
          <p className="text-gray-600 text-sm mb-4">
            Provide food, shelter, and medical care until they find their forever family.
          </p>
          <button className="bg-orange-500 text-white w-full py-2 rounded-full hover:bg-orange-600 transition">
            Sponsor
          </button>
        </div>

        {/* Sponsor Card 2 */}
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-sm text-orange-600 font-medium mb-1">Sponsor a Meal</p>
          <h3 className="font-bold text-lg mb-2">Feed a Hungry Animal</h3>
          <p className="text-gray-600 text-sm mb-4">
            Help provide nutritious meals to keep them healthy and happy.
          </p>
          <button className="bg-orange-500 text-white w-full py-2 rounded-full hover:bg-orange-600 transition">
            Sponsor
          </button>
        </div>

        {/* Sponsor Card 3 */}
        <div className="bg-white rounded-2xl shadow p-6">
          <p className="text-sm text-orange-600 font-medium mb-1">Sponsor a Shelter</p>
          <h3 className="font-bold text-lg mb-2">Provide a Safe Haven</h3>
          <p className="text-gray-600 text-sm mb-4">
            Help us maintain clean, safe shelter facilities for all animals.
          </p>
          <button className="bg-orange-500 text-white w-full py-2 rounded-full hover:bg-orange-600 transition">
            Sponsor
          </button>
        </div>

      </div>
    </div>
  );
}
