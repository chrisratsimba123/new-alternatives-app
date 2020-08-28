import api from "./APIConfig";

export const getTestimonial = async (id) => {
  try {
    const response = await api.get(`/testimonials/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getTestimonials = async () => {
  try {
    const response = await api.get(`/testimonials`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createTestimonial = async (Testimonial) => {
  try {
    const response = await api.post("/testimonials", Testimonial);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateTestimonial = async (id, Testimonial) => {
  try {
    const response = api.put(`/testimonials/${id}`, Testimonial);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteTestimonial = async (id) => {
  try {
    const response = await api.delete(`/testimonials/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};