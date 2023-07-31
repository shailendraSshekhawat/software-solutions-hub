import express from 'express';
import Submission from '../models/submissionModel.js';
// import transporter from '../config/nodemailer.js';

const route = express.Router();
route.post('/', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const userExists = await Submission.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // save in mongodb
    const submission = await Submission.create({
      name,
      email,
      phone,
    });

    
    res.status(201).json({ message: 'Form submitted successfully' });
    console.log(req.body);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default route;
