const mongoose = require('mongoose');

const connectDatabse = () => {
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(connect =>  console.log(connect.connection.host));
}

module.exports = connectDatabse;