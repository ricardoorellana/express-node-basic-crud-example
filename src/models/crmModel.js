import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: {
        type: String,
        required: 'Enter the value'
    },
    lastName: {
        type: String,
        required: 'Enter the value'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_date: {
        type: 'Date',
        default: Date().now
    }
});