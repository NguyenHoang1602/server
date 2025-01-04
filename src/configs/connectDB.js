/**@format */

const {mongoose} = require('mongoose');

/**@format */
require('dotenv').config();

var uri = "mongodb://eventhub:eventhub2024@evenhub-db-shard-00-00.oijnd.mongodb.net:27017,evenhub-db-shard-00-01.oijnd.mongodb.net:27017,evenhub-db-shard-00-02.oijnd.mongodb.net:27017/?ssl=true&replicaSet=atlas-x4sv3y-shard-0&authSource=admin&retryWrites=true&w=majority&appName=evenhub-db";
const connectDB = async () => {
    mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));
}
module.exports = connectDB; 