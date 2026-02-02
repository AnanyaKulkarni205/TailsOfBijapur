
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
      <h1 className="text-3xl font-bold mb-2">Become a Volunteer!</h1>
      <p className="mb-3 text-bold">Step in. Stand out. Make a difference for tails in need.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <p className="mt-2 text-justify">Becoming a volunteer means stepping into a community where compassion fuels every action and every life touched becomes a shared victory. When you join our amazing team, you become part of a family dedicated to rescuing, healing, and giving hope to animals who need it the most. Your time, kindness, and willingness to help can create a ripple of impact far greater than you imagine. Whether it’s offering care, spreading awareness, or simply showing love, every contribution matters. Together, we can build a kinder world—one rescued life at a time.</p>
          <img src="images/volu.jpg" alt="volunteer" className="mt-4 rounded"/>
        </div>
        
        <form className="bg-white p-4 rounded shadow" onSubmit={submit}>
          <h3 className="text-center text-bold text-orange-500">Fill this form to join the amazing team!!</h3>
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
