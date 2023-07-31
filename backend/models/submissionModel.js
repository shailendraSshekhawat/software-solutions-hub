import mongoose from 'mongoose';

const submissionSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

const Submission = mongoose.model('Submission', submissionSchema);
export default Submission;
