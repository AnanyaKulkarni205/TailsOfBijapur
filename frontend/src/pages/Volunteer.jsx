
import React, { useState } from 'react'

export default function Volunteer(){
  const [form,setForm]=useState({name:'',email:'',phone:'',role:'',why:''})
  const [msg,setMsg]=useState('')
  async function submit(e){
    e.preventDefault()
    const res = await fetch('/api/volunteer', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(form)
    })
    if(res.ok) setMsg('Thank you! Your application has been submitted.')
    else setMsg('Submission failed.')
  }
  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
      Become a Volunteer
      </h1>

      <p className="mb-4 text-gray-600">
      Step in with compassion. Stand up for those without a voice.
      </p>

    

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
      <p className="mt-2 text-justify text-gray-700 leading-relaxed">
        Volunteering with Tails of Bijapur means being there when it truly matters.
        We work on the ground responding to rescue calls, coordinating emergency
        medical care, supporting recovery, and ensuring animals are treated with
        dignity and kindness.
        <br /><br />
        You don’t need to be a professional rescuer to make a difference.
        Whether it’s helping with on-spot assistance, transporting animals to clinics,
        spreading awareness, or simply being available during emergencies every effort
        counts.
        <br /><br />
        If you believe compassion should be acted upon, not just felt, we’d love to
        have you walk this journey with us.
      </p>
      <img src="images/volu.jpg" alt="volunteer" className="mt-4 rounded"/>
      </div>
        
        <form className="bg-white p-4 rounded shadow" onSubmit={submit}>
          <h3 className="text-center font-semibold text-orange-500 mb-4">
          Join Our Volunteer Network
          </h3>

          <label className="block mb-2">Full Name<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className="w-full border p-2 rounded mt-1"/></label>
          <label className="block mb-2">Email<input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className="w-full border p-2 rounded mt-1"/></label>
          <label className="block mb-2">Phone Number<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className="w-full border p-2 rounded mt-1"/></label>

          <label className="block mb-2">Why do you want to volunteer?<textarea value={form.why} onChange={e=>setForm({...form,why:e.target.value})} className="w-full border p-2 rounded mt-1"/></label>
          <button className="mt-2 px-4 py-2 bg-orange-500 text-white rounded">Submit Application</button>
          {msg && <p className="mt-3 text-green-600">{msg}</p>}
        </form>
      </div>
    </div>
  )
}
