/**@format */

const {mongoose} = require('mongoose');

/**@format */
require('dotenv').config();

var uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@evenhub-db.oijnd.mongodb.net/?retryWrites=true&w=majority&appName=evenhub-db`;
const connectDB = async () => {
    mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));
}
module.exports = connectDB; 