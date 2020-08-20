const { Router } = require('express')
const controllers = require('../Controllers/Testimonials')


const router = Router()

router.get('/testimonials', controllers.getTestimonials)
router.get('/testimonials/:id', controllers.getTestimonial)
router.post('/testimonials', controllers.createTestimonial)
router.put('/testimonials/:id', controllers.updateTestimonial)
router.delete('/testimonials/:id', controllers.deleteTestimonial)

module.exports = router