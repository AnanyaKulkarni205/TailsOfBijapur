require('dotenv').config()
const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000
const ADMIN_EMAIL = process.env.ADMIN_EMAIL

// ✅ SMTP transporter (Gmail)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
})

// ✅ Verify SMTP on server start
transporter.verify((err, success) => {
  if (err) {
    console.error('SMTP ERROR:', err)
  } else {
    console.log('SMTP ready to send emails ✅')
  }
})

// ✅ Volunteer API
app.post('/api/volunteer', async (req, res) => {
  try {
    const { name, email, phone, role, why } = req.body

    if (!name || !email) {
      return res.status(400).json({ ok: false, error: 'Missing fields' })
    }

    const message = `
New Volunteer Application

Name: ${name}
Email: ${email}   
Phone: ${phone}

Why:
${why}
`

    await transporter.sendMail({
      from: `"Tails of Bijapur" <${process.env.SMTP_USER}>`,
      to: ADMIN_EMAIL,
      subject: `🐾 New Volunteer Application – ${name}`,
      text: message
    })

    res.json({ ok: true })
  } catch (err) {
    console.error('MAIL ERROR:', err)
    res.status(500).json({ ok: false, error: 'Email failed' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
