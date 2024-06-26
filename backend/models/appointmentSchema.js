import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First Name is required!"],
    minLength: [3, "First Name must contain at least 3 characters!"],
  },
  lastName: {
    type: String,
    required: [true, "Last Name is required!"],
    minLength: [3, "Last Name must contain at least 3 characters!"],
  },
  email: {
    type: String,
    required: [true, "Email is required!"],
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  phone: {
    type: String,
    required: [true, "Phone is required!"],
    minLength: [10, "Phone number must contain exact 10 digits!"],
    maxLength: [10, "Phone number must contain exact 10 digits!"],
  },
  nic: {
    type: String,
    required: [true, "NIC is required!"],
    minLength: [13, "NIC must contain only 13 digits!"],
    maxLength: [13, "NIC must contain only 13 digits!"],
  },
  dob: {
    type: Date,
    required: [true, "DOB is required!"],
  },
  gender: {
    type: String,
    required: [true, "Gender is required!"],
    enum: ["Male", "Female"],
  },
  appointment_date: {
    type: String,
    required: [true, "Appointment date is required!"],
  },
  department: {
    type: String,
    required: [true, "Department name is required!"],
  },
  doctor: {
    firstName: {
      type: String,
      required: [true, "Doctor's first name is required!"],
    },
    lastName: {
      type: String,
      required: [true, "Doctor's last name is required!"],
    },
  },
  hasVisited: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    required: [true, "Address is required!"],
  },
  doctorId: {
    type: mongoose.Schema.ObjectId,
    required: [true, "Doctor ID is required!"],
  },
  patientId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Patient ID is required!"],
  },
  status: {
    type: String,
    enum: ["Pending", "Accepted", "Rejected"],
    default: "Pending",
  },
});

export const Appointment = mongoose.model("Appointment", appointmentSchema);
