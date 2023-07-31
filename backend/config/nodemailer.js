import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'decimusmaximus79@gmail.com',
    pass: '12345S!x',
  },
});

export default transporter;
