import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
  const [adoptions, setAdoptions] = useState([]);
  const [volunteers, setVolunteers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      navigate("/admin-login");
      return;
    }

    fetchAdoptions(token);
    fetchVolunteers(token);
  }, []);

  async function fetchAdoptions(token) {
    try {
      const res = await fetch("/api/admin/adoptions", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
        return;
      }

      const data = await res.json();
      setAdoptions(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchVolunteers(token) {
    try {
      const res = await fetch("/api/admin/volunteers", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      if (res.status === 401) {
        localStorage.removeItem("adminToken");
        navigate("/admin-login");
        return;
      }

      const data = await res.json();
      setVolunteers(data);
    } catch (err) {
      console.error(err);
    }
  }

  async function updateAdoption(id, status) {
  const token = localStorage.getItem("adminToken");

  try {
    const res = await fetch(`/api/admin/adoptions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ status }),
    });

    if (!res.ok) {
      alert("Failed to update adoption status");
      return;
    }

    setAdoptions((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, status } : item
      )
    );
  } catch (err) {
    console.error(err);
  }
}


  async function updateVolunteer(id, status) {
    const token = localStorage.getItem("adminToken");

    await fetch(`/api/volunteers/${id}`, {

      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({ status }),
    });

    fetchVolunteers(token);
  }

  function logout() {
    localStorage.removeItem("adminToken");
    navigate("/admin-login");
  }

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={logout}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Adoption Section */}
      <h2 className="text-2xl font-semibold mb-4">Adoption Requests</h2>
      <div className="space-y-4 mb-12">
        {adoptions.map((item) => (
          <div key={item._id} className="bg-white p-5 rounded shadow">
          {item.image && (
            <img
              src={`http://localhost:4000/uploads/${item.image}`}
              alt="Puppy"
              className="w-40 h-40 object-cover rounded mb-4"
            />
          )}

            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Status:</strong> {item.status}</p>

            <div className="mt-3 space-x-3">
              <button
                onClick={() => updateAdoption(item._id, "APPROVED")}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Approve
              </button>
              <button
                onClick={() => updateAdoption(item._id, "REJECTED")}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Volunteer Section */}
      <h2 className="text-2xl font-semibold mb-4">Volunteer Applications</h2>
      <div className="space-y-4">
        {volunteers.map((item) => (
          <div key={item._id} className="bg-white p-5 rounded shadow">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Email:</strong> {item.email}</p>
            <p><strong>Role:</strong> {item.role}</p>
            <p><strong>Status:</strong> {item.status}</p>

            <div className="mt-3 space-x-3">
              <button
                onClick={() => updateVolunteer(item._id, "APPROVED")}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                Approve
              </button>
              <button
                onClick={() => updateVolunteer(item._id, "REJECTED")}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
