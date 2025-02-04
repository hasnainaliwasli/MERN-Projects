import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid } from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    setSubmitted(true);
  };

  return (
    <Container className='pt-10'>
      <Typography className='text-center py-10 font-bold' variant="h4" gutterBottom>
        Contact Us
      </Typography>
      {submitted ? (
        <Typography variant="h6" color="success.main">
          Thank you for reaching out! We will get back to you soon.
        </Typography>
      ) : (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                variant="outlined"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                name="message"
                variant="outlined"
                value={formData.message}
                onChange={handleChange}
                required
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Container>
  );
};

export default ContactUs;
