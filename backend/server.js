require('dotenv').config()

const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const multer = require('multer')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 4000
const ADMIN_EMAIL = process.env.ADMIN_EMAIL

/* ===========================
   SMTP (Zoho Mail)
=========================== */
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // smtp.zoho.in
    port: Number(process.env.SMTP_PORT), // 587
    secure: false,
    auth: {
        user: process.env.SMTP_USER, // support@tailsofbijapur.org
        pass: process.env.SMTP_PASS // Zoho App Password
    }
})

// Verify SMTP on startup
transporter.verify((err) => {
    if (err) {
        console.error('❌ SMTP ERROR:', err)
    } else {
        console.log('✅ SMTP ready to send emails')
    }
})

/* ===========================
   VOLUNTEER FORM
=========================== */
app.post('/api/volunteer', async(req, res) => {
    try {
        const { name, email, phone, role, why } = req.body

        if (!name || !email) {
            return res.status(400).json({ ok: false, error: 'Missing required fields' })
        }

        const message = `
New Volunteer Application

Name: ${name}
Email: ${email}
Phone: ${phone || '—'}
Role: ${role || '—'}

Why:
${why || '—'}
`

        await transporter.sendMail({
            from: `"Tails of Bijapur" <${process.env.SMTP_USER}>`,
            to: ADMIN_EMAIL,
            replyTo: email,
            subject: `🐾 New Volunteer Application – ${name}`,
            text: message
        })

        res.json({ ok: true })
    } catch (err) {
        console.error('MAIL ERROR:', err)
        res.status(500).json({ ok: false, error: 'Email failed' })
    }
})

/* ===========================
   ADOPT SUBMISSIONS
=========================== */
const upload = multer({ dest: 'uploads/' })

app.post('/api/adopt-submissions', upload.single('image'), async(req, res) => {
    try {
        const {
            name,
            age,
            gender,
            vaccinated,
            location,
            phone,
            description
        } = req.body

        if (!location || !phone) {
            return res.status(400).json({ ok: false, error: 'Missing required fields' })
        }

        const file = req.file

        const message = `
New Adoption Submission

Name: ${name || '—'}
Age: ${age || '—'}
Gender: ${gender || '—'}
Vaccinated: ${vaccinated || '—'}
Location: ${location}
Phone: ${phone}

Description:
${description || '—'}
`

        const mailOptions = {
            from: `"Tails of Bijapur" <${process.env.SMTP_USER}>`,
            to: ADMIN_EMAIL,
            replyTo: phone,
            subject: `🐶 New Adoption Submission${name ? ' – ' + name : ''}`,
            text: message,
            attachments: []
        }

        if (file) {
            mailOptions.attachments.push({
                filename: file.originalname || file.filename,
                path: file.path,
                contentType: file.mimetype
            })
        }

        await transporter.sendMail(mailOptions)

        res.json({ ok: true, file: file ? file.filename : null })
    } catch (err) {
        console.error('ADOPT SUBMISSION ERROR:', err)
        res.status(500).json({ ok: false, error: 'Submission failed' })
    }
})

/* ===========================
   START SERVER
=========================== */
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})