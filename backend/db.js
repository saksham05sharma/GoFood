const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://saksham05:sharma0505@db1.rnw8aje.mongodb.net/?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected');
    } catch (error) {
        console.error('Connection error:', error);
    }
}

module.exports = mongoDB;
