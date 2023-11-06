const mongoose = require('mongoose');



const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected');
    } catch (error) {
        console.error('Connection error:', error);
    }
}

module.exports = mongoDB;
