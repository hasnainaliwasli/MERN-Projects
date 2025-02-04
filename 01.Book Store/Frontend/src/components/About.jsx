import React from 'react';
import { Container, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Container className='pt-10'>
      <Typography className='text-center pt-10 font-bold' variant="h4" gutterBottom>
        About Us
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <Typography variant="body1" paragraph>
          Welcome to our platform! We are a team of passionate individuals dedicated to providing the best services for storing all types of things.
        </Typography>
        <Typography variant="body1" paragraph>
          Our goal is to make organizing and managing your things easier and more efficient. Whether you are storing personal items, business goods, or anything in between, our platform offers you a reliable and secure space.
        </Typography>
        <Typography variant="body1" paragraph>
          We strive to provide the highest quality service, and our team is always here to support you. If you have any questions or feedback, feel free to reach out to us through our contact page.
        </Typography>
      </Paper>
      <Grid container spacing={2} sx={{ marginTop: 3 }}>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Our Mission</Typography>
            <Typography variant="body1">
              Our mission is to simplify your life by providing a seamless and secure way to store and organize your things, offering ease of access and peace of mind.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Our Vision</Typography>
            <Typography variant="body1">
              We envision a world where everyone has access to a platform that helps them keep their things organized, safe, and easily accessible at all times.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
