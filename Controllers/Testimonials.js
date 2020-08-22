const Testimonial = require('../Models/Testimonial')
const db = require('../DB/Connections')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getTestimonial = async (req, res) => {
    try {
        const { id } = req.params
        const testimonial = await Testimonial.findById(id)
        if (testimonial) {
            return res.json(testimonial)
        }
        res.status(404).json({ message: 'testimonial not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getTestimonials = async (req, res) => {
    try {
        const testimonials = await Testimonial.find()
        res.json(testimonials)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


const createTestimonial = async (req, res) => {
    try {
        const testimonial = await new Testimonial(req.body)
        await testimonial.save()
        res.status(201).json(testimonial)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateTestimonial = async (req, res) => {
    const { id } = req.params
    await Testimonial.findByIdAndUpdate(id, req.body, { new: true }, (error, testimonial) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!testimonial) {
            return res.status(404).json({ message: 'testimonial not found!' })
        }
        res.status(200).json(testimonial)
    })
}

const deleteTestimonial = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Testimonial.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("testimonial deleted")
        }
        throw new Error("testimonial not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    getTestimonial,
    getTestimonials,
    createTestimonial,
    updateTestimonial,
    deleteTestimonial
}