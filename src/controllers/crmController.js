import mongoose from 'mongoose';

import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    console.log('add new contact');
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
            console.log('error here');
        }

        res.json(contact);
    });
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => {
        if (err) {
            res.send(err);
        }

        res.json(contact);
    })
}

export const getContactById = (req, res) => {
    Contact.findById(req.params.contactId, (err, contact) => {
        if (err) {
            res.send(err);
        }
        res.json(contact)
    });
}

export const updateContactById = (req, res) => {
    mongoose.set('useFindAndModify', false);

    console.log(req.body);
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, {new: true}, (err, contact) => {
        if (err) {
            res.send(err);
        }

        res.json(contact)
    });
}

export const deleteContact = (req, res) => {

    Contact.findOneAndDelete({ _id: req.params.contactId }, (err, contact) => {
        if (err) {
            res.send(err);
        }

        res.json(contact);
    });
}
